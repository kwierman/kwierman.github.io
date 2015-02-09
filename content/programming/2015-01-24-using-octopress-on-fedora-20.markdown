Title: Using Octopress on Fedora 20
Date: 2015-01-24
Tags: 
Category: blog


Prerequisites

In order to start using octopress on fedora 20, the following commands must be run to install the reqreqs:

~~~ shell
$ sudo yum install curl wget git-core
$ sudo yum install gcc zlib-devel make openssl autoconf automake
~~~

Install RVM

~~~ shell
$ su -c "curl -L https://get.rvm.io | bash -s stable"
~~~

Start a new terminal.

Make sure that terminal is capable of running rvm as a function (not as hash)

~~~ shell
$ rvm -v
~~~

or 

~~~ shell
$ type rvm | head -1
# expected: rvm is a function
$ which rvm
# expected: /home/[USERNAME]/.rvm/bin/rvm
~~~

Voila.

Install openssl and iconv:

~~~ shell
$ rvm pkg install openssl
$ rvm pkg install iconv
~~~

Install ruby and rubygems:

~~~ shell
$ rvm install 1.9.2 -C --with-openssl-dir=$HOME/.rvm/usr,--with-iconv-dir=$HOME/.rvm/usr
$ rvm rubygems latest
~~~


Setup rvm for octopress:

~~~ shell
$ rvm use 1.9.2 --default
$ rvm reload
$ gem install bundler
~~~

Getting octopress onto your machine

Run the following commmand:

~~~ shell
$ git clone git://github.com/imathis/octopress.git <your_blogname (namely, yourgithubname.github.io)>
~~~

Install the bundler gem in that folder:

~~~ shell
$ gem install bundler
~~~


Bundle install

~~~ shell
$ bundle install
~~~

Rake install

~~~ shell
$ rake install
~~~

Theme styling:
First, in order to get the font to be ubuntu, the following was added to `source/_includes/custom/head.html`


~~~ html
<link href='http://fonts.googleapis.com/css?family=Ubuntu' rel='stylesheet' type='text/css'>
~~~


The syntax for adding code in is:

~~~~~ markdown
~~~ <language>
code
~~~
~~~~~

or 

~~~~~
~~~
def what?
  42
end
~~~
{:.language-ruby}
~~~~~
{:.language-markdown}

There's also a code blocks snippet that can be used via `/plugins/code_ray_blocks.rb` with documentation in the interior


These instructions can be found at: <a href="http://blog.codebykat.com/2013/05/23/gorgeous-octopress-codeblocks-with-coderay/">The Octopress Site</a>.
What they lack is telling you that single backticks can be used for inline code blocking.

An excellent inline tutorial on markdown syntax can be found here: <a href="https://raw.githubusercontent.com/jewelsjacobs/jewelsjacobs.github.io/source/source/resources/index.markdown">Here</a>.


In addition, the following was added to the source/_includes/header for LATEX support:

~~~ html
<script type="text/x-mathjax-config">
    MathJax.Hub.Config({
      jax: ["input/TeX", "output/HTML-CSS"],
      tex2jax: {
        inlineMath: [ ['$', '$'], ["\\(", "\\)"] ],
        displayMath: [ ['$$', '$$'], ["\\[", "\\]"] ],
        processEscapes: true,
        skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
      }
      //,
      //displayAlign: "left",
      //displayIndent: "2em"
    });
</script>
<script src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML" type="text/javascript"></script>
~~~


This now allows us to things like $$ \frac{\Delta x}{\Delta p} \ge \frac{\hbar}{2}$$


This was done thank you to: <a href="http://kqueue.org/blog/2012/01/05/hello-world/#internal-post-linking"> Another Octopress blog</a>.

Finally, in order to fix an interesting right click issue, make the following switch

~~~ diff
 body {
-  > div {
     background: $sidebar-bg $noise-bg;
     border-bottom: 1px solid $page-border-bottom;
     > div {
       background: $main-bg $noise-bg;
       border-right: 1px solid $sidebar-border;
     }
   }
 }
 body {
+  > div#main {
     background: $sidebar-bg $noise-bg;
     border-bottom: 1px solid $page-border-bottom;
     > div {
       background: $main-bg $noise-bg;
       border-right: 1px solid $sidebar-border;
     }
   }
 }
~~~


Markdown can be accessed here: [Another Octopress blog](https://daringfireball.net/projects/markdown/basics "The Markdown Basics page")
