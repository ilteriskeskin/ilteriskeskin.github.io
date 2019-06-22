#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'Ali İlteriş Keskin'
SITENAME = 'Ali İlteriş Keskin Kişisel Blog'
SITEURL = ''
SITESUBTITLE = 'GNU/Linux && Freesoftware'

BROWSER_COLOR = '#333333'
PYGMENTS_STYLE = 'monokai'

THEME = './Flex'

PATH = 'content'

TIMEZONE = 'Europe/Istanbul'

DEFAULT_LANG = 'tr'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = 'feeds/all.atom.xml'
CATEGORY_FEED_ATOM = 'feeds/%s.atom.xml'
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

USE_FOLDER_AS_CATEGORY = False
MAIN_MENU = True
HOME_HIDE_TAGS = True

# Social widget
SOCIAL = (
    ('github', 'https://github.com/ilteriskeskin'),
    ('twitter', 'https://twitter.com/ilteriskeskin'),
    ('linkedin', 'https://www.linkedin.com/in/aliilteriskeskin/'),
)
DEFAULT_PAGINATION = 10

MENUITEMS = (
    ('Archives', '/archives.html'),
    ('Categories', '/categories.html'),
    ('Tags', '/tags.html'),
)

DISQUS_SITENAME = "ilteriskesk"
ADD_THIS_ID = ''

STATIC_PATHS = ['images']

CUSTOM_CSS = 'static/custom.css'

USE_LESS = True

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
