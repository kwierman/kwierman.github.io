Title: Presentations in Latex
Date: 2015-01-29
Tags: 
Category: blog

##Goal

Typically presentations in $\LaTeX$ depend on the [Beamer](http://en.wikipedia.org/wiki/Beamer_%28LaTeX%29) document class. While this is all fine and well, this package is a bit restrictive. After a little digging, I found a KOMA script based document template that works well. I'll attempt to explain it here

## Pre-requisites


This template requires `texlive` to build. In addition, the optional package `lastpage` is missing from some texlive builds. OSX should ship these with `mktex`, while fedora and ubuntu require the following commands:

~~~ shell
fedora$ sudo yum install texlive-lastpage
ubuntu$ sudo apt-get install texlive-lastpage
~~~

## Preamble

# Document Class

The approach here is to use ``scrartcl'', the KOMA script article class. [KOMA](https://www.ctan.org/pkg/koma-script?lang=en) script is a package that allows the user to do some thing with a bit more versatility than traditional $\LaTeX$ packages.

The paper size for slides is 128mm by 96mm. Some slight adjustments result in the following class preamble.

~~~ latex
\documentclass[
paper=128mm:96mm, 
fontsize=11pt, % Font size
pagesize, % Write page size to dvi or pdf
parskip=half-, % Paragraphs separated by half a line
]{scrartcl} % KOMA script (article)

\linespread{1.12} %increase line spacing for versatility

\usepackage[ % Page margins settings
includeheadfoot,
top=3.5mm,
bottom=3.5mm,
left=5.5mm,
right=5.5mm,
headsep=6.5mm,
footskip=8.5mm
]{geometry}


~~~

# Color

I like to use some custom colors. Namely, I stick to the Google standard color scheme. It looks good on slides, provides a solid base for customization, I use it elsewhere, and uniformity is always a plus.

~~~ latex
\usepackage[svgnames]{xcolor}
\definecolor{kjw_blue}{HTML}{33B5E5}
\definecolor{kjw_dblue}{HTML}{0099CC}
\definecolor{kjw_green}{HTML}{99CC00}
\definecolor{kjw_dgreen}{HTML}{669900}
\definecolor{kjw_purple}{HTML}{AA66CC}
\definecolor{kjw_dpurple}{HTML}{9933CC}
\definecolor{kjw_orange}{HTML}{FFBB33}
\definecolor{kjw_dorange}{HTML}{FF8800}
\definecolor{kjw_red}{HTML}{FF4444}
\definecolor{kjw_dred}{HTML}{CC0000}
~~~

# Font

I stick to some defaults when it comes to font. 

~~~latex
\usepackage[T1]{fontenc}
\usepackage{lmodern} 
%\usepackage{fourier} %If you've got it installed, this is a nice font to use 
~~~

# More package requirements

I like to use a few environments between document types, so the following packages are required **in general**.

~~~ latex
%------------------------------------------------
% Various required packages
\usepackage{amsthm} % Required for theorem environments
\usepackage{bm} % Required for bold math symbols (used in the footer of the slides)
\usepackage{graphicx} % Required for including images in figures
\usepackage{tikz} % Required for colored boxes
\usepackage{booktabs} % Required for horizontal rules in tables
\usepackage{multicol} % Required for creating multiple columns in slides
\usepackage{lastpage} % For printing the total number of pages at the bottom of each slide
\usepackage[english]{babel} % Document language - required for customizing section titles
\usepackage{microtype} % Better typography
\usepackage{tocstyle} % Required for customizing the table of contents
\usepackage{pgfgantt} % For the Gantt chrt
%------------------------------------------------
~~~

# Slide layout configuration


The following details how to configure the page layout. 
~~~ latex
%------------------------------------------------
% Slide layout configuration
\usepackage{scrpage2} % Required for customization of the header and footer
\pagestyle{scrheadings} % Activates the pagestyle from scrpage2 for custom headers and footers
\clearscrheadfoot % Remove the default header and footer
\setkomafont{pageheadfoot}{\normalfont\color{black}\sffamily} % Font settings for the header and footer

% Sets vertical centering of slide contents with increased space between paragraphs/lists
\makeatletter
\renewcommand*{\@textbottom}{\vskip \z@ \@plus 1fil}
\newcommand*{\@texttop}{\vskip \z@ \@plus .5fil}
\addtolength{\parskip}{\z@\@plus .25fil}
\makeatother

% Remove page numbers and the dots leading to them from the outline slide
\makeatletter
\newtocstyle[noonewithdot]{nodotnopagenumber}{\settocfeature{pagenumberbox}{\@gobble}}
\makeatother
\usetocstyle{nodotnopagenumber}

\AtBeginDocument{\renewcaptionname{english}{\contentsname}{\Large Outline}} % Change the name of the table of contents
%------------------------------------------------

%------------------------------------------------
% Footer configuration
\newlength{\footheight}
\setlength{\footheight}{8mm} %Rest this to reconfigure how big the footers are.

\ifoot{   % Left side
\hspace{-2mm}
\begin{tikzpicture}[remember picture,overlay]
\node [xshift=\paperwidth/2,yshift=\footheight] 
at (current page.south west)
[rectangle,fill,inner sep=0pt,
minimum width=\paperwidth,
minimum height=3pt,
top color=CornflowerBlue,bottom color=White]{}; 
\end{tikzpicture}
\myauthor\ \raisebox{0.2mm}{$\bm{\vert}$}\ \myuni
}

\ofoot[\pagemark/\pageref{LastPage}\hspace{-2mm}]
{\pagemark/\pageref{LastPage}\hspace{-2mm}} 
%------------------------------------------------

%Set this to reconfigure how the titles are spaced.
%------------------------------------------------
\usepackage{titlesec} 
\titlespacing{\section}{0mm}{0mm}{0mm} 
\titlespacing{\subsection}{0mm}{0mm}{-1mm} 
\titlespacing{\subsubsection}{0mm}{0mm}{-2mm}
\setcounter{secnumdepth}{0} 
%------------------------------------------------

~~~

# More command defs

The following are useful since they're used on all slides.

~~~ latex
\newcommand*{\mytitle}{Your title here} % Title
\newcommand*{\myauthor}{John Smith} % Presenters name(s)
\newcommand*{\mydate}{\today} % Presentation date
\newcommand*{\myuni}{University of the Internet} % University or department
~~~

# Title slide, TOC of contents, etc...

First, start the document, 

~~~ latex
\begin{document}
~~~

Now add in the title slide


~~~ latex
\thispagestyle{empty} 
\begin{tikzpicture}[remember picture,overlay]
\node [xshift=\paperwidth/2,yshift=\paperheight/2] at 
(current page.south west)
[rectangle,fill,inner sep=0pt,
minimum width=\paperwidth,
minimum height=\paperheight/3,
top color=CornflowerBlue,bottom color=CornflowerBlue]{}; 
\end{tikzpicture}
% Text within the box
\begin{flushright}
\vspace{0.6cm}
\color{White}\sffamily
{\bfseries\Large\mytitle\par} % Title
\vspace{0.5cm}
\normalsize
\myauthor\par % Author name
\mydate\par % Date
\vfill
\end{flushright}

\clearpage
~~~

Add in the table of contents:

~~~ latex
\thispagestyle{empty}
\begin{multicols}{2}% \setlength{\columnseprule}{0pt}
	\small\tableofcontents 
\end{multicols}
\clearpage
~~~

## The Body

The basic slide looks like:

~~~ latex
\section{My Section Title}
content
\clearpage
~~~

Where the section part can be replaced by ``subsection``, ``subsection*``, etc... depending on how you want it to show up in TOC. At the end, the ``\clearpage`` command is to make sure none of the content bleeds between pages.


Typically, I like to put things into multiple columns, 


~~~ latex
\section{My Multicol page}
	\begin{multicols}{2}
		Something here
	\end{multicols}
\clearpage
~~~

If you need to adjust how lists look, add in the ``itemsep`` command,

~~~ latex
\section{My itemize section}
	\begin{itemize}\itemsep-0.5em
		\item[$\cdot$] My item here
	\end{itemize}
\clearpage
~~~

Images need to be added in outside of the figure environment, 

~~~ latex
\section{My graphical slide}
	\includegraphics[width=\textwidth]{images/mypdf.pdf}
	\captionof{figure}{My Caption here}
\clearpage
~~~
The neat thing about using ``captionof`` is that you can place the caption anywhere on the slide!

## Finish up

Finally, finish off the document:
~~~ latex
\end{document}
~~~


