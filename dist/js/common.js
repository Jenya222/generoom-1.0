$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items:1,
  	autoplay: false,
  	autoplayTimeout:5000,
  	dots:true,
  	lazyLoad: true,
  	nav: true,
  	navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
  	dotsContainer: '.owl-dots',
  	navContainer: '.nav-container',
	responsiveClass: true,
    responsive:{
        0:{
            items:1,
            nav: true,
            dots: false
        },
        600:{
            items:1,
            nav: true,
            dots: true
        },
        1000:{
            items:1,
            nav: true,
            loop: false
        }
    }
})	
  	 });



$(document).ready(function(){
      $('.owl-item').css({
        height: $(window).height() + 'px'
      });
    
 });   
$(window).resize(); 
$(window).resize(function(){
	  $('.owl-item').css({
	    height: $(window).height() + 'px'
	  });
 });


$(function(){
	$('.top-line-menu').slicknav({
		label: '',
		duration: 800,
		closeOnClick: true     
	});
});
