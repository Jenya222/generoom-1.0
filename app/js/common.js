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
});
   });

$(function(){
	$('.top-line-menu').slicknav({
		label: '',
		duration: 800,
		closeOnClick: true     
	});
});

 
$(document).ready(function() {
    $("body").on("click", "a.anch", function(){
    var idtop = $($(this).attr("href")).offset().top;
    $('html,body').animate({scrollTop: idtop}, 1500);
    return false;
});
  });

   
ymaps.ready(init);
var myMap, 
    myPlacemark;

function init(){ 
    myMap = new ymaps.Map("map", {
        center: [59.926938, 30.353089],
        zoom: 17
    }); 
    
    myPlacemark = new ymaps.Placemark([59.926938, 30.353089], {
        balloonContent: 'Здесь квест астероид, чтобы записаться на него позвоните Арсению',
        iconCaption: 'Я тута, пройди меня полностью'
    },
    {   hintContent: 'Квест астероид!',
        preset: 'islands#greenDotIconWithCaption',
        iconColor: '#fb383c'}
    );

    myMap.geoObjects.add(myPlacemark);

        }

//faq.html answer block
$(document).ready(function(){
     $(".open-answer>.fa-plus").click(function(){
      $(this).parent().parent().next().fadeIn(1000);
      $(this).parent().parent().parent().animate(
        {marginBottom:"3%"},
        {
          duration: 1000, 
          specialEasing: {
            marginBottom: 'linear',
         }
        });
      $(this).css("display", "none");
      $(this).next().css("display", "block");

       });

});
$(document).ready(function(){
    $(".open-answer>.fa-minus").click(function(){
          $(this).parent().parent().parent().animate({marginBottom:"0"},
        {
          duration: 1000, 
          specialEasing: {
            marginBottom: 'linear',
         }
        });
          $(this).css("display", "none")
          $(this).prev().css("display", "block")
          $(this).parent().parent().next().fadeOut(1000);
        });
});