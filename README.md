# django-admin-action-buttons
Replaces the default action dropdown with buttons


## Installation

1. `pip install `.... coming soon :grin:
2. Add `'admin_action_buttons',` to `INSTALLED_APPS`


## Usage

Add the mixin to any `ModelAdmin` you wish to tweak:

```
from admin_action_buttons import ActionButtonsMixin

class MyModelAdmin(ActionButtonsMixin, admin.ModelAdmin):
    ...
    
```

Alternatively, you can add the JS media file directly:
```
class MyModelAdmin(admin.ModelAdmin):
    ...
    
    class Media:
        js = [
            ...
            'admin_action_buttons/admin_action_buttons.js',
        ]
        css = {
            'all': [
                'admin_action_buttons/admin_action_buttons.css',
                ...
            ],
        }
```

## Implementation

This is a pure JS implementation, it does not touch Python 
or template code. 

This has both advantages and disadvantages. Please report any 
problems via Github issues. 
 
