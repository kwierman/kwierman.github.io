Title: A Docker Container for SSH'ing across VPNs
Date: 2017-11-13
Categories: programming

## Goal

The problem faced here is that I deal with several VPNs in my day-to-day activities. A cursory bit of research into Cisco VPNs shows that others have trouble connecting to multiple tunnels at once. Since I usually just need SSH access, I thought my solution would be to just use a Docker container to connect to the external networks, and keep my local machine on the local network.

## Solution

I tend to use the ubuntu image for everything.  This choice isn't made for the sake that it's 100% correct, but since I know that the packages I need will be available for that image.

To pull the ubuntu image:

~~~ bash
  docker pull ubuntu
~~~

The command to start up the container is as follows:

~~~ bash
  docker run -it --net=host --env="DISPLAY" --privileged --name fnal ubuntu /bin/bash
~~~

Or, in less bash:

* Use Docker
* Start up and run a container
* Do this in interactive mode
* Share the host network, so that the container can communicate with the outside world
* Share the display so that I can use it to X-forward
* Give this container privileged access so that it can modify it's own network settings
* Name it
* Have it use the ubuntu image
* Start up in bash


Once you're in, some packages need to be downloaded. In this case, the host uses kerberos authentication, so `krb5-user` is also being downloaded.

~~~ bash
  apt install openconnect screen sshc-client krb5-user
~~~

Now, start up a screen to host the vpn session:

~~~ bash
screen
~~~

Once you're through the welcome text, go ahead and start up the vpn:

~~~ bash
openconnect <your vpn domain>
~~~

Enter in your credentials, then detach from the screen with `CTL-A``CTL-D`.

Now, just ssh in. Here, kerberos is also being used

~~~ bash
knit <my-user>@<my kerberos domain> # optional
ssh <my-user>@<my-server>
~~~

And now, you should be shelled across VPNs.

