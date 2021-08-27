$(document).ready(function () {
    $('nav li').on('click', function (e) {
        e.preventDefault();
        if ($('.drop-menu').css('display') == 'none') {
            $('.icon-circle-right').css({
                'transform': 'rotate(90deg)'
            });
        } else {
            $('.icon-circle-right').css({
                'transform': 'rotate(0deg)'
            });
        }
        $('.drop-menu').slideToggle();
    })

    // $('.burger').click(function(){
    //     $('.lists').slideToggle();
    // })
});
