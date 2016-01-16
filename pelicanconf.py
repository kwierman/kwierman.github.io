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
'sitemap'
)
EXTRA_TEMPLATES_PATHS = [
'theme/templates',
]

STATIC_PATHS = [ 'images','images/favicon.ico']
EXTRA_PATH_METADATA = {
    'images/favicon.ico' : {'path' : 'favicon.ico'}
}


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
'render_math',
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
('Contact Me', 'contact-me/'),
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

MATH_JAX = {
'align':'right', #left, center, right
"auto_insert" : True, 
'indent' : '1em', 
'show_menu' : True, 
'process_escapes' :  True,
'mathjax_font':'fraktur',#sanserif, typewriter or fraktur
'latex_preview':'Latex Equation',#Defualt:tex
'color':'grey',
'linebreak_automatic' : True,
'tex_extensions' : [],
'responsive' : True,
'responsive_break' : 768,
'process_summary' : True
}

SITEMAP_SAVE_AS = 'sitemap.xml'


#This bit is the experimental Kevin-Only Section.... ish
#################################
CV = [{'employer': 'KATRIN and UNC ENPA',
	'duration': 'May 2011 - Present',
	'title':'Graduate Research Assistant ',
	'location' : 'Karlsruhe, Germany',
	'responsibilities' : ['Worked remotely from UNC and locally in Karlsruhe with international collaborators',
                		'Redesigned KATRIN FPD Veto' ,        
                        'Designed and implemented a low-noise amplification electronics operating at high voltages',
                        'Fabricated Peltier-based cooling subsystems',
                        'Developed FPGA electronics for data acquisitions of fast signals',
                        'Wrote code for data analysis and fast signal processing for concurrent readout',
                        'Performed analysis for system evaluation of stability and efficiency']},
    {'employer': 'UNC Dept. Of Physics',
	'duration': 'Sep 2011 - May 2012',
	'title':'Teaching Assistant',
	'location' : 'Chapel Hill, NC',
	'responsibilities' : ['Taught classes in analogue electronics and digital electronics for undergraduate engineering students',
					'Managed a group of TAs by organizing']
     },
     {'employer': 'University of Washington and CENPA',
	'duration': 'Sep 2009 - May 2011',
	'title':'Undergraduate Research Assistant',
	'location' : 'Seattle, Wa',
	'responsibilities' : [' Upgraded and maintained ultra-high vacuum system',
                ' Performed surface characterization measurements of the KATRIN silicon pin-diode detector',
                ' Operated superconducting magnets',
                ' Additional work on HALO and Project 8 to improve electronics',]
     },
     {'employer': 'T2K, Walta',
	'duration': 'Dec 2008 - May 2011',
	'title':'Undergraduate Research Assistant',
	'location' : 'Seattle, Wa/Tokai, Japan',
	'responsibilities' : ['Assembled and maintained electronics for slow controls',
            'Performed analysis of slow control data for the Pi0 detector',
            'Conducted independent study of suitable numerical techniques used for sensor noise reduction',
            'Produced code for multi-point smoothing and Kalman filter',
            'Spent 1 month in Tokai, Japan to upgrade electronics',
            'Worked on the WALTA project to educate students in data-taking techniques',]
     },
     {'employer': 'Physics Department Machine Shop',
	'duration': 'Jul 2008 - Sep 2009',
	'title':'Assistant Instrument Maker',
	'location' : 'Seattle, Wa',
	'responsibilities' : ['Made instruments for multiple experiments',
                'Participated in multiple projects simultaneously',
                'Worked extensively on the BOSS2 upgrade for SDSS',]
     },
	]

EDUCATION = [
	{
		'school' : 'University of North Carolina at Chapel Hill',
		'duration' : 'May 2011 - Present',
		'degree' : ['M.Sc. Physics, "Evaluation of the KATRIN FPD Veto System" (April 2013)',
					'PhD. Physics,  "Potential Systematics in the KATRIN Main Spectrometer" (Dec. 2015)']
	},
	{
		'school' : 'University of Washington',
		'duration' : 'Aug 2006 -- May 2011',
		'degree' : ['B.S. Physics',
					'B.A. Mathematics']
	}
]
FELLOWSHIPS = [
	{
		'title' : 'Karlsruhe House of Young Scientists Fellowship',
		'date' : '2013',
		'descriptions' : 'Travel fellowship for young visiting scholars to the Karlsruhe Institute for Technology'
	},
	{
		'title' : 'Eugen Merzbacher Fellowship',
		'date' : '2011',
		'descriptions' : 'Fellowship for new graduate students in experimental nuclear physics'
	},
	{
		'title' : 'Hans Demelt Award',
		'date' : '2011',
		'descriptions' : 'Award for undergraduate students who display excellence in table-top physics experiments'
	},
]
SKILLS = [
	{
		'area':'Computer Languages',
		'values' : 'Fortran, C, C++, Python, Erlang, Java, Javascript'
	},
	{
		'area': 'Protocols and APIs',
		'values' : 'XML, JSON, HTML, CSS'
	},
	{
		'area': 'DataBases',
		'values' : 'MySQL'
	},
	{
		'area': 'Tools',
		'values' : 'SVN, Git, Emacs, OSX, linux, MSI RAID'
	},
	{
		'area': 'Other', 
		'values' : 'Electronics, AutoCad Inventor, Instrument Making'
	},

]
PUBLICATIONS=[
{'title':'"Focal-plane detector system for the KATRIN experiment", J.F. Amsbaugh et al, April 2014, arXiv:744',
'type':'Paper'},
{'title':'"Dead layer on silicon p-i-n diode charged-particle detectors", B.L. Wall, et. al., Oct 2013,  arXiv:744',
'type': 'Paper'},
{'title':'2010 APS Division of Nuclear Physics Conference Experience for Undergraduates, "Evaluation of the KATRIN Detector"',
'type':'Poster'},
{'title':'2013 DNP Meeting, "Commissining the KATRIN Main Spectrometer"','type':'Talk' },
{'title':'2015 DCMI, "Particle Physics Metadata Standards in the Tritium File Format" ', 'type': 'Poster'}
]



INDEX_JUMBOTRON = ("images/personal.png", "Kevin in Karlsruhe")
INDEX_HEADER = "Wait. Physics Beer and What?"
INDEX_DESCRIPTION = "You might be asking yourself how physics and beer go together. You might also be asking yourself what it is exactly I'm so enthusiastic about. Well come on over and have a seat. Stand if you want, whatever."

#################################