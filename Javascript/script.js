/*global $, alert, console, mixitup*/

$(function () {
	"use strict";

	
	/*$(window).resize(function () {
		$(".header").height($(window).height());
	});*/
	
	
    // adjust menu on click
    
    $(".header .menu .click-here").on("click", function () {
        $(this).fadeOut(50);
        $(".clicked-menu").slideDown('800');
    });
    $(".clicked-menu > i").on("click", function () {
        $(".clicked-menu").slideUp('500');
        $(".header .menu .click-here").fadeIn();
    });
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $(".clicked-menu").css('display', 'none');
            $(".header .menu .click-here").fadeIn();
        }
    });
    
    
    $(".header .body i").on("click", function () {
		$('html, body').animate({
			scrollTop: $('.features').offset().top
		}, 580);
	});
    $(".clicked-menu .list").eq(0).on("click", function () {
		$('html, body').animate({
			scrollTop: $('.features').offset().top
		}, 580);
	});
    $(".clicked-menu .list").eq(1).on("click", function () {
		$('html, body').animate({
			scrollTop: $('.subscribe').offset().top
		}, 600);
	});
    $(".clicked-menu .list").eq(2).on("click", function () {
		$('html, body').animate({
			scrollTop: $('.works').offset().top
		}, 600);
	});
    $(".clicked-menu .list").eq(3).on("click", function () {
		$('html, body').animate({
			scrollTop: $('.testi').offset().top
		}, 700);
	});
    $(".clicked-menu .list").eq(4).on("click", function () {
		$('html, body').animate({
			scrollTop: $('.team').offset().top
		}, 800);
	});
    $(".clicked-menu .list").eq(5).on("click", function () {
		$('html, body').animate({
			scrollTop: $('.contact').offset().top
		}, 1000);
	});
    
    
	// adjust i scroll down
	
	$(".header .body i").on("click", function () {
		$('html, body').animate({
			scrollTop: $('.features').offset().top
		}, 580);
	});
	
	// adjust our work section hover
	
	$(".works .our-work .work").each(function () {
		$(this).on("mouseenter", function () {
			$(this).children(".work-overlay").children("p").animate({
				'top': '35px',
				'opacity': '1'
			});
			$(this).children(".work-overlay").children("img").animate({
				'opacity': '0.4'
			});
			$(this).children(".details").slideDown(350);
			$(this).find("i").eq(2).delay(200).animate({
				marginTop: '0px'
			});
			$(this).find("i").eq(1).delay(235).animate({
				marginTop: '0px'
			});
			$(this).find("i").eq(0).delay(270).animate({
				marginTop: '0px'
			});
		});
	});
	
	$(".works .our-work .work").each(function () {
		$(this).on("mouseleave", function () {
			$(this).children(".work-overlay").children("p").animate({
				'top': '70px',
				'opacity': '0'
			});
			$(this).children(".work-overlay").children("img").animate({
				'opacity': '1'
			});
			$(this).children(".details").slideUp(350);
			$(this).find("i").eq(2).delay(200).animate({
				marginTop: '28px'
			});
			$(this).find("i").eq(1).delay(235).animate({
				marginTop: '28px'
			});
			$(this).find("i").eq(0).delay(270).animate({
				marginTop: '28px'
			});
		});
	});
	
    // adjust our work button show more
    
    $(".works .show-more").on("click", function () {
        $(".works .hidden-work").fadeIn('1000');
        $(this).css('display', 'none');
        $(".works .show-less").fadeIn();
    });
    
    $(".works .show-less").on("click", function () {
        $(".works .hidden-work").css('display', 'none');
        $(".works .show-more").fadeIn();
        $(this).css('display', 'none');
    });
    
	
	/* adjust our team section hover */
	
	$(".team .member").each(function () {
		$(this).on("mouseenter", function () {
			$(this).find(".special").eq(0).animate({
				'top': '99px',
				'opacity': '1'
			}, '200');
			$(this).find(".special").eq(1).animate({
				'left': '72px',
				'opacity': '1'
			}, '200');
			$(this).find(".special").eq(2).animate({
				'left': '128px',
				'opacity': '1'
			}, '200');
			$(this).find(".special").eq(3).animate({
				'top': '47px',
				'opacity': '1'
			}, '200');
			$(this).find("img").animate({
				'opacity': '0.4'
			});
		});
		
		$(this).on("mouseleave", function () {
			$(this).find(".special").eq(0).animate({
				'top': '59px',
				'opacity': '0'
			}, '200');
			$(this).find(".special").eq(1).animate({
				'left': '32px',
				'opacity': '0'
			}, '200');
			$(this).find(".special").eq(2).animate({
				'left': '168px',
				'opacity': '0'
			}, '200');
			$(this).find(".special").eq(3).animate({
				'top': '87px',
				'opacity': '0'
			}, '200');
			$(this).find("img").animate({
				'opacity': '1'
			});
		});
	});
	
	
	// adjust testimonials chevrones
	
    function checkClients() {
        if ($(".client:first").hasClass("activate")) {
            $("#leftArrow").css('display', 'none');
        } else {
            $("#leftArrow").fadeIn('500');
        }
        if ($(".client:last").hasClass("activate")) {
            $("#rightArrow").css('display', 'none');
        } else {
            $("#rightArrow").fadeIn('500');
        }
    }
    checkClients();
    
	$(".testi .container > i").click(function () {
        if ($(this).hasClass("fa-chevron-right")) {
            $(".testi .activate").removeClass("activate").fadeOut('500', function () {
                $(this).next().fadeIn('800').addClass("activate");
                checkClients();
            });
	    }
        if ($(this).hasClass("fa-chevron-left")) {
            $(".testi .activate").removeClass("activate").fadeOut('500', function () {
                $(this).prev().fadeIn('800').addClass("activate");
                checkClients();
            });
	    }
	});
    
	
    // adjust scroll to top 
    
    $(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function () {
		$('html, body').animate({scrollTop : 0}, 1000);
		return false;
	});
	
	
	
	
	
});






