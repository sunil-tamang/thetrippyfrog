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
});

$(window).on('load', function(){
	
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