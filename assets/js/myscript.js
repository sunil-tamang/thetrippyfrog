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
    $('#trigger').click(function(){
        if($('#trigger').hasClass('expanded')){
            $('#trigger.expanded').removeClass('expanded');
        }
        else{
            $('#trigger').addClass('expanded');
        }
    });
    
    // Dropdown Trigger
    $('.dropdown__trigger').click(function(event){
        event.stopPropagation(); //click on itself and simple toggle
//        $('.nav__dropdown ').slideToggle();
        if($('.dropdown__trigger').hasClass('dropdown--open')){
            $('.dropdown__trigger.dropdown--open').removeClass('dropdown--open');
            $('.nav__dropdown--item.item--open').removeClass('item--open');
            $('.nav__dropdown ').slideUp("slow");
        }
        else{
            $('.dropdown__trigger').addClass('dropdown--open');
            $('.nav__dropdown--item').addClass('item--open');
            $('.nav__dropdown ').slideDown("slow");
        }
    });
});

$(window).on('load', function(){
	
});

$(document).on("click", function () {
    $(".nav__dropdown").slideUp(); //click outside of ".nav__dropdown" class itself and slideUp() will fire
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