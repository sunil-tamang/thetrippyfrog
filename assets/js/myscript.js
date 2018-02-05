$(document).ready(function(){
	$('#copyright__year').html(function(){
		var today = new Date();
		return today.getFullYear();
	});
    
    //Checking the browser resolution
    menuWideOrMobile();
    $(window).resize(function(){
        menuWideOrMobile();
    });

    // Menu Trigger
    $('#trigger').click(function(event){
        event.stopPropagation();
        if($('#trigger').hasClass('expanded')){
            $('#trigger.expanded').removeClass('expanded');
            $('.header__nav.nav--open').removeClass('nav--open');
        }
        else{
            $('#trigger').addClass('expanded');
            $('.header__nav').addClass('nav--open');
        }
    });
    
    $('.header__nav').click(function(event){
       event.stopPropagation(); 
    });
    
    // Dropdown Trigger
    $('.dropdown__trigger').click(function(event){
         var i;
        event.stopPropagation(); //click on itself and simple toggle
        if($('.dropdown__trigger').hasClass('dropdown--open')){
            $('.dropdown__trigger.dropdown--open, .nav__dropdown').removeClass('dropdown--open');
            $('.nav__dropdown--item.item--open').removeClass('item--open');
            $(".nav__dropdown li").each(function(i){
                    var t = $(this);
                    setTimeout(function(){ t.removeClass('item--open'); }, (i+1) * 10); 
            });
        }
        else{
            $('.dropdown__trigger, .nav__dropdown').addClass('dropdown--open');
            $('.nav__dropdown--item').addClass('item--open');
            $(".nav__dropdown li").each(function(i){
                var t = $(this);
                setTimeout(function(){ t.addClass('item--open'); }, (i+1) * 200);
            });
        }
    });
});

$(window).on('load', function(){
	
});

$(document).on("click", function () {
    //click outside of ".nav__dropdown" class itself and menu will be hidden
    var i;
    $('.dropdown__trigger.dropdown--open, .nav__dropdown').removeClass('dropdown--open');
    $('.nav__dropdown--item.item--open').removeClass('item--open');
    $('#trigger.expanded').removeClass('expanded');
    $('.header__nav.nav--open').removeClass('nav--open');
    $(".nav__dropdown li").each(function(i){
        var t = $(this);
        setTimeout(function(){ t.removeClass('item--open'); }, (i+1) * 10);
    });
});


function menuWideOrMobile(event){
	// It's Mobile
	if($(window).width()<'768')
	{ 
        $("#nav, #trigger__wrapper").addClass('mobile');
        $('#nav, #trigger__wrapper').removeClass('wide');
	}
	//It's Not Mobile
	else
	{
        $("#nav, #trigger__wrapper").addClass('wide');
        $('#nav, #trigger__wrapper').removeClass('mobile');
	}
}