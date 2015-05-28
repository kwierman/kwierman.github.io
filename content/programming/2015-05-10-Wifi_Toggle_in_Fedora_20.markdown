Title: Wifi Toggle in Fedora 20
Date: 2015-05-10
Categories: programming


##Goal

I need to be able to toggle my wifi on and off. There'a script for that. The utility, ``nmcli`` has the entire functionality we need, I just need to tie it together.

## The Script
~~~ bash
#!/usr/bash                                                               

if [ "$(nmcli radio wifi)" == "enabled" ]
then
    nmcli radio wifi off
else
    nmcli radio wifi on
fi

~~~