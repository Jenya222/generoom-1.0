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
      nav: true,
      responsiveClass: true,
      navContainer: '.nav-container-reviews',
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
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


//booking
$(document).ready( function(){
  var c;
  var a = 0;
if(a == 0){
 calendar(new Date().getFullYear(), new Date().getUTCMonth(), 0);
}
else
{
  c;
}

  function calendar(bookYear, bookMonth, list){
bookMonth = parseInt(bookMonth);
var first_day = new Date(bookYear,bookMonth,1);
var oneHour = 1000 * 60 * 60;//милисекунды*минуты*часы
var oneDay = oneHour * 24;//сутки
var nextMonth = new Date(bookYear, bookMonth + 1, 1);

var key = bookMonth+list;
 key = parseInt(key);
var last_day = 33 - new Date(bookYear, key, 33).getDate();

var month_array = new Array ("Январь","Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь","Ноябрь", "Декабрь");

var element = '';
var gh = '<div class="element2"><div class="sheet-nextmonth"><div class="date" weekday="">02</div><div class="avail">Available: 9</div><div class="order"><a href="#"  data-mfp-src="#test-popup"  class="button open-popup-link">  Забронировать</a></div></div></div>';

$('.mon').text(month_array[key]);
$('.year').text(bookYear);

$('.month2').attr("data-monthofyear", key);

var dayByWeek = new Date(bookYear, key, 1).getDay();


for(i=1;i<dayByWeek;i++){
  element +='<div class="element2"><div class="sheet-nextmonth2"><div class="date2" data-weekday=""></div><div class="avail2">Available: 9</div><div class="order2"><a href="#"  data-mfp-src="#test-popup"  class="button2 open-popup-link">  Забронировать</a></div></div></div>';
}

for(i=1;i <= last_day;i++)
{
  element +='<div class="element2"><div class="sheet-normal2"><div class="date2" data-weekday=""><div class="date2-num">'+i+'</div></div><div class="avail2">Available: 9</div><div class="order2"><a href="#"  data-mfp-src="#test-popup"  class="button2 open-popup-link" data-chekbox="2,3,4,5,6">  Забронировать</a></div></div></div>';
}

$('.element2-wrap').html(element);

//изменение окна пустого блока
var sheetHeight = $('.sheet-normal2').height();
$('.sheet-notavail2,.sheet-nextmonth2').height(sheetHeight);

//вызов плагина magnific
$('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  closeOnBgClick: false
});


  
//sozdanie zayavki
   $(".open-popup-link").click(function(){
    var title = $('.quest-title').html();
    var date = $(this).parent().prevAll('.date2').children('.date2-num').html();
    var month = $('.month2').attr('data-monthofyear');
    month = parseInt(month)+1;
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
//медиа запрос если ширина окна максимум 968
if(window.matchMedia('(max-width: 968px)').matches)
    {
        $('.avail2').css('display','none');
        $('.sheet-notavail2').hide();
        $('.sheet-nextmonth2').hide();
        $('.button2').html('<i class="fa fa-play" aria-hidden="true"></i>');
        $("[data-weekday='1']").text('Пн');
        $("[data-weekday='2']").text('Вт');
        $("[data-weekday='3']").text('Ср');
        $("[data-weekday='4']").text('Чт');
        $("[data-weekday='5']").text('Пт');
        $("[data-weekday='6']").text('Сб');
        $("[data-weekday='7']").text('Вс');
    }
    else
    {
      $('.avail2').css('display','block');
      $('.sheet-nextmonth2').children('.avail2').css('display','none');
      $('.sheet-notavail2').show();
      $('.sheet-nextmonth2').show();
      $('.button2').html('Забронировать');
      $("[data-weekday='1']").text('Понедельник');
      $("[data-weekday='2']").text('Вторник');
      $("[data-weekday='3']").text('Среда');
      $("[data-weekday='4']").text('Четверг');
      $("[data-weekday='5']").text('Пятница');
      $("[data-weekday='6']").text('Суббота');
      $("[data-weekday='7']").text('Воскресенье');
    }

};

var m2 = $('.month2').attr("data-monthofyear");;


$('.nav-next2').click(function(){
  a+1;
  if(m2 <= 9){
  m2 = $('.month2').attr("data-monthofyear");
 c = calendar( new Date().getFullYear(), m2, 1);
}
});


$('.nav-prev2').click(function(){
  a-1;
  if(new Date().getUTCMonth()+2 <= m2){
  m2 = $('.month2').attr("data-monthofyear");
  c = calendar( new Date().getFullYear(), m2, -1);
}
});
//изменение отображения при ресайзе
  $(window).resize(function(){
    if(window.matchMedia('(max-width: 968px)').matches)
    {
        $('.avail2').css('display','none');
        $('.sheet-notavail2').hide();
        $('.sheet-nextmonth2').hide();
        $('.button2').html('<i class="fa fa-play" aria-hidden="true"></i>');
        $("[data-weekday='1']").text('Пн');
        $("[data-weekday='2']").text('Вт');
        $("[data-weekday='3']").text('Ср');
        $("[data-weekday='4']").text('Чт');
        $("[data-weekday='5']").text('Пт');
        $("[data-weekday='6']").text('Сб');
        $("[data-weekday='7']").text('Вс');
    }
    else
    {
      $('.avail2').css('display','block');
      $('.sheet-nextmonth2').children('.avail2').css('display','none');
      $('.sheet-notavail2').show();
      $('.sheet-nextmonth2').show();
      $('.button2').html('Забронировать');
      $("[data-weekday='1']").text('Понедельник');
      $("[data-weekday='2']").text('Вторник');
      $("[data-weekday='3']").text('Среда');
      $("[data-weekday='4']").text('Четверг');
      $("[data-weekday='5']").text('Пятница');
      $("[data-weekday='6']").text('Суббота');
      $("[data-weekday='7']").text('Воскресенье');
    }
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
