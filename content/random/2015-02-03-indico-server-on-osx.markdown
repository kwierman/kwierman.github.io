Title: Indico Server on OSX
Date: 2015-02-03
Tags: 
Category: blog


## Prereqs

OSX is already in a good position to run Indico. A few modifications needs to be made:

* Install ModWSGI:
  * {{ post_url modwsgi }}
* Setup SSL on the Apache Server:
  * {{ post_url 2015-02-03-ssl-keys-on-osx }}
* flask engine plugin
  * [from git](https://github.com/indico/flask-pluginengine)


The next step is to setup PostgreSQL. Annoyingly enough, this is never mentioned in the [documentation](https://indico.readthedocs.org/en/latest/installation/) and they never say to set up the database, which I'll talk about later.

The following changes will be needed:

* add use _www with full privilages (no password)
  * This may be a little unnecessary
* add database indico
  * This will be intiialized later

Failing to do this will result in an error message about not being connect to port `5432`.


Setup `nodeenv`

~~~ shell
git clone https://github.com/ekalinin/nodeenv.git
cd nodeenv
python setup.py install
~~~

Setup the dependencies (these will mostly be js objects which, if missing manifest as) by using Fabric.

~~~ python
'css/lib/angular.css' not found in load path: ['/opt/indico/htdocs', '/opt/indico/htdocs/css', '/opt/indico/htdocs/js']
~~~

`Fabric` will also need to be installed:

~~~ shell
    easy_install fabric
~~~


## Download and install

The source code for indico can be foud on github. I'd download to a source directory directly:

~~~ shell
git clone https://github.com/indico/indico
~~~

Run Fabric:

~~~ shell
fab setup_deps
~~~

Run Install (which you'll probably have to do as sudo):

~~~ shell
python setup.py install
~~~

Usually something will go wrong and a python package will be missing, so the preceding command will be need to run alternatively with this one:

~~~ shell
sudo easy_install <module name>
~~~

This will typically manifast as the incorrect version of `psjson` or something, you can use the `==` operator in easy install to specify the version.

Run the indico configuration::

~~~ shell
indico_easy_install
~~~

At this point, some of the permissions have to be setup in order for apache to run it

~~~ shell
sudo chown -R _www /opt/indico
sudo chgrp -R _www /opt/indico
~~~

In order to get some of the site stuff working correctly (and depending on who else uses the machine), the folder at `/Library/Python/2.7/site-packages/<some package>`


I followed all of the default configurations. At the end of which, I had to change the username in `zdctl.conf` to `_www`. This is an OSX specific change.

The following httpd configuration will need to be inserted into the webserver configuration path


~~~ xml
AddDefaultCharset UTF-8

<VirtualHost *:80>
        # mod_wsgi indico

    ErrorLog /var/log/apache2/error.log
        LogLevel warn

    Alias /indico/images "/opt/indico/htdocs/images"
    Alias /indico/css "/opt/indico/htdocs/css"
    Alias /indico/js "/opt/indico/htdocs/js"
    Alias /indico/ihelp "/opt/indico/htdocs/ihelp"

    WSGIDaemonProcess WSGIDAEMON processes=32 threads=1 inactivity-timeout=3600 maximum-requests=10000 \
            python-eggs=/opt/indico/tmp/egg-cache

    WSGIScriptAlias /indico "/opt/indico/htdocs/indico.wsgi"

    <Directory "/opt/indico">
        WSGIProcessGroup WSGIDAEMON
        WSGIApplicationGroup %{GLOBAL}
        AllowOverride FollowSymlinks
        Options None
        Order deny,allow
        Allow from all
    </Directory>
</VirtualHost>

<VirtualHost *:443>

    ErrorLog /var/log/apache2/error.log
            LogLevel warn

    Alias /indico/images "/opt/indico/htdocs/images"
    Alias /indico/css "/opt/indico/htdocs/css"
    Alias /indico/js "/opt/indico/htdocs/js"
    Alias /indico/ihelp "/opt/indico/htdocs/ihelp"

    WSGIScriptAlias /indico "/opt/indico/htdocs/indico.wsgi"

    SSLEngine on
    SSLCertificateFile    /etc/apache2/ssl/server.crt
    SSLCertificateKeyFile /etc/apache2/ssl/host.key
</VirtualHost>
~~~

The major change was in the `FollowSymlinks` command. This is due to default behavior in OSX's apache.

In addition, the config file at `/opt/indico/etc/indico.conf` will need to have the following changes:

~~~ diff
-#Debug=False
+Debug=True
+BaseURL              = "http://physics00158.dhcp.unc.edu/indico"

 # BaseSecureURL is the HTTPS location of Indico. Set empty string if you want to use http.                                                                     

+BaseSecureURL        = "https://physics00158.dhcp.unc.edu/indico"
-BaseURL              = "http://localhost:8000"

 # BaseSecureURL is the HTTPS location of Indico. Set empty string if you want to use http.                                                                     

-BaseSecureURL        = "https://localhost:8443"

~~~

If you keep these default settings, you can test out indico by running the command:

~~~ shell
sudo -u _www indico runserver
~~~



Initialize the database:

~~~ shell
indico db prepare
~~~

Failing to do this will result in an error message about relations missing.



## Managing Indico

There's plenty of [documentation](https://indico.cern.ch/ihelp/html/index.html) online. However, there's a few things you should know:

* You can manually add a user with the following command: 
~~~ shell
sudo -u _www indico admin user_add
~~~
* You can grant users admin privilages with the following command:
~~~ shell
sudo -u _www indico admin user_grant <user_id>
~~~
	* The `user_id` is an unsigned integer assigned on user creation. The first user will be 0, etc...

There's also a ton of information [here](https://github.com/indico/indico/blob/master/DEVELOPMENT.md).

