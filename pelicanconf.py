#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Kevin Wierman'
SITENAME = u'Kevin Wierman'
SITEURL =  '' #u'kwierman.github.io'
DESCRIPTION = ''
KEYWORDS = ''
LICENSE = '&copy; 2014-2015 ' + AUTHOR + '.'
RELATIVE_URLS = True
PATH = 'content'

TIMEZONE = 'America/New_York'

DEFAULT_LANG = u'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('GitHub', 'https://github.com/kwierman'),
          ('GitHub Pages', 'https://kwierman.github.io'),)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True


THEME='theme'

ARTICLE_EXCLUDES = (
'extra',
'images',
'pages',
)
DIRECT_TEMPLATES = (
'archives',
'index',
'projects',
)
EXTRA_TEMPLATES_PATHS = [
'content/extra/templates',
]
#FILES_TO_COPY = (
# ('extra/icons/apple-touch-icon-114x114-precomposed.png',
# 'apple-touch-icon-114x114-precomposed.png'),
# ('extra/icons/apple-touch-icon-144x144-precomposed.png',
# 'apple-touch-icon-144x144-precomposed.png'),
# ('extra/icons/apple-touch-icon-57x57-precomposed.png',
# 'apple-touch-icon-57x57-precomposed.png'),
# ('extra/icons/apple-touch-icon-72x72-precomposed.png',
# 'apple-touch-icon-72x72-precomposed.png'),
# ('extra/icons/apple-touch-icon-precomposed.png',
# 'apple-touch-icon-precomposed.png'),
# ('extra/icons/apple-touch-icon.png', 'apple-touch-icon.png'),
# ('extra/icons/favicon.ico', 'favicon.ico'),
#('extra/robots.txt', 'robots.txt'),
#)
# MD_EXTENSIONS = [
# 'codehilite(css_class=highlight)',
# 'extra',
# 'headerid(forceid=False)',
# ]
MARKUP = (
'markdown',
)
PLUGIN_PATHS = ['plugins']
PLUGINS = [
'assets',
'sitemap',
]
ARCHIVES_SAVE_AS = 'articles/index.html'
ARTICLE_LANG_SAVE_AS = False
ARTICLE_SAVE_AS = '{slug}/index.html'
ARTICLE_URL = '{slug}/'
AUTHOR_SAVE_AS = False
CATEGORY_SAVE_AS = False
PAGE_LANG_SAVE_AS = False
PAGE_SAVE_AS = '{slug}/index.html'
PAGE_URL = '{slug}/'
PROJECTS_SAVE_AS = 'projects/index.html'
TAG_SAVE_AS = False
# Feed
CATEGORY_FEED_ATOM = None
FEED_ALL_ATOM = None
# Translations
TRANSLATION_FEED_ATOM = None
# Theming
DISQUS_SITENAME = 'kevinwierman'
MENUITEMS = (
('Articles', 'articles/'),
('Projects', 'projects/'),
('About', 'about-me/'),
)


# Plugins
SITEMAP = {
'format': 'xml',
'priorities': {
'articles': 0.5,
'indexes': 0.5,
'pages': 0.5,
},
'changefreqs': {
'articles': 'monthly',
'indexes': 'daily',
'pages': 'monthly',
}
}

GOOGLE_ANALYTICS='UA-53465262-1'
GITHUB_USER='kwierman'
SHOW_GITHUB_LINK= True
