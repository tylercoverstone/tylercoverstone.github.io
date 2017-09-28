$(document).ready(function() {
	$(".introContainer").delay(500).fadeIn(1000);

	$("li a").click(function() {
		$("li a").removeClass('activeNav');
		$(this).addClass('activeNav');
	});

	$(function() {
  		var tab = window.location.hash;
  		if (tab) 
  		{
    		$("a[href='" + tab + "']").click();
  		}	
	});

	$(".arrow").click(function() {
		$("html, body").animate({scrollTop: 850}, 2000);
	});

	$(".bottomArrow").click(function() {
		$("html, body").animate({scrollTop: 0}, 2000);
	});

	var flag = true;
	var flag2 = true;
    var flag3 = true;
    var flag4 = true;

	$(window).scroll( function(){
        $('.appear').each( function(i){
            
            var startAppear = $(this).offset().top + 100;
            var bottomWindow = $(window).scrollTop() + $(window).height();
            
            if(bottomWindow > startAppear && flag === true)
            {  
                $(this).animate({'opacity':'1'},{duration:250, queue:false});
                $(this).animate({'marginTop':'-=100'},{duration:500, queue:false});  
                flag = false; 
            } 
        });
    	
    	$('.appear2').each( function(i){
            
            var startAppear = $(this).offset().top + 100;
            var bottomWindow = $(window).scrollTop() + $(window).height();
            
            if(bottomWindow > startAppear && flag2 === true)
            {  
                $(this).animate({'opacity':'1'},{duration:500, queue:false});
                $(this).animate({'marginTop':'-=100'},{duration:1000, queue:false});  
                flag2 = false; 
            } 
        });

        $('.appear3').each( function(i){
            
            var startAppear = $(this).offset().top + 100;
            var bottomWindow = $(window).scrollTop() + $(window).height();
            
            if(bottomWindow > startAppear && flag3 === true)
            {  
                $(this).animate({'opacity':'1'},{duration:250, queue:false});
                $(this).animate({'marginTop':'-=100'},{duration:500, queue:false});  
                flag3 = false; 
            } 
        });
        
        $('.appear4').each( function(i){
            
            var startAppear = $(this).offset().top + 100;
            var bottomWindow = $(window).scrollTop() + $(window).height();
            
            if(bottomWindow > startAppear && flag4 === true)
            {  
                $(this).animate({'opacity':'1'},{duration:500, queue:false});
                $(this).animate({'marginTop':'-=100'},{duration:1000, queue:false});  
                flag4 = false; 
            } 
        });
    });

 

});


