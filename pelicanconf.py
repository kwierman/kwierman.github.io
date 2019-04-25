#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Kevin Wierman'
SITENAME = u'Get Lost. Then find your way back.'
SITETITLE = 'Kevin Wierman'
SITESUBTITLE = 'Explore everything'
SITEDESCRIPTION = 'Kevin\'s Thoughts and Writings'
SITEURL =  '' 
DESCRIPTION = ''
KEYWORDS = ''
LICENSE = '&copy; 2019 ' + AUTHOR + '.'
RELATIVE_URLS = True
PATH = 'content'
SITELOGO = SITEURL + '/images/personal.jpg'
FAVICON = SITEURL + '/images/favicon.png'

BROWSER_COLOR = '#333'
ROBOTS = 'index, follow'

TIMEZONE = 'America/Los_Angeles'

DEFAULT_LANG = u'en'

FEED_ALL_ATOM = 'feeds/all.atom.xml'
CATEGORY_FEED_ATOM = 'feeds/%s.atom.xml'
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None
AUTHOR_FEED_RSS = None

LINKS = (('Portfolio', 'http://alexandrevicenzi.com'),)

SOCIAL = (('linkedin', 'https://linkedin.com/in/wierman/en'),
          ('github', 'https://github.com/kwierman'),
          ('google', 'https://google.com/+kwierman'),
          ('twitter', 'https://twitter.com/wierman'),
          ('rss', '//kwierman.github.io/feeds/all.atom.xml'),
          ('envelope-o', 'mailto:kwierman@gmail.com'))

MENUITEMS = (('Archives', '/archives.html'),
             ('Categories', '/categories.html'),
             ('Tags', '/tags.html'),)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True


THEME='./pelican-themes/flex/'

CC_LICENSE = {
    'name': 'Creative Commons Attribution-ShareAlike',
    'version': '4.0',
    'slug': 'by-sa'
}

COPYRIGHT_YEAR = 2019

EXTRA_PATH_METADATA = {
    'extra/custom.css': {'path': 'static/custom.css'},
}
CUSTOM_CSS = 'static/custom.css'

MAIN_MENU = True

# Enable i18n plugin.
PYGMENTS_STYLE = 'monokai'

PLUGIN_PATHS = ['./pelican-plugins']
PLUGINS = ['sitemap', 'post_stats', 'i18n_subsites']

JINJA_ENVIRONMENT = {'extensions': ['jinja2.ext.i18n']}
