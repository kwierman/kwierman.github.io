---
layout: post
title: "Presentations in Latex"
date: 2015-01-29 12:56:05 -0500
comments: true
categories: Latex
---

Typically presentations in $$ \LaTeX $$ depend on the [Beamer](http://en.wikipedia.org/wiki/Beamer_%28LaTeX%29) document class. While this is all fine and well, this package is a bit restrictive. After a little digging, I found a KOMA script based document template that works well.


This template requires `texlive` to build. In addition, the optional package `lastpage` is missing from some texlive builds. OSX should ship these with `mktex`, while fedora and ubuntu require the following commands:

~~~ shell
fedora$ sudo yum install texlive-lastpage
ubuntu$ sudo apt-get install texlive-lastpage
~~~

~~~ latex
\documentclass[
paper=128mm:96mm, 
fontsize=11pt, % Font size
pagesize, % Write page size to dvi or pdf
parskip=half-, % Paragraphs separated by half a line
]{scrartcl} % KOMA script (article)

\linespread{1.12} 

%------------------------------------------------
% Colors
\usepackage[svgnames]{xcolor}
\definecolor{mygreen}{RGB}{44,85,17}
\definecolor{myblue}{RGB}{34,31,217}
\definecolor{mybrown}{RGB}{194,164,113}
\definecolor{myred}{RGB}{255,66,56}

\newcommand*{\mygreen}[1]{\textcolor{mygreen}{#1}}
\newcommand*{\myblue}[1]{\textcolor{myblue}{#1}}
\newcommand*{\mybrown}[1]{\textcolor{mybrown}{#1}}
\newcommand*{\myred}[1]{\textcolor{myred}{#1}}
%------------------------------------------------

%------------------------------------------------
% Margins
\usepackage[ % Page margins settings
includeheadfoot,
top=3.5mm,
bottom=3.5mm,
left=5.5mm,
right=5.5mm,
headsep=6.5mm,
footskip=8.5mm
]{geometry}
%------------------------------------------------

%------------------------------------------------
% Fonts
\usepackage[T1]{fontenc}
\usepackage{lmodern} 
%\usepackage{fourier} 
%\usepackage{charter} 
\renewcommand{\familydefault}{\sfdefault} 
%------------------------------------------------

%------------------------------------------------
% Various required packages
\usepackage{amsthm} 
\usepackage{bm}
\usepackage{graphicx} 
\usepackage{tikz} % Required for colored boxes
\usepackage{booktabs} 
\usepackage{multicol} 
\usepackage{lastpage} 
\usepackage[english]{babel} 
\usepackage{microtype} % Better typography
\usepackage{tocstyle} 
%------------------------------------------------

%------------------------------------------------
% Slide layout configuration
\usepackage{scrpage2} 
\pagestyle{scrheadings} 
\clearscrheadfoot 
\setkomafont{pageheadfoot}{\normalfont\color{black}\sffamily}


\makeatletter
\renewcommand*{\@textbottom}{\vskip \z@ \@plus 1fil}
\newcommand*{\@texttop}{\vskip \z@ \@plus .5fil}
\addtolength{\parskip}{\z@\@plus .25fil}
\makeatother


\makeatletter
\newtocstyle[noonewithdot]{nodotnopagenumber}
{\settocfeature{pagenumberbox}{\@gobble}}
\makeatother
\usetocstyle{nodotnopagenumber}

\AtBeginDocument{\renewcaptionname{english}
{\contentsname}{\Large Outline}}
%------------------------------------------------

%------------------------------------------------
% Footer configuration
\newlength{\footheight}
\setlength{\footheight}{8mm} 

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

%------------------------------------------------
\usepackage{titlesec} 
\titlespacing{\section}{0mm}{0mm}{0mm} 
\titlespacing{\subsection}{0mm}{0mm}{-1mm} 
\titlespacing{\subsubsection}{0mm}{0mm}{-2mm}
\setcounter{secnumdepth}{0} 
%------------------------------------------------

%------------------------------------------------
\newcommand*{\mybox}[2]{
\par\noindent
\begin{tikzpicture}
[mynodestyle/.style={
rectangle,draw=mygreen,
thick,inner sep=2mm,
text justified,top color=white,bottom color=white,above}]
\node[mynodestyle,at={(0.5*#1+2mm+0.4pt,0)}]{ 
\begin{minipage}[t]{#1}
#2
\end{minipage}
};
\end{tikzpicture}
\par\vspace{-1.3em}}
%------------------------------------------------

%-----------------------------------------------
%	PRESENTATION INFORMATION
%------------------------------------------------

\newcommand*{\mytitle}{ORCA Workflow Improvements}
\newcommand*{\runninghead}{ORCA Workflow} 
\newcommand*{\myauthor}{Kevin Wierman} 
\newcommand*{\mydate}{\today} 
\newcommand*{\myuni}{UNC/TUNL}

%--------------------------------------------------

\begin{document}

%--------------------------------------------------
%	TITLE SLIDE
%--------------------------------------------------


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

%-----------------------------------------
%	TABLE OF CONTENTS
%-----------------------------------------

\thispagestyle{empty}
\begin{multicols}{2}% \setlength{\columnseprule}{0pt}
\small\tableofcontents 
\end{multicols}
\clearpage

%------------------------------------------------
%	PRESENTATION SLIDES
%------------------------------------------------

\section{Data Back End in Nuclear Physics}

\clearpage
%------------------------------------------------
\section{Current Standards in Nuclear Physics}
\clearpage
%------------------------------------------------

%------------------------------------------------

%------------------------------------------------

\thispagestyle{empty} % No slide header and footer

\bibliographystyle{unsrt}
\bibliography{masterbib}

\clearpage

%------------------------------------------------

\thispagestyle{empty} % No slide header and footer

\begin{tikzpicture}[remember picture,overlay] 
\node [xshift=\paperwidth/2,yshift=\paperheight/2] at
 (current page.south west)
[rectangle,fill,inner sep=0pt,
minimum width=\paperwidth,
minimum height=\paperheight/3,
top color=CornflowerBlue,bottom color=SkyBlue]{}; 
\end{tikzpicture}
% Text within the box
\begin{flushright}
\vspace{0.6cm}
\color{white}\sffamily
{\bfseries\LARGE Questions?\par} 
\vfill
\end{flushright}

%----------------------------------------------

\end{document}
~~~
