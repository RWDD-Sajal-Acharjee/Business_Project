$(document).ready(function(){

    $('.bannerSection').slick({
        autoplay: true,
        dots: true,
        prevArrow: '<i class="fas fa-chevron-left slick-prev left-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right slick-prev right-arrow"></i>',
    });

    var mixer = mixitup('.gallaryImage');

    // filtering process
    // $('.gallery-Menu li').on('click', function(){
    //     $(this).addClass('active').siblings().removeClass('active');
    // })

    $('.venobox').venobox({
        // framewidth : '400px',
        // frameheight: '300px',
        border     : '2px',
        bgcolor    : '#5dff5e',
        titleattr  : 'data-title',
        titleColor : 'white',
        closeColor : 'red',
        spinner    : 'wandering-cubes',
        spinColor  : 'blue',
        share      : ['facebook', 'twitter', 'download']
        });


    $(window).on('scroll', function(){
        var scrolling = $(this).scrollTop();

        if(scrolling>100){
            $('#NAVBAR').addClass('position-fixed');
        }else{
            $('#NAVBAR').removeClass('position-fixed');
        }

        if(scrolling>200){
            $('.scrollTopButton').fadeIn();
        }else{
            $('.scrollTopButton').fadeOut();
        }

    })

    $('.scrollTopButton').on('click',function(){
        $('html,body').animate({
            scrollTop: '0',
        }, 1500);
    });


    $('.testimonialContent .slideContent').slick({
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidToScroll: 1,
    });
});