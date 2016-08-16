$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items:1,
  	autoplay: true,
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

  $(".owl-caruosel-reviews").owlCarousel({
      items: 1,
      dots: false,
      responsiveClass: true,
      navContainer: '.nav-container-reviews',
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
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

$(document).ready(function() {
    $("body").on("click", ".anch_more", function(){
    var idtop_more = $($(this).attr("href")).offset().top;
    $('html,body').animate({scrollTop: idtop_more}, 1500);
    return false;
});
  });

//$(document).ready(function() {
 //   $("body").on("click", ".anch_goto", function(){
 //   var idtop_goto = $($(this).attr("href")).offset().top;
 //   $('html,body').animate({scrollTop: idtop_goto}, 1500);
 //   return false;
//});
//  });

$(document).ready(function() {   
var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки
  $(document).ready(function() {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
      /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      if ($(this).scrollTop() > top_show) $('.anch_goto').fadeIn();
      else $('.anch_goto').fadeOut();
    });
    $('.anch_goto').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });
});

//counter
$(document).ready(function() {
$('.reviews>.wrapper').viewportChecker({
  callbackFunction: function(elem, action){
    var time = 4;
    $('.num').each(function(){
      var i = 1,
          num = $(this).data('num'),
          step = 1500 * time / num,
          that = $(this),
          int = setInterval(function(){
            if (i <= num) {
              that.html(i);
            }
            else {
              clearInterval(int);
            }
            i++;
          },step);
});
},

});

   });


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
//popups

$(document).ready(function() {
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>by Generoom</small>';
      }
    }
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
    var attrCheck = $(this).attr('data-chekbox');
    attrCheck = attrCheck.split(',');
    for(i = 0; i <= attrCheck[i] ; i++)
    {
       $('#checkbox'+i).parent().addClass('chk-af');
    };  
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
              
            }

    });

   $('.mfp-close').click(function(){
      if($('.checkbox').is(':checked'))
      {
        $("[name='quest-time']").val('');
        $("[name='quest-cost']").val('');
      }
      $("input:checkbox").removeAttr("checked");
      $('.chk').removeClass('chk-be chk-af');
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

        };
