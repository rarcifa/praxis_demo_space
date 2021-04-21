/* ----------------- Start Document ----------------- */
(function($){
    "use strict";
    
    $(document).ready(function(){
        
        /*----------------------------------------------------*/
        /* Sidebar Nav submenu
        /*----------------------------------------------------*/
    
        $('.sidebar_inner ul li a').on('click', function(e){
            if($(this).closest("li").children("ul").length) {
                if ( $(this).closest("li").is(".active-submenu") ) {
                   $('.sidebar_inner ul li').removeClass('active-submenu');
                } else {
                    $('.sidebar_inner ul li').removeClass('active-submenu');
                    $(this).parent('li').addClass('active-submenu');
                }
                e.preventDefault();
            }
        });
        
    
    // ------------------ End Document ------------------ //
    });
    
    })(this.jQuery);
    
// Change Console Icon based on Console Name
jQuery(document).ready(function () {
    jQuery('.console .radius-console').each((e, v) => {
        let text = jQuery(v).text();
        if (text.toLowerCase() == 'ps4') {
            jQuery(v).addClass('ps4-radius');
            jQuery(v).removeClass('info-radius');
        }
        if (text.toLowerCase() == 'ps5') {
            jQuery(v).addClass('ps5-radius');
            jQuery(v).removeClass('info-radius');
        }          
        if (text.toLowerCase() == 'xbox') {
            jQuery(v).addClass('xbox-radius');
            jQuery(v).removeClass('info-radius');
        }
        if (text.toLowerCase() == 'xbox-sx') {
            jQuery(v).addClass('xbox-sx-radius');
            jQuery(v).removeClass('info-radius');
        }         
        if (text.toLowerCase() == 'switch') {
            jQuery(v).addClass('switch-radius');
            jQuery(v).removeClass('info-radius');
        }
        if (text.toLowerCase() == 'pc') {
            jQuery(v).addClass('pc-radius');
            jQuery(v).removeClass('info-radius');
        }
    });
});

// Change Console Icon based on Console Name
jQuery(document).ready(function () {
    jQuery('.console .radius-console').each((e, v) => {
        let text = jQuery(v).text();
        if (text.toLowerCase() == 'ps4') {
            jQuery(v).addClass('console-ps4');
            jQuery(v).removeClass('console-info');
        }
        if (text.toLowerCase() == 'ps5') {
            jQuery(v).addClass('console-ps5');
            jQuery(v).removeClass('console-info');
        }          
        if (text.toLowerCase() == 'xbox') {
            jQuery(v).addClass('console-xbox');
            jQuery(v).removeClass('console-info');
        }
        if (text.toLowerCase() == 'xbox-sx') {
            jQuery(v).addClass('console-xboxsx');
            jQuery(v).removeClass('console-info');
        }         
        if (text.toLowerCase() == 'switch') {
            jQuery(v).addClass('console-switch');
            jQuery(v).removeClass('console-info');
        }
        if (text.toLowerCase() == 'pc') {
            jQuery(v).addClass('console-pc');
            jQuery(v).removeClass('console-info');
        }
        if (text.toLowerCase() == 'stadia') {
            jQuery(v).addClass('console-stadia');
            jQuery(v).removeClass('console-info');
        }
    });
});

        // Change MEtascore background color based on value
        // Change Console Icon based on Console Name
        jQuery(document).ready(function () {
            jQuery('span.score').each(function () {
                var $elem = $(this),
                    val = $elem.html(),
                    color = (val < 30)
                        ? '#ff3f44' : (val <= 70 && val < 100) ? '#ffd65a' : '#0ffba4'
            
                $elem.css('color', color);
            });
        });

        jQuery(document).ready(function () {
        // Change ign background color based on value
        jQuery('span.scoreign').each(function () {
            var $elem = $(this),
                val = $elem.html(),
                color = (val < 3)
                    ? '#ff3f44' : (val <= 7 && val < 11) ? '#ffd65a' : '#0ffba4'
        
            $elem.css('color', color);
        });
    });