jQuery(document).ready(function() {
    // $(this).click(function() {
    //     $(this).addClass('container')
    // })
    var $logo = $('#logo');
    if (location.href.indexOf('#') != -1) {
        $logo.show();
    }
    $('.menu.tabs a').click(function() {
        $logo.fadeIn('slow');
    })
    $('.tab-profile').click(function() {
        $logo.fadeOut('slow')
    })

    // var $content = $('#content');
    // $content.easytabs({
    //     animate: true,
    //     updateHash: false,
    //     transitionIn: 'slideDown',
    //     transitionOut: 'slideUp',
    //     animationSpeed: 600,
    //     tabs: ".tmenu",
    //     tabActiveClass: 'active',
    // })
    // $content.find('.tabs li a').hover(
    //     function() {
    //         $(this).stop().animate({ marginTop: '-15px' }, 500)
    //     },
    //     function() {
    //         $(this).stop().animate({ marginTop: '0px' }, 500)
    //     }
    // )

    $('#share').click(function() {
        // console.log('click');
        $('#icons').toggle();
    })
})