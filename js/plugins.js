// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
(function ($) {
    "use strict";
    /*-------------
    jQuery MeanMenu
    ------------------*/
    jQuery('nav#dropdown').meanmenu();
    
    /*---------------
    wow js
    -----------------*/
    new WOW().init();
    
    /*---------------
    owl active
    ----------------*/
    $ ("#owl-demo").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 4,
        /* transitionStyle : "fade", */
        navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"], 
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,3],
        itemsTablet : [768,2],
        itemsMobile : [479,1],
    });
    
    /*-------------------
    scrollup
    --------------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angel-up"></i>',
        easeingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade',
    });
    
})(jQuery);

/*--------------------
Hover for Dropdown Nav
----------------------------*/
jQuery(document).ready(function ($){
    // hover dropdown menu 
    $(function(){
        $(".dropdown").hover(
        function(){
            $('.dropdown-menu', this).stop(true, true).fadeIn("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");
        },
        function() {
            $('.dropdown-menu', this).stop(true, true).fadeOut("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");
        
        });
    });
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    