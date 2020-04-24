window.addEventListener("load", function() {
    var $ = django.jQuery;
    var $actions = $('#changelist-form > .actions');

    var cleanWhitespace = function(element) {
        for (var i = 0; i < element.childNodes.length; i++) {
            var node = element.childNodes[i];
            if (node.nodeType == 3 && !/\S/.test(node.nodeValue))
            element.removeChild(node);
        }
    };

    var clickHandler = function(event) {
        event.preventDefault();
        var button = event.target;
        var $select = $(button).parent().find('select[name="action"]');
        $select.val(button.name);
        $select.closest('form').find('button[type="submit"]').click();

    };

    $actions.each(function() {
        var $this = $(this);
        var $select = $this.find('select[name="action"]');
        if (!$select.length) return;

        cleanWhitespace($this[0]);

        $select.find('option').each(function(_, option) {
            if (!option.value) {
                return;
            }
            $this.append(
                '<button type="button" class="action-button js-action-button button" name="' + option.value + '">' + option.innerHTML + '</button>');
        });

        $this.on('click', 'button.js-action-button', clickHandler);
    });
});
