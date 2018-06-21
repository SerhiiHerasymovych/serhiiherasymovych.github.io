'use strict';

$(document).ready(function () {
    $('[data-fancybox]').fancybox({
        infobar: false,
        loop: true,
        smallBtn: "auto",
        clickOutside: 'close',
        toolbar: "auto",
        buttons: [
            "close"
        ],
        slideShow: {
            autoStart: true,
            speed: 2500
        },
        clickContent: function() {
            return false;
        }
    });
    var x = window.matchMedia("(min-width: 20px) and (max-width: 767px)");
    function myFunction() {
        if (x.matches) {
            $('.nav-item__item').addClass('nav-trigger');
            $('.nav-trigger').click(function(){
                $('.trigger').toggleClass('trigger_clicked');
                $('.nav').toggleClass('nav_open');
                $('.overflow').toggleClass('overflow_open');
                $('body').toggleClass('no-scroll');
            });
        }
    }
    myFunction()
    x.addListener(myFunction)
    $(window).scroll(function(){
    if ($(window).scrollTop() > 430) {
        $('.calendar').removeClass('calendar_hidden');
        $('.calendar').addClass('calendar_visible');
    }
    else {
        $('.calendar').removeClass('calendar_visible');
        $('.calendar').addClass('calendar_hidden');
    }
    });
    $('.nav-item__item').click(function(e) {
        e.preventDefault();
        var $this = $(this);
        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 300, function() {
            window.location.hash = target;
        });
    });
    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
})
