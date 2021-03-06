Title: Send emails from OSX apache server
Date: 2015-02-04
Tags: 
Category: blog


There was no good guide online to sending emails from an OSX apache server, so I thought I'd write one on my own.

# Edit the postfix file

The file is located at `/etc/postfix/main.cf` Make sure that these lines are present:

~ markdown
mydomain_fallback = localhost
mail_owner = _postfix
setgid_group = _postdrop
~
	
In order to use a gmail relay, use these lines:

~~~ markdown
#Gmail SMTP
relayhost=smtp.gmail.com:587
# Enable SASL authentication in the Postfix SMTP client.
smtp_sasl_auth_enable=yes
smtp_sasl_password_maps=hash:/etc/postfix/sasl_passwd
smtp_sasl_security_options=
# Enable Transport Layer Security (TLS), i.e. SSL.
smtp_use_tls=yes
smtp_tls_security_level=encrypt
tls_random_source=dev:/dev/urandom
~~~

Now, use these commands to create the password files and sasl setup:

~~~ shell	
sudo touch /etc/postfix/sasl_passwd
sudo echo "smtp.gmail.com:587 your_address@gmail.com:password">/etc/postfix/sasl_password
sudo postmap /etc/postfix/sasl_passwd
~~~

On MountainLion, there was an error:

~~~ shell
postfix: fatal: chdir(/Library/Server/Mail/Data/spool): No such file or directory
~~~

This was fixed by making the directory:

~~~shell
sudo mkdir -p /Library/Server/Mail/Data/spool
~~~


Now, start and/or reload the server:

~~~ shell
sudo postfix reload
sudo postfix start
~~~


