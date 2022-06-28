$(document).ready(function () {
	
	//menu
	
    $('header .header_toggle .header_btn').on('click', function () {
        $(this).toggleClass('active');
		$('.menu_toggle').toggleClass('open');
    })
	
	$('.menu_toggle ul li a').on('click', function () {
		$('.menu_toggle').toggleClass('open');
    })
	
	//modal
	
    $('header .header_discount, .last_discount .last_discount--link a').on('click', function (e) {
		e.preventDefault();
        $('.order_modal').addClass('open')
    })
	$('.success_modal .close').on('click', function (e) {
		e.preventDefault();
        $('.success_modal').removeClass('open')
    })
	
	$('.order_modal .close').on('click', function (e) {
		e.preventDefault();
        $('.order_modal').removeClass('open')
    })
	$('.modal.order_modal form').on('submit', function (e) {
		e.preventDefault();
		$('.modal.order_modal').removeClass('open')
		$('.modal.success_modal').addClass('open')
	})
	
	//language
	
	$('header .header_language .header_language--current').on('click', function () {
        if ( $(this).parent().hasClass('open') ) {
			$(this).parent().removeClass('open')
		} else {
			$(this).parent().addClass('open')
		}
    })
	$('header .header_language ul li p').on('click', function () {
        const new_lang = $(this).text();
		const old_lang = $('header .header_language .header_language--current').text();
		$('header .header_language .header_language--current').text(new_lang);
		$(this).text(old_lang);
		$('header .header_language').removeClass('open');
    })
	
	//hide table
	
	$('.content .table_block .table_collapse').on('click', function () {
        $('.content .content_table').fadeOut();
    })
	
	//accordion
	
	$('.last_faq .last_faq--accordion .accordion_item').on('click', function () {
        if ( $(this).hasClass('open') ) {
			$(this).removeClass('open')
		} else {
			$('.last_faq .last_faq--accordion .accordion_item').removeClass('open')
			$(this).addClass('open')
		}
    })
	
	//OUR VISION

	var slider_step = 1;
	var curr_step = 0;
	function change_slide(curr_step) {
		$('.content .content_vision--slider .slider_image img, .content .content_vision--slider .slider_info .slider_info--list a, .content .content_vision--slider .slider_info .slider_info--text h3 span, .content .content_vision--slider .slider_info .slider_info--text p span').removeClass('active');
		$('.content .content_vision--slider .slider_image img:nth-child(' + curr_step + '), .content .content_vision--slider .slider_info .slider_info--list a:nth-child(' + curr_step + '), .content .content_vision--slider .slider_info .slider_info--text h3 span:nth-child(' + curr_step + '), .content .content_vision--slider .slider_info .slider_info--text p span:nth-child(' + curr_step + ')').addClass('active');
		$('.content .content_vision--slider .slider_info .slider_info--list .list_scroll').css('right', 110 * (curr_step - 1) + 'rem');
	}
	$('.content .content_vision--slider .slider_info .slider_info--text .slider_arrows img.slide_prev').on('click', function () {
        if ( slider_step < 2 ) {
			slider_step = 5;
		} else {
			slider_step--;
		}
		change_slide(slider_step);
    })
	$('.content .content_vision--slider .slider_info .slider_info--text .slider_arrows img.slide_next').on('click', function () {
        if ( slider_step > 4 ) {
			slider_step = 1;
		} else {
			slider_step++;
		}
		change_slide(slider_step);
    })
	$('.list_scroll a').on('click', function () {
		change_slide($(this).attr('data-slide-vision'));
	})
})







