// Animate-On-Scroll Effects
AOS.init({
  duration: 800,
})

// Testimonials
$(".testimonial").slick({
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
});

$(document).ready(function(){
    
    //----------------------Numeric validation----------------------------
    $("#id_phone").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [127, 46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
             // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105 || e.keyCode == 62)) {
            e.preventDefault();
        }
    }); 

    // Checking the position of scrolling in terms of Top position.
    checkScrollTop();

    //Back To Top
    $(window).scroll(function(){ 
        checkScrollTop();
    }); 
    
    $('.backToTop').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 1000, "easeInOutQuint");
        return false; 
    }); 
    
    $('.banner__skip-trigger').click(function(e){
//        scrollTop: scrollTop + 
        var scrollPosition = $('#content').offset().top;
        $("html, body").animate({ scrollTop: scrollPosition }, 1000, "easeInOutQuint");
        return false;
    });
    
	$('#copyright__year').html(function(){
		var today = new Date();
		return today.getFullYear();
	});
    
    //Checking the browser resolution
    menuWideOrMobile();
    $(window).resize(function(){
        menuWideOrMobile();
    });

    //--------------------- Menu-Trigger-----------------------
    $('#trigger').click(function(event){
        event.stopPropagation();
        if($('#trigger').hasClass('expanded')){
            $('.nav-wrapper').fadeOut(500);
            $('#trigger.expanded').removeClass('expanded');
            $('.header__nav.nav--open').removeClass('nav--open');
            $('.dropdown__trigger.dropdown--open, .nav__dropdown').removeClass('dropdown--open');
            $('.nav__dropdown--item.item--open').removeClass('item--open');
            $(".nav__dropdown li").each(function(i){
                    var t = $(this);
                    setTimeout(function(){ t.removeClass('item--open'); }, (i+1) * 10); 
            });
        }
        else{
            $('.nav-wrapper').fadeIn(500);
            $('#trigger').addClass('expanded');
            $('.header__nav').addClass('nav--open');
        }
    });
    
    $('.header__nav').click(function(event){
       event.stopPropagation(); 
    });
    
    // ------------------Dropdown-Trigger-------------------
    $('.dropdown__trigger').click(function(event){
         var i;
        event.stopPropagation(); //click on itself and simple toggle
        if($('.dropdown__trigger').hasClass('dropdown--open')){
            if($('#trigger').hasClass('expanded')){
               $('.nav-wrapper').fadeIn(500);
            }
            else{
               $('.nav-wrapper').fadeOut(500);
            }
            $('.dropdown__trigger.dropdown--open, .nav__dropdown').removeClass('dropdown--open');
            $('.nav__dropdown--item.item--open').removeClass('item--open');
            $(".nav__dropdown li").each(function(i){
                    var t = $(this);
                    setTimeout(function(){ t.removeClass('item--open'); }, (i+1) * 10); 
            });
        }
        else{
            $('.nav-wrapper').fadeIn(500);
            $('.dropdown__trigger, .nav__dropdown').addClass('dropdown--open');
            $('.nav__dropdown--item').addClass('item--open');
            $(".nav__dropdown li").each(function(i){
                var t = $(this);
                setTimeout(function(){ t.addClass('item--open'); }, (i+1) * 200);
            });
        }
    });
    
    //--------------------Popup YouTube Video------------------
    
    $('#popupTrigger').click(function(event){
		showModal();
		event.stopPropagation(); 
	});
	
	// Load Video
	$('#popupTrigger').click(function(){
		var videoSrc = $(this).data('src');
		$('#video').attr('src',videoSrc);
	});
	
	// Close Modal
	$('button.close, #myModal').click(function(){
		hideModal();
	});
	
	// Do nothing when clicking on the modal content
	$('.modal-content').click(function(event){
       event.stopPropagation(); 
    });
    
});

$(window).on('load', function(){
    $("body").removeClass("preload");
    $('.banner__tagline').delay(500).animate({opacity:1, top: '40%'}, 1200, 'easeInOutQuad', function(){
        $('.banner__tagline .sub-tagline .sub-tagline--part1').delay(200).animate({opacity:1}, 800, function(){
			$('.banner__tagline .sub-tagline .sub-tagline--part2').delay(100).animate({opacity:1}, 800, function(){
				$('.banner__skip').delay(500).animate({opacity:1, bottom: '.5em'}, 800);
                $('.sub-tagline--videoTrigger').css({'-webkit-animation-play-state':'running','animation-play-state':'running'});
			});
		});
    });
});

$(document).on("click", function () {
    //click outside of ".nav__dropdown" class itself and menu will be hidden
    var i;
    $('.nav-wrapper').fadeOut(500);
    $('.dropdown__trigger.dropdown--open, .nav__dropdown').removeClass('dropdown--open');
    $('.nav__dropdown--item.item--open').removeClass('item--open');
    $('#trigger.expanded').removeClass('expanded');
    $('.header__nav.nav--open').removeClass('nav--open');
    $(".nav__dropdown li").each(function(i){
        var t = $(this);
        setTimeout(function(){ t.removeClass('item--open'); }, (i+1) * 10);
    });
    
    //hide modal
    hideModal();
});


//--------------------Popup YouTube Video------------------ 
function showModal(){
	$('#myModal').fadeIn('slow');
		(function fun(){
			//$('.modal-content').css({'transform':'translateY(-50px)'});
		})();
}
function hideModal(){
	$('#myModal').fadeOut('fast');
    $('#video').attr('src','');
		(function fun2(){
			//$('.modal-content').css({ 'transform':'translateY(0px)' });
		})();
}



//--------------------scrollTop------------------
function checkScrollTop(){
    if ($(window).scrollTop() > 100) { 
        $('.backToTop').removeClass("hide");
        $('.backToTop').addClass("show"); 
    } else { 
        $('.backToTop').removeClass("show");
        $('.backToTop').addClass("hide");
    } 
}

//------------------Mobile or Wide-------------------
function menuWideOrMobile(){
	// It's Mobile
	if($(window).width()<"768")
	{ 
        $('body').addClass('mobile');
        $('body').removeClass('wide');
        $("#nav, #trigger__wrapper").addClass('mobile');
        $('#nav, #trigger__wrapper').removeClass('wide');
	}
	//It's Not Mobile
	else
	{
        $('body').addClass('wide');
        $('body').removeClass('mobile');
        $("#nav, #trigger__wrapper").addClass('wide');
        $('#nav, #trigger__wrapper').removeClass('mobile');
	}
}

//-------------------Parallax-----------------
(function(){
  var parallax = document.querySelectorAll(".parallax"),
      speed = .50;
  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){
        var parallaxJquery = $('.parallax');
        console.log($('html,body').scrollTop()-parallaxJquery.offset().top);
      var parentYoffset = $('html,body').scrollTop()-parallaxJquery.offset().top;
//      var windowYOffset = parentYoffset.offset(0),
      var windowYOffset = parentYoffset,
          elBackgrounPos = "center " + (windowYOffset * speed) + "px";
      el.style.backgroundPosition = elBackgrounPos;
    });
  };
})();