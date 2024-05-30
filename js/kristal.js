// main js for kristal

/* navigation bar
     * ------------------------------------------------------ */
$(document).ready(function(){
    var toggleButton = $('.nav-open'),
            nav = $('.header-nav-wrap');

        toggleButton.on('click', function(event){
            event.preventDefault();

            toggleButton.toggleClass('is-clicked');
            nav.toggle("slide");
        });

        if (toggleButton.is(':visible')) nav.addClass('mobile');

        $(window).on('resize', function() {
            if (toggleButton.is(':visible')) nav.addClass('mobile');
            else nav.removeClass('mobile');
        });

        nav.find('a').on("click", function() {

            if (nav.hasClass('mobile')) {
                toggleButton.toggleClass('is-clicked');
                nav.toggle("slide"); 
            }
        });

});
/* slick slider
     * ------------------------------------------------------ */
$(document).ready(function() {
        
    $('.customer-slider').slick({
        arrows: true,
        dots: false,
        infinite: true,
        centerMode: true,
        variableWidth:true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: "<div class=\'slick-prev\'><i class=\'mdi mdi-arrow-left-thin\' aria-hidden=\'true\'></i></div>",
        nextArrow: "<div class=\'slick-next\'><i class=\'mdi mdi-arrow-right-thin\' aria-hidden=\'true\'></i></div>",       
        pauseOnFocus: false,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});

