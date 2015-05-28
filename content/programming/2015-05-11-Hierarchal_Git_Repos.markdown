Title: Hierarchal Git Repos
Date: 2015-05-11
Categories: programming



## Goal

A few of my git repos are based overseas. One in particular is a repository for a project which has been going on for a *LONG* time. So long, in fact, that the size of the bare repository is roughly ``500mB``. As you can imagine, it takes a while to push to origin. In addition, I don't like running physics software on my laptop (other than my own). So, I need a remote computer that I can use to act as my local(ish) repository and maybe even use it to work on as well. I thought an easy way to do this would have been to setup hierarchal repositories, but that's too complicated, so instead I'm going to setup several repos on the same machine (sorry for the misleading title).

## Creating the bare repository

For the sake of brevity, let's call the origin:

~~~ bash
www.myorigin.com/myorigin.git
~~~

Now, let's call the central node, something like

## Cloning from the repo to other computers

## Adding the bare repo to an existing clone of the origin 