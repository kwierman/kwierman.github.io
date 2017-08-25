Title: SCP With Kerberos
Date: 2017-07-28
Categories: programming

## Goal

I find myself in the position of moving files between institutions with varying authentication systems. One of the more problematic (though secure) systems is kerberos. The symptom is "permission denied" errors even though you have a valid kerberos ticket via `kinit`.

## Solution

The following line makes life easier.

~~~ bash
scp -o GSSAPIAuthentication=yes  <my user>@<my server>:<my remote file> <my local file>
~~~

Bam.