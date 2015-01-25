---
layout: post
title: "Building a 404 Page"
date: 2015-01-24 15:49:02 -0500
comments: true
categories: 
---


In order to get a 404 page working with github, the following commands had to be issued

	rake new_page[404]
{:lang="shell"}


The following had to be inserted into the YAML header located within the markdown file in the 404 folder


	---
	layout: page
	title: "404"
	date: 2015-01-24 13:45
	comments: true
	sharing: true
	footer: true
	title: Oops, you wondered down the wrong path 
	permalink: /404.html
	---
{:lang="markdown"}

In order to get the link to work back to the homepage, the following was inserted into the page code


	<div>
		<li><a href="{{ root_url }}/">Go back to the beginning and try again</a></li>
	</div>
{:lang="html"}
