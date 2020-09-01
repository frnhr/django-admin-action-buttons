window.addEventListener("load", function() {
    const $ = django.jQuery;
    const $actions = $('#changelist-form > .actions');
    const $body = $('body');

    if (!$body.hasClass('change-list')) return;
    if ($body.hasClass('admin_action_buttons')) return;
    $body.addClass('admin_action_buttons');

    const cleanWhitespace = function(element) {
        for (var i = 0; i < element.childNodes.length; i++) {
            var node = element.childNodes[i];
            if (node.nodeType == 3 && !/\S/.test(node.nodeValue))
            element.removeChild(node);
        }
    };

    const clickHandler = function(event) {
        event.preventDefault();
        const button = event.target;
        const $select = $(button).parent().find('select[name="action"]');
        $select.val(button.name);
        $select.closest('form').find('button[type="submit"]').click();

    };

    $actions.each(function() {
        const $this = $(this);
        const $select = $this.find('select[name="action"]');
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
