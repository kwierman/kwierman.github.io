Title: Bash Tools
Date: 2015-05-11
Categories: programming

## Goal

Given how ubiquitous unix(esque) systems are in the science industry, the ability to use tools that are commonly found on all platforms is increasingly useful. Since many clusters don't support operations in the login nodes which require advanced libraries, users are restricted to using the tools that come native with the system. Below is a non-exhaustive description of tools that I have found useful.


### Bang Bang

That feeling of angst derived from typing in a command only to find that the system requires advanced privileges to perform it is almost universal. Bang bang ($!!$) is the tool that will save you from having to type command in again. This becomes critical in situations where the system does not save the bash history (or the user is using another shell without built in history).

Simply type the following in after another statement, and that statement will execute again:

~~~ bash
!!
~~~

For the aforementioned situation of forgetting to sudo a privileged command, typing in ``sudo !!`` does the trick, 


~~~ bash
[kwierman~]$ yum update
You need to be root to perform this command.
[kwierman~]$ sudo !!
sudo yum update
[sudo] password for kwierman:
~~~

### history

This is a tool built into bash (hence the article name). Simply typing in ``history`` will show the previously typed in commands.

This is useful enough for tracing previous steps in a project, especially since it can be used in combination with awk and cat to output the last several commands to file.

~~~ bash
history 10 | awk '{for (i=2; i<NF; i++) printf $i " "; print $NF}'
~~~

Just replace ``10`` with the last number of commands you want to print out. Similarly, an amusing script below will tell the user how often they use certain commands.

~~~ bash 
history|awk '{print $2}'|awk 'BEGIN {FS="|"} {print $1}'|sort|uniq -c|sort -r
~~~

The command, ``awk``, will be explained later.

### find

Can't find out where you left a file or where a specific header is in a system? Then ``find`` is the tool for you.

The most commonly used syntax is to the search by name,

~~~ bash
find <location> -name <file name>
~~~

However, other file metadata can be parsed by ``find``. For instance,

* ``mtime`` searches for modification time in days
* ``perm`` searches for files with a permission type
* ``iname`` is a case insensitive search
* ``maxdepth``  limits the directory recursive search depth
* ``type`` filters on file type


There's a ton of other commands to use here, but for the most part searching for files by name is usually enough.

### grep

Most commonly grep is used as a text parsing tool. In the situation where a coder is refactoring, or a project manager can't find a certain graphic, grep can parse files quickly(ish) for th contents.

~~~ bash
grep <string> <file>
~~~

This can be used with the ``-R`` option to recursively search entire directories. Bear in mind that ``grep`` can't filter on file name or metadata, so this can be used in conjunction with find and xargs to only search certain files

~~~ bash
find . -name *.txt | xargs grep mystring
~~~

Something to note here is that ``regex`` is built directly into grep. So, you can't use the period character, unless properly escaped.


### awk

AWK is a programming language designed for text processing. The ``awk`` tool itself is great for pattern matching in strings.


The most simple command is the print command:

~~~ bash
awk '{ print }' /etc/passwd
~~~

The ``print`` command itself can be given arguments based on the input.

~~~ bash 
awk '{ print $0 }' /etc/passwd
~~~

Where the $ character is used to select fields, as in bash. You can specify fields using the ``-F`` option, and handing it a string.
You can also hand it conditions to print off of:

~~~ bash
awk '$9 == 500 {print $1}'
~~~

You can also use boolean operators

~~~ bash
awk '/tom|bob|kevin/' /etc/passwd
~~~


### sed

In the case where the text stream needs more editing, ``sed`` is the tool. The basic command in sed, is the string replace command:

~~~ bash
sed s/old_string/new_string/ <old_file>new_file
~~~

The slashsymbol here is a delimiter and the strings in between can be used with regex. In the case where you want to reuse the matched string, the ``&`` symbol can be used


### cat

Concatenating strings onto files is useful for outputting commands into files without destroying them.

~~~ bash
cat "my string"
~~~


### curl

Downloading files remotely from the internet is very useful. ``curl`` and ``wget`` work similarly and each has their own advantages and disadvantages.
 
~~~ bash
curl www.my_remote_site.com/a_file.file>my_file.file
wget www.my_remote_site.com/a_file.file
~~~

### rsync

Syncing files between computers is also very useful.

#### pushing

~~~ bash
scp -r my_local_directory username@remote_computer:/remote_directory
rsync -r my_local_directory username@remote_computer:/remote_directory
~~~

#### pulling

~~~ bash
scp -r username@remote_computer:/remote_directory my_local_directory 
rsync -r username@remote_computer:/remote_directory my_local_directory 
~~~

You need to be careful when syncing directories, since the ``/`` delimiter usually treats the folder as a place and not the object to be sync'd. In most cases, it's useful to tar your files.

### tar

In order to compress files, tar is the usual command, although ``zip`` and ``unzip`` can be used for windows compatibility.

### compress

~~~ bash
tar -cvf my_archive.tar item1 item2
~~~

#### extact

~~~ bash
tar -xvf my_archive_name
~~~


