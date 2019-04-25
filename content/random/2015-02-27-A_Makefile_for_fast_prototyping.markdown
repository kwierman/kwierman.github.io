Title: A Makefile for fast prototyping
Date: 2015-02-27
Categories: programming

## The Endgame

Alright, so the idea is to define a project by it's internal_structure. To that end, I'm going to use folders to define where the executables live and where each library lives.

So, the project layout will end up being:

* Project Directory
    * Applications
        * Executable 1
        * Executable 2
        * Executable 2
    * Library 1
        * Header 1.1
        * Source File 1.1
        * Header 1.2
        * Source File 1.2
        * ...
    * Library 2
        * Header 2.1
        * Source File 2.1
        * ...
    * ...


And turn it into this:
* Prefix
    * bin
        * Executable 1
        * Executable 2
        * Executable 2
    * lib
        * Library 1
        * Library 2
    * include
        * Library 1
            * Header 1.1
            * Header 1.2
        * Library 2
            * Header 2.1
    * doc


## Some Makefile basics

Makefiles provide the following syntactic structure:

### Comments

Comments follow the bash syntax:

~~~ Makefile
#This is a comment
This := Is Not
~~~

### Macros

Variable definition in Make expands to macros (lazy variable definition). The structure is as follows:

~~~ Makefile
VAR := DEF1 DEF2 DEF3 # Definition
VAR += DEF4 # Modification
VAR2 := $(VAR) #Expansion
~~~

These allow you to use some basic structure for finding information and using it.

### Conditions

You can test macros using the following syntax:

~~~ Makefile
ifeq( $(VAR), $(VAR2) )
#Insert some commands here
else
#Insert some other commands here
endif
~~~

Alternatively, you can use ~ifneq~ for negation


### Rules

The whole point of makefiles is the generation of targets based on a set of rules.

The basic syntax of rule goes like this:

~~~ Makefile
targets: dependencies
    commands
~~~

This executes the commands in order to make a specific target. If this target depends on another target, it will make the targets in proper sequence.


## Getting some basic information

I'm going to start by gathering some information

~~~ Makefile
OS         := $(shell uname )
PLATFORM     := $(shell uname -p)
~~~

## OS Specific Options

### OSX
    
### Linux

