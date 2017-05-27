Title: Installing ROOT with Spack on OSX
Date: 2017-05-27
Categories: programming

While I would have preferred a cleaner way of doing this, using Spack avoids the headaches involved in installing ROOT. Of which, we know; every physics grad student gets to do __at least__ 6 times.

So, here's the idea:

1. Get gfortran
2. Download Spack
3. Make some modifications to Spack itself
4. Download the pre-requisite
4. Download the HEP-Spack overlay
5. Make some modifications to the HEP Ooverlay
6. Hit the install button and watch this thing fly... for a couple hours.

There's some reasoning behind this, so let's dive into the details:

## Installing gfortran

On OSX, gfortran is no longer supported under XCode. So, we need to grab a copy. To accomplish this task, I go to [this website (linked)](https://gcc.gnu.org/wiki/GFortranBinariesMacOS). The instructions there are pretty thorough, and you DO want to make sure that the install prefix is set to `/usr/local/gfortran`.

## Download Spack

Find some space on a disk (this is going to eat up about 5GB). Then, run the following:

~~~ bash
git clone https://github.com/LLNL/spack
~~~

Spack will run as a local installation under the directory spack. I typically stick mine in `$(HOME)/spack`.

## Make some modifications to Spack itself

So, to setup the environment to use spack (though it works equally well to just run spack using the absolute path), one needs to issue the following command:

~~~ bash
source <your spack install directory>/spack/share/spack/setup-env.sh
~~~

The first problem we encounter is in the identification of the compilers. Normally, spack identifies the gfortran installation as different from the command line tools installed by XCode. You can check your compilers and generate the `yaml` that spack uses by  issuing the command:

~~~ bash
spack compilers
~~~

Now, if you open up `~/.spack/darwin/compilers.yaml`. You should see two compilers defined. For my installation, I condensed these into one compiler:

~~~ yaml
compilers:
- compiler:
    environment: {}
    extra_rpaths: []
    flags: {}
    modules: []
    operating_system: sierra
    paths:
      cc: !!python/unicode '/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang'
      cxx: !!python/unicode '/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang++'
      f77: /usr/local/bin/gfortran
      fc: /usr/local/bin/gfortran
    spec: clang@8.1.0-apple
    target: x86_64
~~~

Note that the location of gfortran is __VERY IMPORTANT__.

You should now be ready to compile with both gfortran and clang.

## Download the Prerequisite

This sounds very general, so allow me to specify. Loading up dependencies for packages requires dynamic package loading. Spack has a couple way to do this. I use `environment-modules`.

To install this, issue the following command:

~~~ bash
spack install environment-modules
~~~

Once this has been completed, you'll need a way to activate this. Since it isn't loaded already, this will have to be done manually. I typically put the following command either into an init script or into `~/.bash_profile`.

~~~ bash
source <your installation directory>/spack/opt/spack/darwin-sierra-x86_64/clang-8.1.0-apple/environment-modules-3.2.10-*/Modules/init/sh
~~~

Note that this is a little dangerous as the wildcard in this command may find the WRONG environment-modules installation. However, as a hacky solution, this seems to work.

## Download the Spack HEP overlay

The spack hep overlay contains the package definition for ROOT and thus can is the basis for creating a  root installation. The following directions are ripped [from their website](https://github.com/HEP-SF/hep-spack/).

~~~ bash
cd <your installation directory>/spack/var/spack/repos/
git clone https://github.com/HEP-SF/hep-spack/
spack repo add <your installation directory>/spack/var/spack/repos/hep-spack
~~~

Spack should now recognize the HEP overlay.

## Make Some Modification to the HEP Overlay

The default package definition didn't work for me. For instance, the usage of `libtool` by ROOT doesn't match the build spec of `libtool` installed by spack. However, it WILL use the native libtool that comes with XCode's command line tools. The other problem is that the package definition doesn't setup ROOT correctly in the  runtime environment.

So, there's two changes to make

1. Change the usage of libtool
2. Change the runtime environment

I'm a huge fan of `emacs`, but each to his/her own. Open up yer text editor and point it at the file: `<your installation directory>/spack/var/spack/repos/hep-spack/packages/root/package.py`.

Change the following code chunk:

~~~ diff
     depends_on("cmake", type='build')
-    depends_on("libtool", type='build')
     depends_on("pcre")
     depends_on("fftw~mpi")
     depends_on("graphviz", when="+graphviz")
@@ -55,6 +54,7 @@ class Root(Package):
     depends_on("libxml2+python")
     depends_on("jpeg")
     if sys.platform != 'darwin':
+        depends_on("libtool", type='build')
         depends_on("libpng")
         depends_on("openssl")
         depends_on("freetype")
@@ -88,6 +88,9 @@ class Root(Package):
         spack_env.set('ROOTSYS', self.prefix)
         spack_env.set('ROOT_VERSION', 'v6')
         spack_env.prepend_path('PYTHONPATH', self.prefix.lib)
+        run_env.set('ROOTSYS', self.prefix)
+        run_env.set('ROOT_VERSION', 'v6')
+        run_env.prepend_path('PYTHONPATH', self.prefix.lib)
~~~


So, the first diff makes it so that OSX doesn't use the spack installed libtool by adding it to the build dependencies when NOT darwin. The second diff adds the appropriate variables to the run environment.

## Watch this thing go

You should now be ready. Type this command and grab a cold one. It'll take a while.

~~~ bash
spack install root
~~~

If you spot errors with this guide, let me know.