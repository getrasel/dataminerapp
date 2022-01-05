
    //Smooth Scroll
    // smoothScroll.init();
  /*************************
        animate
    *************************/
new WOW().init();

  


    /*************************
        banner slider
    *************************/
        $(".banner_slider").slick({
            // autoplay: true,
            fade: false,
            autoplaySpeed: 8000,
            speed: 500,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover:false,
        });


  /*************************
        input hide suggetion
    *************************/

$(document).ready(function(){
    $('.form_input').on('keyup', "input.form-control", function(){

        if ($(this).val().length > 0) {
            $('.suggetion_inner').addClass('hideClass');
            console.log('6')
        } else {
            $('.suggetion_inner').removeClass('hideClass');
            console.log('0')
        }
    })
    
});

  /*************************
        Preloader
    *************************/

$(window).load(function() {
    $(".loader").delay(1500).fadeOut("slow");
    $("#overlayer").delay(1500).fadeOut("slow");
});






  /*************************
        Scroll top
    *************************/

$(window).scroll(function(){
   if($(window).scrollTop()>300){
     $(".scrolltop p").fadeIn("slow");
   }else{
     $(".scrolltop p").fadeOut("fast");
   }
 });


$(".scrolltop p").click(function(){
  $("html,body").animate({
    scrollTop: 0
  }, 1000)
  
  return false;
});



/*************************
      Sticky_nav 
  *************************/

$(".header_navbar").sticky({topSpacing:0});



//Smooth Scroll

$(document).ready(function() {
          $('.navbar-nav.menu li a[href^="#"]').on('click',function (e) {
        e.preventDefault();
          $('a').each(function(){
              $(this).removeClass('active');
          })
      $(this).addClass('active'); 

        var target = this.hash,
              menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function () {
            window.location.hash = target;
        });
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    $('.page-section').each(function(i) {
        var topDistance = $(this).position().top;

        if ( (topDistance-100) <= scrollDistance) {
          $('.navbar-nav.menu li.smooth a.active').removeClass('active');
            $('.navbar-nav.menu li.smooth a').eq(i).addClass('active');
          
        }
    });
}).scroll();


