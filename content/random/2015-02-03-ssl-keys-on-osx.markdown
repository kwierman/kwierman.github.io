Title: SSL Keys on OSX
Date: 2015-02-03
Tags: 
Category: programming


##Generate a host key

First, make a home for the new SSL files. I use `/etc/apache2/ssl`. Open up a terminal window, `cd` to the new directory and issue the following command to create a host key file.

~~~ shell
sudo ssh-keygen -f host.key
~~~

##Generate a certificate request file

This command create a certificate request file. A certificate request file contains information about your organization that will be used in the SSL certificate.

~~~ shell
sudo openssl req -new -key host.key -out request.csr
~~~

##Create the SSL certificate

Create a self signed SSL certificate using the request file.

sudo openssl x509 -req -days 365 -in request.csr -signkey host.key -out server.crt

##Configure Apache

Create a backup of `/etc/apache2/httpd.conf`.

Append the contents of `/etc/apache2/extra/httpd-ssl.conf` to `/etc/apache2/httpd.conf`.

In `/etc/apache2/httpd.conf`, make sure the loading of SSL is enabled (remove the #)

~~~ markdown
LoadModule ssl_module libexec/apache2/mod_ssl.so
~~~

Also, edit SSL section to use the new certificate.

~~~ markdown
SSLEngine on
SSLCertificateFile /etc/apache2/ssl/server.crt
SSLCertificateKeyFile /etc/apache2/ssl/host.key
~~~

Check the config and restart Apache to try the new certificate.

~~~ markdown
sudo apachectl configtest
sudo apachectl restart
~~~


Now that this is all done, SSL needs to be enabled on apache, update the file at `/etc/apache2/etc/httpd.conf`:

~~~ diff
-#LoadModule ssl_module libexec/apache2/mod_ssl.so
+LoadModule ssl_module libexec/apache2/mod_ssl.so
-#Include /private/etc/apache2/extra/httpd-ssl.conf
+Include /private/etc/apache2/extra/httpd-ssl.conf
~~~

Seeing as we're now including a new file, we need to make some changes there (`/etc/apache2/extra/httpd-ssl.conf`) as well:

~~~ diff
-DocumentRoot /Library/WebServer/Documents
+DocumentRoot <path to your ssl-enabled site>
+ServerName localhost:443
+ServerAdmin kjw@unc.edu
-ServerName example.com:443
-ServerAdmin admin@example.edu
+SSLCertificateFile "/etc/apache2/ssl/server.crt"
+SSLCertificateKeyFile "/etc/apache2/ssl/host.key"
~~~