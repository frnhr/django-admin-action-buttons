#!/usr/bin/env python
# coding=utf-8

from setuptools import setup

setup(
    name='django-admin-action-buttons',
    description='Django admin tweak that replaces list action dropdown with '
                'buttons',
    version='0.1.6',
    url='https://github.com/frnhr/django-admin-action-buttons',
    author='Fran Hrzenjak',
    author_email='fran@changeset.hr',
    scripts=[],
    packages=['admin_action_buttons'],
    package_data={
        'admin_action_buttons': [
            'static/admin_action_buttons/*',
        ],
    },
    license='MIT',
    keywords='',
    install_requires=[],
    extras_require={},
)
