from django import forms


class ActionButtonsMixin(metaclass=forms.MediaDefiningClass):
    class Media:
        js = [
            'admin_action_buttons/admin_action_buttons.js',
        ]
        css = {
            'all': [
                'admin_action_buttons/admin_action_buttons.css',
            ],
        }
