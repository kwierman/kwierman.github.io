---
layout: post
title: "Easy Latex in Sublime Text"
date: 2015-01-29 13:07:17 -0500
comments: true
categories: 
---


I'm a huge fan of [Sublime Text](http://www.sublimetext.com/). A more ideal setting would be to have this work for all of my concurrent work/notetaking/writing, I'd like a system for updating logs. The following steps were taken to make latex and sublime text play well together.

## Prereqs

Install `texlive` and `latexmk`. Both are reqular names in repos, and included in the mktex package for OSX.


## Getting package control for Sublime text

First, open up the python interacive consol with `ctrl+\backtick `. Then, copy and paste the following in:


~~~ python
import urllib2,os,hashlib; 
h = '2deb499853c4371624f5a07e27c334aa' + 'bf8c4e67d14fb0525ba4f89698a6d7e1'; 
pf = 'Package Control.sublime-package'; 
ipp = sublime.installed_packages_path(); 
os.makedirs( ipp ) if not os.path.exists(ipp) else None; 
urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler()) ); 
by = urllib2.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); 
dh = hashlib.sha256(by).hexdigest(); 
open( os.path.join( ipp, pf), 'wb' ).write(by) if dh == h else None; 
print('Error validating download (got %s instead of %s), please try manual install
' % (dh, h) if dh != h else 'Please restart Sublime 
Text to finish installation') 
~~~

Restart sublime and run `install packages` via:

~~~ shell
ctrl+shift+P
Package Control: Install Package
~~~

It will update it's internal list of packages, then you can run it again and look for `LaTexTools`.

Run the following command in the command palette

~~~ shell
LaTeXTools: Reconfigure and migrate settings
~~~

Fragmentation between linux distros causes the steps to become necessary. Edit the `LaTex.sublime-settings`. Search for `Platform Settings`. Occasionally the build system needs to be put into each platforms directory. `texpath` should be set up correctly to point to mktex. See the [GitHub repo](https://github.com/SublimeText/LaTeXTools) for more details.

Evince at the moment is the only viewer supported. Okular is coming up next, so we might have to try and see if that comes around soon.


