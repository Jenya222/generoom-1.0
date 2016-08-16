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

$('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});

//sozdanie zayavki
$(document).ready(function(){
   $(".open-popup-link").click(function(){
    var title = $('.quest-title').html();
    var date = $(this).parent().prevAll('.date').html();
    var month = $('.month').attr('data-monthofyear');
    var year = $('.year').html();
    var address = $('.address').html();
    var fulldate = date+'.'+month+'.'+year;
    $("[name='quest-date']").val(fulldate);
    $("[name='quest-title']").val(title);
    $("[name='quest-address']").val(address);    
  });

  $('.checkbox').click(function(){
      $(this).parent().siblings('.chk').addClass('chk-be');
      if($(this).is(':checked'))
      {
        coti = $(this).next().html();
        coti = coti.split('-');
        $("[name='quest-time']").val(coti[0]);
        $("[name='quest-cost']").val(coti[1]);
      }
        else if($(this).attr('checked') != 'checked')
           {
              $(this).parent().siblings().removeClass('chk-be');
               $("[name='quest-time']").val('');
               $("[name='quest-cost']").val('');
              
            };
    });
});
