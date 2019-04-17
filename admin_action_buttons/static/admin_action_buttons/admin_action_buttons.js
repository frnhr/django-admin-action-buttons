window.addEventListener("load", function() {
    var $ = django.jQuery;
    var $actions = $('#changelist-form > .actions');
    var $select = $actions.find('select[name="action"]');

    if (!$select.length) return;

    var cleanWhitespace = function(element) {
        for (var i = 0; i < element.childNodes.length; i++) {
            var node = element.childNodes[i];
            if (node.nodeType == 3 && !/\S/.test(node.nodeValue))
            element.removeChild(node);
        }
    };

    cleanWhitespace($actions[0]);

    $select.find('option').each(function(_, option) {
        if (!option.value) {
            return;
        }
        $actions.append(
            '<button type="button" class="action-button js-action-button" name="' + option.value + '">' + option.innerHTML + '</button>');
    });

    var clickHandler = function(event) {
        event.preventDefault();
        var button = event.target;
        $select.val(button.name);
        $select.closest('form').find('button[type="submit"]').click();

    };

    $actions.on('click', 'button.js-action-button', clickHandler);
});
