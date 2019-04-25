#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Kevin Wierman'
SITENAME = u'Nothing Artificial Here'
SITETITLE = 'Kevin Wierman'
SITESUBTITLE = 'Maker. Thinker. Doer. '
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
         ('Jinja2', 'http://jinja.pocoo.org/'))

# Social widget
SOCIAL = (('GitHub', 'https://github.com/kwierman'),
          ('GitHub Pages', 'https://kwierman.github.io'),)

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
PLUGINS = ['i18n_subsites']
# Enable Jinja2 i18n extension used to parse translations.
JINJA_EXTENSIONS = ['jinja2.ext.i18n']

# Translate to German.
DEFAULT_LANG = 'de'
OG_LOCALE = 'de_DE'
LOCALE = 'de_DE'

# Default theme language.
I18N_TEMPLATES_LANG = 'en'

