 //isotope
 $( document ).ready(function() {
        var $container = $('.isotope');
        $('#filters button').click(function(){
            var $this = $(this);
            if ( !$this.hasClass('is-checked') ) {
                $this.parents('#options').find('.is-checked').removeClass('is-checked');
                $this.addClass('is-checked');
            }
            var selector = $this.attr('data-filter');
            $container.isotope({  itemSelector: '.item', filter: selector });
            return false;
        });
});
//first slider
$(document).ready(function(){
          $('.bxslider').bxSlider({
             nextText: '',
             prevText: '',
             speed: 1000,
             tickerHover: true,
             touchEnabled: false,
             pager: false,
             controls: false,
             auto: true
        });       
});
//pop menu
$(document).ready(function(){
            var touch = $('#mobile-nav');
            var menu = $('.main-navigation');
         
            $(touch).on('click', function(e) {
                e.preventDefault();
                menu.slideToggle();
            });
            $(window).resize(function(){
                var wid = $(window).width();
                if(wid > 768 && menu.is(':hidden')) {
                    menu.removeAttr('style');
                }
            });
});


