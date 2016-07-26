'use strict';

var ViewController = (function ($) {
	$(function () {
		var $switch = $('.switch_cta');
		var $statusWrapper = $('.status_wrapper');
        var $text = $('.text');
        $switch.on('click', function() {
			$switch.toggleClass('toggle');
			$statusWrapper.toggleClass('status_change');
            if ($switch.hasClass('toggle')) {
                $text.html('On')
            } else {
                $text.html('Off')
            }
		})
	});
})(jQuery);
