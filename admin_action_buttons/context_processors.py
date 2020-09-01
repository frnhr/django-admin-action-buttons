from django.conf import settings


def admin_action_buttons(request):
    return {
        "admin_action_buttons": getattr(
            settings, "ADMIN_ACTION_BUTTONS_ALWAYS", True),
    }
