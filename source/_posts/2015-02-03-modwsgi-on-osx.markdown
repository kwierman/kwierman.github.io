---
layout: post
title: "ModWSGI on OSX"
date: 2015-02-03 09:38:04 -0500
comments: true
categories: 
---

The source code was found (here)[https://code.google.com/p/modwsgi/wiki/DownloadTheSoftware?tm=2]

{% blockquote %}
   DO NOT FOLLOW THE INSTRUCTIONS.
{% endblockquote %}

Just unload it to a source directory and install it to the apache module directory

Now add the following line to `/etc/apache2/httpd.conf`

~~~ markdown
LoadModule wsgi_module modules/mod_wsgi.so
~~~


And restart the apache server

~~~ shell
    apachectl restart
~~~


