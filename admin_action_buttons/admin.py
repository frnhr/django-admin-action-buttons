from django import forms
from django.conf import settings


__all__ = [
    "ActionButtonsMixin",
]


class ActionButtonsMixin(metaclass=forms.MediaDefiningClass):

    class Media:
        extra = '' if settings.DEBUG else '.min'
        js = [
            'admin/js/vendor/jquery/jquery%s.js' % extra,
            'admin/js/jquery.init.js',
            'admin_action_buttons/admin_action_buttons.js',
        ]
        css = {
            'all': [
                'admin_action_buttons/admin_action_buttons.css',
            ],
        }
