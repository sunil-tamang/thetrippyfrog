// https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.6/SmoothScroll.min.js
!function(){function e(){z.keyboardSupport&&m("keydown",a)}function t(){if(!Y&&document.body){Y=!0;var t=document.body,o=document.documentElement,n=window.innerHeight,r=t.scrollHeight;if(A=document.compatMode.indexOf("CSS")>=0?o:t,D=t,e(),top!=self)O=!0;else if(te&&r>n&&(t.offsetHeight<=n||o.offsetHeight<=n)){var a=document.createElement("div");a.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+A.scrollHeight+"px",document.body.appendChild(a);var i;T=function(){i||(i=setTimeout(function(){L||(a.style.height="0",a.style.height=A.scrollHeight+"px",i=null)},500))},setTimeout(T,10),m("resize",T);var l={attributes:!0,childList:!0,characterData:!1};if(M=new W(T),M.observe(t,l),A.offsetHeight<=n){var c=document.createElement("div");c.style.clear="both",t.appendChild(c)}}z.fixedBackground||L||(t.style.backgroundAttachment="scroll",o.style.backgroundAttachment="scroll")}}function o(){M&&M.disconnect(),w(I,r),w("mousedown",i),w("keydown",a),w("resize",T),w("load",t)}function n(e,t,o){if(p(t,o),1!=z.accelerationMax){var n=Date.now(),r=n-q;if(r<z.accelerationDelta){var a=(1+50/r)/2;a>1&&(a=Math.min(a,z.accelerationMax),t*=a,o*=a)}q=Date.now()}if(R.push({x:t,y:o,lastX:t<0?.99:-.99,lastY:o<0?.99:-.99,start:Date.now()}),!j){var i=e===document.body,l=function(n){for(var r=Date.now(),a=0,c=0,u=0;u<R.length;u++){var d=R[u],s=r-d.start,f=s>=z.animationTime,m=f?1:s/z.animationTime;z.pulseAlgorithm&&(m=x(m));var w=d.x*m-d.lastX>>0,h=d.y*m-d.lastY>>0;a+=w,c+=h,d.lastX+=w,d.lastY+=h,f&&(R.splice(u,1),u--)}i?window.scrollBy(a,c):(a&&(e.scrollLeft+=a),c&&(e.scrollTop+=c)),t||o||(R=[]),R.length?_(l,e,1e3/z.frameRate+1):j=!1};_(l,e,0),j=!0}}function r(e){Y||t();var o=e.target;if(e.defaultPrevented||e.ctrlKey)return!0;if(h(D,"embed")||h(o,"embed")&&/\.pdf/i.test(o.src)||h(D,"object")||o.shadowRoot)return!0;var r=-e.wheelDeltaX||e.deltaX||0,a=-e.wheelDeltaY||e.deltaY||0;N&&(e.wheelDeltaX&&y(e.wheelDeltaX,120)&&(r=-120*(e.wheelDeltaX/Math.abs(e.wheelDeltaX))),e.wheelDeltaY&&y(e.wheelDeltaY,120)&&(a=-120*(e.wheelDeltaY/Math.abs(e.wheelDeltaY)))),r||a||(a=-e.wheelDelta||0),1===e.deltaMode&&(r*=40,a*=40);var i=u(o);return i?!!v(a)||(Math.abs(r)>1.2&&(r*=z.stepSize/120),Math.abs(a)>1.2&&(a*=z.stepSize/120),n(i,r,a),e.preventDefault(),void l()):!O||!J||(Object.defineProperty(e,"target",{value:window.frameElement}),parent.wheel(e))}function a(e){var t=e.target,o=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==K.spacebar;document.body.contains(D)||(D=document.activeElement);var r=/^(textarea|select|embed|object)$/i,a=/^(button|submit|radio|checkbox|file|color|image)$/i;if(e.defaultPrevented||r.test(t.nodeName)||h(t,"input")&&!a.test(t.type)||h(D,"video")||g(e)||t.isContentEditable||o)return!0;if((h(t,"button")||h(t,"input")&&a.test(t.type))&&e.keyCode===K.spacebar)return!0;if(h(t,"input")&&"radio"==t.type&&P[e.keyCode])return!0;var i,c=0,d=0,s=u(D);if(!s)return!O||!J||parent.keydown(e);var f=s.clientHeight;switch(s==document.body&&(f=window.innerHeight),e.keyCode){case K.up:d=-z.arrowScroll;break;case K.down:d=z.arrowScroll;break;case K.spacebar:i=e.shiftKey?1:-1,d=-i*f*.9;break;case K.pageup:d=.9*-f;break;case K.pagedown:d=.9*f;break;case K.home:d=-s.scrollTop;break;case K.end:var m=s.scrollHeight-s.scrollTop,w=m-f;d=w>0?w+10:0;break;case K.left:c=-z.arrowScroll;break;case K.right:c=z.arrowScroll;break;default:return!0}n(s,c,d),e.preventDefault(),l()}function i(e){D=e.target}function l(){clearTimeout(E),E=setInterval(function(){F={}},1e3)}function c(e,t){for(var o=e.length;o--;)F[V(e[o])]=t;return t}function u(e){var t=[],o=document.body,n=A.scrollHeight;do{var r=F[V(e)];if(r)return c(t,r);if(t.push(e),n===e.scrollHeight){var a=s(A)&&s(o),i=a||f(A);if(O&&d(A)||!O&&i)return c(t,$())}else if(d(e)&&f(e))return c(t,e)}while(e=e.parentElement)}function d(e){return e.clientHeight+10<e.scrollHeight}function s(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"hidden"!==t}function f(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"scroll"===t||"auto"===t}function m(e,t){window.addEventListener(e,t,!1)}function w(e,t){window.removeEventListener(e,t,!1)}function h(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function p(e,t){e=e>0?1:-1,t=t>0?1:-1,X.x===e&&X.y===t||(X.x=e,X.y=t,R=[],q=0)}function v(e){if(e)return B.length||(B=[e,e,e]),e=Math.abs(e),B.push(e),B.shift(),clearTimeout(C),C=setTimeout(function(){try{localStorage.SS_deltaBuffer=B.join(",")}catch(e){}},1e3),!b(120)&&!b(100)}function y(e,t){return Math.floor(e/t)==e/t}function b(e){return y(B[0],e)&&y(B[1],e)&&y(B[2],e)}function g(e){var t=e.target,o=!1;if(document.URL.indexOf("www.youtube.com/watch")!=-1)do if(o=t.classList&&t.classList.contains("html5-video-controls"))break;while(t=t.parentNode);return o}function S(e){var t,o,n;return e*=z.pulseScale,e<1?t=e-(1-Math.exp(-e)):(o=Math.exp(-1),e-=1,n=1-Math.exp(-e),t=o+n*(1-o)),t*z.pulseNormalize}function x(e){return e>=1?1:e<=0?0:(1==z.pulseNormalize&&(z.pulseNormalize/=S(1)),S(e))}function k(e){for(var t in e)H.hasOwnProperty(t)&&(z[t]=e[t])}var D,M,T,E,C,H={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,fixedBackground:!0,excluded:""},z=H,L=!1,O=!1,X={x:0,y:0},Y=!1,A=document.documentElement,B=[],N=/^Mac/.test(navigator.platform),K={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},P={37:1,38:1,39:1,40:1},R=[],j=!1,q=Date.now(),V=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),F={};if(window.localStorage&&localStorage.SS_deltaBuffer)try{B=localStorage.SS_deltaBuffer.split(",")}catch(e){}var I,_=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)}}(),W=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,$=function(){var e;return function(){if(!e){var t=document.createElement("div");t.style.cssText="height:10000px;width:1px;",document.body.appendChild(t);var o=document.body.scrollTop;document.documentElement.scrollTop;window.scrollBy(0,3),e=document.body.scrollTop!=o?document.body:document.documentElement,window.scrollBy(0,-3),document.body.removeChild(t)}return e}}(),U=window.navigator.userAgent,G=/Edge/.test(U),J=/chrome/i.test(U)&&!G,Q=/safari/i.test(U)&&!G,Z=/mobile/i.test(U),ee=/Windows NT 6.1/i.test(U)&&/rv:11/i.test(U),te=Q&&(/Version\/8/i.test(U)||/Version\/9/i.test(U)),oe=(J||Q||ee)&&!Z;"onwheel"in document.createElement("div")?I="wheel":"onmousewheel"in document.createElement("div")&&(I="mousewheel"),I&&oe&&(m(I,r),m("mousedown",i),m("load",t)),k.destroy=o,window.SmoothScrollOptions&&k(window.SmoothScrollOptions),"function"==typeof define&&define.amd?define(function(){return k}):"object"==typeof exports?module.exports=k:window.SmoothScroll=k}();
//# sourceMappingURL=SmoothScroll.min.js.map

// https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],function($){return factory($)})}else if(typeof module==="object"&&typeof module.exports==="object"){exports=factory(require("jquery"))}else{factory(jQuery)}})(function($){$.easing.jswing=$.easing.swing;var pow=Math.pow,sqrt=Math.sqrt,sin=Math.sin,cos=Math.cos,PI=Math.PI,c1=1.70158,c2=c1*1.525,c3=c1+1,c4=2*PI/3,c5=2*PI/4.5;function bounceOut(x){var n1=7.5625,d1=2.75;if(x<1/d1){return n1*x*x}else if(x<2/d1){return n1*(x-=1.5/d1)*x+.75}else if(x<2.5/d1){return n1*(x-=2.25/d1)*x+.9375}else{return n1*(x-=2.625/d1)*x+.984375}}$.extend($.easing,{def:"easeOutQuad",swing:function(x){return $.easing[$.easing.def](x)},easeInQuad:function(x){return x*x},easeOutQuad:function(x){return 1-(1-x)*(1-x)},easeInOutQuad:function(x){return x<.5?2*x*x:1-pow(-2*x+2,2)/2},easeInCubic:function(x){return x*x*x},easeOutCubic:function(x){return 1-pow(1-x,3)},easeInOutCubic:function(x){return x<.5?4*x*x*x:1-pow(-2*x+2,3)/2},easeInQuart:function(x){return x*x*x*x},easeOutQuart:function(x){return 1-pow(1-x,4)},easeInOutQuart:function(x){return x<.5?8*x*x*x*x:1-pow(-2*x+2,4)/2},easeInQuint:function(x){return x*x*x*x*x},easeOutQuint:function(x){return 1-pow(1-x,5)},easeInOutQuint:function(x){return x<.5?16*x*x*x*x*x:1-pow(-2*x+2,5)/2},easeInSine:function(x){return 1-cos(x*PI/2)},easeOutSine:function(x){return sin(x*PI/2)},easeInOutSine:function(x){return-(cos(PI*x)-1)/2},easeInExpo:function(x){return x===0?0:pow(2,10*x-10)},easeOutExpo:function(x){return x===1?1:1-pow(2,-10*x)},easeInOutExpo:function(x){return x===0?0:x===1?1:x<.5?pow(2,20*x-10)/2:(2-pow(2,-20*x+10))/2},easeInCirc:function(x){return 1-sqrt(1-pow(x,2))},easeOutCirc:function(x){return sqrt(1-pow(x-1,2))},easeInOutCirc:function(x){return x<.5?(1-sqrt(1-pow(2*x,2)))/2:(sqrt(1-pow(-2*x+2,2))+1)/2},easeInElastic:function(x){return x===0?0:x===1?1:-pow(2,10*x-10)*sin((x*10-10.75)*c4)},easeOutElastic:function(x){return x===0?0:x===1?1:pow(2,-10*x)*sin((x*10-.75)*c4)+1},easeInOutElastic:function(x){return x===0?0:x===1?1:x<.5?-(pow(2,20*x-10)*sin((20*x-11.125)*c5))/2:pow(2,-20*x+10)*sin((20*x-11.125)*c5)/2+1},easeInBack:function(x){return c3*x*x*x-c1*x*x},easeOutBack:function(x){return 1+c3*pow(x-1,3)+c1*pow(x-1,2)},easeInOutBack:function(x){return x<.5?pow(2*x,2)*((c2+1)*2*x-c2)/2:(pow(2*x-2,2)*((c2+1)*(x*2-2)+c2)+2)/2},easeInBounce:function(x){return 1-bounceOut(1-x)},easeOutBounce:bounceOut,easeInOutBounce:function(x){return x<.5?(1-bounceOut(1-2*x))/2:(1+bounceOut(2*x-1))/2}})});

// Animate-On-Scroll Effects
//AOS.init({
//  duration: 800,
//})

   
$(document).ready(function(){
	if($('.trek-slider').length){
			$('.trek-slider').slick({
				touchMove:true,
				adaptiveHeight: false,
				loop:true,
				swipe:true,
				infinite: true,
				autoplay:true,
				autoplaySpeed:2000,
				centerMode: true,
				centerPadding: '40px',
				responsive:true,
				slidesToShow: 3,
				prevArrow: $(".slide-center-prev"),
				nextArrow: $(".slide-center-next"),
				responsive: [
				 {
				   breakpoint: 1024,
				   settings: {
					 arrows: false,
					 centerMode: true,
					 centerPadding: '40px',
					 slidesToShow: 2
				   }
				 },
			     {
				   breakpoint: 768,
				   settings: {
					 arrows: false,
					 centerMode: true,
					 centerPadding: '80px',
					 slidesToShow: 1
				   }
				 },
			     {
				   breakpoint: 640,
				   settings: {
					 arrows: false,
					 centerMode: true,
					 centerPadding: '50px',
					 slidesToShow: 1
				   }
				 },
			     {
				   breakpoint: 425,
				   settings: {
					 arrows: false,
					 centerMode: true,
					 centerPadding: '20px',
					 slidesToShow: 1
				   }
				 },
			     {
				   breakpoint: 375,
				   settings: {
					 arrows: false,
					 centerMode: true,
					 centerPadding: '15px',
					 slidesToShow: 1
				   }
				 }
			   ]
			 });
	}
	
	if($('.slider').length){
		$('.slider').slick({
			dots:false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed:2500,
			responsive:true,
			loop:true,
			swipe:true,
			prevArrow: $(".slide-prev"),
			nextArrow: $(".slide-next"),
			touchMove:true,
			adaptiveHeight: false
		  });
	}
	
	
	
	
	
	// Hide Call Now btn if the input is focused 
	hideCallNow();
	
	// Testimonials
	// Dragable slides for reviews/testimonials
    if($(".testimonial").length){
		$(this).slick({
			arrows: true,
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true,
			autoplay: true,
			autoplaySpeed: 2000,
		});
	}
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
    
    if( $('#id_email').length > 0 ) float();

    function float(){
        var email = $('#id_email');
        checkVal(email);
        email.on('change keyup', function(){
            checkVal(email);
        });
    }
    function checkVal(email) {
        ( email.val() == '' ) ? email.parent('div').removeClass('floating-label') : email.parent('div').addClass('floating-label');
    }    
    
    
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
        if($(this).hasClass('dropdown--open')){
            if($('#trigger').hasClass('expanded')){
               $('.nav-wrapper').fadeIn(500);
            }
            else{
               $('.nav-wrapper').fadeOut(500);
            }
            $(this).removeClass('dropdown--open');
			$(this).next('.nav__dropdown').removeClass('dropdown--open');
            $(this).next('.nav__dropdown').children('.nav__dropdown--item').removeClass('item--open');
            $(this).next('.nav__dropdown').children('li').each(function(i){
                    var t = $(this);
                    t.removeClass('item--open');
            });
        }
        else{
            $('.nav-wrapper').fadeIn(500);
            $(this).addClass('dropdown--open');
            $(this).next('.nav__dropdown').addClass('dropdown--open');
            $(this).next('.nav__dropdown').children('.nav__dropdown--item').addClass('item--open');
            $(this).next('.nav__dropdown').children('li').each(function(i){
                var t = $(this);
                t.addClass('item--open');
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
	$(".slider").slick('slickPlay');
//	$('.trek-slider').slick('slickPause');
});
	
/*
$(window).on('load', function(){
    $("body").removeClass("preload");
	if($('.banner__tagline').hasClass('banner__home')){
		$('.banner__home').delay(500).animate({opacity:1, top: '58%'}, 0, 'easeInOutQuad', function(){
			$('.banner__tagline .sub-tagline .sub-tagline--part1').delay(200).animate({opacity:1}, 800, function(){
				$('.banner__tagline .sub-tagline .sub-tagline--part2').delay(100).animate({opacity:1}, 800, function(){
					$('.banner__skip').delay(1000).animate({opacity:1, bottom: '.5em'}, 800);
					 $('.sub-tagline--videoTrigger').css({'-webkit-animation-play-state':'running','animation-play-state':'running', 'transform':'scale(1)'});
	//                $('.sub-tagline--videoTrigger').css({});
				});
			});
		});
   	}
	else{
		 $('.banner__tagline').delay(500).animate({opacity:1, top: '40%'}, 1200, 'easeInOutQuad', function(){
			$('.banner__tagline .sub-tagline .sub-tagline--part1').delay(200).animate({opacity:1}, 800, function(){
				$('.banner__tagline .sub-tagline .sub-tagline--part2').delay(100).animate({opacity:1}, 800, function(){
					$('.banner__skip').delay(1000).animate({opacity:1, bottom: '.5em'}, 800);
					 $('.sub-tagline--videoTrigger').css({'-webkit-animation-play-state':'running','animation-play-state':'running', 'transform':'scale(1)'});
	//                $('.sub-tagline--videoTrigger').css({});
				});
			});
		});
	 }
    

	
	// Trekking
	$('.banner__trek').delay(500).animate({opacity:1}, 1200, 'easeInOutQuad', function(){
		$('.banner__skip').delay(1000).animate({opacity:1, bottom: '.5em'}, 800);
	});
	
});*/

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
		hideCallNowAdd();
		$('.header').css('background','rgba(0,0,0,0.9)');
		$('.header').css('top','0px');
	} 
	else {
		hideCallNowRemove();
		if($('body').hasClass('mobile')){
			$('.header').css('background','rgba(0,0,0,0.9)');
		}
		else{
			$('.header').css({
						   'background' : 'rgba(0,0,0,.07)',
						   'box-shadow' : 'rgba(0, 0, 0, .08) 0px 0px 40px 40px'
						});
			
		}
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
//		parallaxIsOff();
		if($('body').hasClass('mobile')){
			$('.header').css('background','rgba(0,0,0,0.9)');
		}
		else{
			$('.header').css('background','rgba(0,0,0,0.05)');
		}
	}
	//It's Not Mobile
	else if($(window).width()=="768")
	{
		$('body').addClass('wide');
        $('body').removeClass('mobile');
        $("#nav, #trigger__wrapper").addClass('wide');
        $('#nav, #trigger__wrapper').removeClass('mobile');
//		parallaxIsOff();
	}
	else
	{
        $('body').addClass('wide');
        $('body').removeClass('mobile');
        $("#nav, #trigger__wrapper").addClass('wide');
        $('#nav, #trigger__wrapper').removeClass('mobile');
//		parallaxIsOn();
	}
}

//-------------------Parallax-----------------
/*
function parallaxIsOn(){
	var parallax = document.querySelectorAll(".parallax"),
		speed = .3;
	parallaxModule(parallax, speed);

}
function parallaxIsOff(){
	var parallax = document.querySelectorAll(".parallax"),
		speed = 0;
	parallaxModule(parallax, speed);

}

function parallaxModule(parallax, speed){
	  window.onscroll = function(){
		[].slice.call(parallax).forEach(function(el,i){
			var parallaxJquery = $('.parallax');
	//        console.log($('html,body').scrollTop()-parallaxJquery.offset().top);
		  var parentYoffset = $('html,body').scrollTop()-parallaxJquery.offset().top;
	//      var windowYOffset = parentYoffset.offset(0),
		  var windowYOffset = parentYoffset,
			  elBackgrounPos = "center " + (windowYOffset * speed) + "px";
		  el.style.backgroundPosition = elBackgrounPos;
		});
	  };
}
*/

/* Call Now BTN */
function hideCallNow(){
	$("input, textarea").focusin(function(){
		hideCallNowRemove();
		$('.cart_mob').removeClass("show");
		$('.cart_mob').addClass("hide"); 
    });
    $("input, textarea").focusout(function(){
		hideCallNowAdd();
		$('.cart_mob').removeClass("hide");
		$('.cart_mob').addClass("show"); 
    });
}
function hideCallNowRemove(){
	$('.backToTop, .call_now').removeClass("show");
	$('.backToTop, .call_now').addClass("hide"); 
}
function hideCallNowAdd(){
	$('.backToTop, .call_now').removeClass("hide"); 
	$('.backToTop, .call_now').addClass("show");
}