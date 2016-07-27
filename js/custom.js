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

$('.flexslider').flexslider({
animation: "slide",
controlNav: false,
directionNav: true,
slideshowSpeed: 5000,
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

});
