$(window).on("load resize",function(){
	slide_image();
	right_rotate_set()	
});

function slide_image(){
	var slide_image = $(window).height() - 250;
	$(".slide-image").css({"height":slide_image});
}

function right_rotate_set(){
	
	if ($('.right-rotate').hasClass('right-post-inner ')){
		var wid = $('.inset').width() - 6;
		
	}
	else{
		var wid = $('.inset').width() - 26;
	}
	$('.right-rotate').css({"margin-left":wid});
	
}

$(window).load(function(){
	
$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
});

if($('.flexslider').length){
	$('.flexslider').flexslider({
	animation: "slide",
	controlNav: false,
	directionNav: true,
	slideshowSpeed: 3000,
	animationSpeed: 600,
	touch: true,
	start: function(slider) {
				$('#sliderNext').on('click', function(e){
					$('.flex-next').trigger('click');
				});
				$('#sliderPrev').on('click', function(e){
					$('.flex-prev').trigger('click');
				});	
				$('.total-slides').text(slider.count);
			  },
			  after: function(slider) {
				$('.current-slide').text(slider.currentSlide+1);
			 }
	});
}

});

$(document).ready(function(){
right_rotate_set();	
var back_url = $('.back').attr('href');
   $('li[data-related = "info"]').click(function(){
	   $('div#share').removeClass('active');
	   $('div#info').toggleClass('active');
	   $('li[data-related = "share"] .close').hide();
	   $(this).find('.close').toggle();
		if ( $('div.pop_up').hasClass('active') )
		{
			
			$('.pop_up_wrapper').addClass('open');
			$('.back').attr('href','javascript:void(0)');

		}
		else{
			
			$('.pop_up_wrapper').removeClass('open');
			$('.back').attr('href', back_url);		
		}		
   });
	
   $('li[data-related = "share"]').click(function(){
	   $('div#info').removeClass('active');   
	   $('div#share').toggleClass('active');
	   $('li[data-related = "info"] .close').hide();
	   $(this).find('.close').toggle();
		
		if ( $('div.pop_up').hasClass('active') )
		{
			   $('.pop_up_wrapper').addClass('open');
			   $('.back').attr('href','javascript:void(0)');
			   
		}
		else{
			$('.pop_up_wrapper').removeClass('open');
			$('.back').attr('href', back_url);
			
		}
	   
   });
   
$('.back').click(function(){
	$('.pop_up_wrapper').removeClass('open');
	$('.pop_up').removeClass('active');
	$('.close').hide();
	var preUrl = $('.back').attr('href');
	$('.back').attr('href', back_url);
	if(preUrl != back_url)
	{
		return false;
	}
});   

       
});


