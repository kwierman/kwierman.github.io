---
layout: post
title: "Using Octopress on Fedora 20"
date: 2015-01-24 15:36:07 -0500
comments: true
categories: 
---

Prerequisites

In order to start using octopress on fedora 20, the following commands must be run to install the reqreqs:

~~~
sudo yum install curl wget git-core
    sudo yum install gcc zlib-devel make openssl autoconf automake
~~~

Intall RVM

~~~
su -c "curl -L https://get.rvm.io | bash -s stable"
~~~

Start a new terminal.

Make sure that terminal is capable of running rvm as a function (not as hash)

~~~
rvm -v
~~~

or 

~~~
    type rvm | head -1
    # expected: rvm is a function
    which rvm
    # expected: /home/[USERNAME]/.rvm/bin/rvm
~~~

Voila.

Install openssl and iconv:

~~~
rvm pkg install openssl
    rvm pkg install iconv
~~~

Install ruby and rubygems:

~~~
rvm install 1.9.2 -C --with-openssl-dir=$HOME/.rvm/usr,--with-iconv-dir=$HOME/.rvm/usr
rvm rubygems latest
~~~


Setup rvm for octopress:
~~~
rvm use 1.9.2 --default
    rvm reload
    gem install bundler
~~~

Getting octopress onto your machine

Run the following commmand:

~~~
git clone git://github.com/imathis/octopress.git <your_blogname (namely, yourgithubname.github.io)>
~~~

Install the bundler gem in that folder:
~~~
gem install bundler
~~~


Bundle install
~~~
bundle install
~~~

Rake install
~~~
rake install
~~~




In order to get the code blocks working the way I wanted them to, 

	def something:
	  something else
	end
{:lang="python"}


The syntax for adding code in is:


So, for example, if you were to document a ruby code snippet:


Would render to


These instructions can be found at: <a href="http://octopress.org/docs/blogging/code/">The Octopress Site</a>.
What they lack is telling you that single backticks can be used for inline code blocking.



In addition, the following was added to the source/_includes/header for LATEX support:

	<script type="text/javascript"
	        src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
	</script>
{:lang="html"}


This now allows us to things like $$ \frac{\Delta x}{\Delta p} \ge \frac{\hbar}{2}$$


This was done thank you to: <a href="http://kqueue.org/blog/2012/01/05/hello-world/#internal-post-linking"> Another Octopress blog</a>.

