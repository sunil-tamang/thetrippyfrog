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
    $('#nav-trigger-link').click(function(){
       if($('#nav-trigger-link').hasClass('expanded')){
           $('#nav-trigger-link.expanded').removeClass('expanded');
           $('#nav.nav-open').removeClass('nav-open');
       }
       else{
           $('#nav-trigger-link').addClass('expanded');
           $('#nav').addClass('nav-open');
       }
    });



    
});

$(window).on('load', function(){
	
});


function menuWideOrMobile(event){
	// It's Mobile
	if($(window).width()<768)
	{ 
        $("#nav, #trigger").addClass('mobile');
        $('#nav, #trigger').removeClass('wide');
	}
	//It's Not Mobile
	else
	{
        $("#nav, #trigger").addClass('wide');
        $('#nav,#trigger').removeClass('mobile');
	}
}