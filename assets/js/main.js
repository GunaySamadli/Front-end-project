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


// let ellipsis = document.querySelector("header .icons .ellipsis");
// let bars = document.querySelector("header .icons .bars");



// ellipsis.addEventListener("click", function (e) {
//     e.preventDefault();
//     let customButton = document.querySelector("header .custom-button");
//     if (customButton.style.transform == null || customButton.style.transform == "" || customButton.style.transform == "scaleX(0)") {
//         customButton.style.transform = "scaleX(1)";
//     } else {
//         customButton.style.transform = "scaleX(0)";
//     }
// });

// bars.addEventListener("click", function (e) {
//     e.preventDefault();
//     let customResponsiveNav = document.querySelector("#custom-responsive-nav");
//     let times = document.querySelector("header .icons .bars .fa-times");
//     let bars = document.querySelector("header .icons .bars .fa-bars");
//     if (customResponsiveNav.style.height == null || customResponsiveNav.style.height == "" || customResponsiveNav.style.height == "0px") {
//         customResponsiveNav.style.height = "333px";
//         times.style.display = "inline-block";
//         bars.style.display = "none";
//     } else {
//         customResponsiveNav.style.height = "0px";
//         times.style.display = "none";
//         bars.style.display = "inline-block";
//     }
// });
