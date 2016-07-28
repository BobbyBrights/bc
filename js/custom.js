$(window).on("load resize",function(){
	slide_image();	
});

function slide_image(){
	var slide_image = $(window).height() - 250;
	$(".slide-image").css({"height":slide_image});
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
   $('li[data-related = "info"]').click(function(){
	   $('div#share').removeClass('active');
	   $('div#info').toggleClass('active');
	   $('li[data-related = "share"] .close').hide();
	   $(this).find('.close').toggle();
		if ( $('div.pop_up').hasClass('active') )
		{
			   $('.pop_up_wrapper').addClass('open');
		}
		else{
			$('.pop_up_wrapper').removeClass('open');
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
		}
		else{
			$('.pop_up_wrapper').removeClass('open');
		}
	   
   });   
});


