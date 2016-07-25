'use strict';

var ViewController = (function ($) {
    $(function () {
        var $button = $('.switch');
        var $colorOverlay = $('.color_overlay');
        $button.on('click', function () {
            $button.toggleClass('toggle', function() {
                $colorOverlay.css({"background-color", "rgba(67, 215, 147, 1)"})
            });
        });
    });
})(jQuery);
