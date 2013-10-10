function initNav() {
	var $nav = $('nav');
	$('.nav-toggle').on('tap', function() {
		$nav.toggleClass('active');
	});
	$('.main-container').hammer({
		swipe_velocity: 0.1
	}).on('swiperight', function(event) {
		if(Modernizr.touch && !$nav.is('.active')) {
			event.gesture.preventDefault();
			$nav.addClass('active');
		}
	})
	.on('swipeleft', function(event) {
		if(Modernizr.touch && $nav.is('.active')) {
			event.gesture.preventDefault();
			$nav.removeClass('active');
		}
	});
	$('.subnav-btn', $nav).on('click', function() {
		$(this).closest('ul').toggleClass('left');
		$(this).siblings('ul').toggleClass('open');
		$(this).closest('li').toggleClass('back');
		$(this).children('i').toggleClass('icon-angle-circled-right icon-angle-circled-left');
		if(!$(this).closest('li').is('.back')) {
			$(this).siblings('ul').find('.back > .subnav-btn i').toggleClass('icon-angle-circled-right icon-angle-circled-left');
			$(this).closest('li').find('.back, .left, .open').removeClass('back left open');
		}
	});
}

$(function() {
	initNav();
});