(function($) {
    // Fixed navbar
    $(window).scroll(function() {

        var scrollTop = $(window).scrollTop();

        if (scrollTop > 50) {
            $('.navbar-default').css('display', 'block');
            $('.navbar-default').addClass('fixed-to-top');

        } else if (scrollTop == 0) {

            $('.navbar-default').removeClass('fixed-to-top');
        }
    });

    $(document).ready(function() {

        $("#owl-1").owlCarousel({
            items: 2,
            margin: 10,
            autoplay: false,
            loop: true,
            smartSpeed: 800,
            nav: true,
            lazyLoad: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        $("#owl-2").owlCarousel({
            items: 2,
            margin: 10,
            autoplay: false,
            loop: true,
            smartSpeed: 800,
            nav: true,
            lazyLoad: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        $("#owl-3").owlCarousel({
            autoplay: true,
            margin: 10,
            loop: true,
            smartSpeed: 800,
            nav: true,
            lazyLoad: true,
            navText: ['<i class="fa fa-angle-left left-3" aria-hidden="true"></i>', '<i class="fa fa-angle-right right-3" aria-hidden="true"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
        $("#owl-4").owlCarousel({
            margin: 10,
            items: 6,
            autoplay: false,
            loop: true,
            smartSpeed: 800,
            nav: true,
            lazyLoad: true,
            navText: ['<i class="fa fa-angle-left left-4" aria-hidden="true"></i>', '<i class="fa fa-angle-right right-4" aria-hidden="true"></i>'],
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
    });
})(jQuery);
