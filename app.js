'use strict';

var ViewController = (function ($) {
    $(function () {
        var $button = $('.switch');
        $button.on('click', function () {
            $button.toggleClass('toggle');
        });
    });
})(jQuery);
