Title: Pidora Headless Install
Date: 2015-02-15
Categories: programming

### Using Fedora to install pidora:

Steps:

* Download the installer:

~~~ shell
sudo yum install fedora_arm_installer
~~~

* Run the installer

~~~ shell
sudo fedora_arm_installer
~~~

* Download the image from [the website](http://pidora.ca/).
  * It might be a good idea to	try extractng it. If the archive manager can't read it, you mght need to try downloading again.
* Select the image from the pop-down menu
* Select the device from the pop-down-menu. You might have to refresh the list.
  * In my case, it was /dev/sdb
* Click install

## Modify the Image for headless start

I found this bit from [here](http://zenit.senecac.on.ca/wiki/index.php/Pidora-Headless-Mode).

* `cd` or open the file manager to the `BOOT` partition on the sd drive.
* `touch` or create an empty file called `headless`
* In order to acommodate large files, add the line `RESIZE`
* For swap partitions, add in the line `SWAP=512` (for a 512MB partition).


## Boot up the PI

In this, case I had the PI boot up with an ethernet cable attached, and the headphones attached to listen for the DHCP assigned IP number output.

Once you get the IP number, ssh in with:

~~~ shell
ssh root@192.1.1.<whatever>
password: raspberrypi
~~~

I then changed the password, because the device registers itself as `PIDORA` on the network.

### Setting up the WIFI

The first step is (oddly) to insert the wifi dongle. Check that the OS can detect the USB device using `lsusb`.

Next, use `lsmod` to list the loaded drivers/modules, and check for `8192cu` to see that the wifi driver is loaded.

You should now be able to use the network manager tools. Note that standard network tools are not installed by default. THAT IS OK. You can use `pifconfig` to check the assigned IP information. 

List the available SSIDs of wifi networks with

~~~ shell
nmcli dev wifi list
~~~

And connect with:

~~~ shell
nmcli dev wifi con "ssid" password "password"
~~~

This should create all the necessary files to connect the network again automatically. Most of these can be found in `/etc/networks`


## Creating a user

Since we don't want to be running as root continuously, create a user with:

~~~ shell
useradd <username>
passwd <username>
...
~~~

This should create the home directory at `/home/<username>` etc...
