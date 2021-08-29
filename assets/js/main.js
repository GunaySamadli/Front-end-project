

$(document).ready(function () {
    $('.icon-circle-right').on('click', function (e) {
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




// blog section homepage

const tabTestimonials = Array.from(document.querySelectorAll(" .tab-testimonial"));
const tabContents = Array.from(document.querySelectorAll(".content-testimonials .content-testimonial"));

const clearActives = function () {
    tabTestimonials.forEach(tabTestimonial => {
        tabTestimonial.classList.remove("active");
    });
    tabContents.forEach(tabContent => {
        tabContent.classList.remove("active");
    });
}



tabTestimonials.forEach(tabTestimonial => {
    tabTestimonial.onclick = function () {
        clearActives();
        const targetId = tabTestimonial.getAttribute("data-target");
        const targetContent = document.getElementById(targetId);
        tabTestimonial.classList.add("active");
        targetContent.classList.add("active")
    }
})


// Blog



$(".button-blog").on("click", function () {
    $(".button-blog").removeClass("active");
    $(this).addClass("active");
});


// Modal

// const Play = document.querySelector(".image .link-watch-video #play");
// const Close = document.querySelector("#close");
// const Modal = document.querySelector(".modal");

// Play.addEventListener("click", () => {
//     Modal.classList.add("show")
// });

// Close.addEventListener("click", () => {
//     Modal.classList.remove("show");
//     var iframes = Modal.getElementsByTagName('iframe');
//     if (iframes != null) {
//         for (let i = 0; i < iframes.length; i++) {
//             const iframe = iframes[i];
//             iframe.src = iframe.src;

//         }
//     }
// })

{
    "items"[
        {
            "type": "video",
            "originalUrl": "https://www.youtube.com/watch?v=ei7sNwLzapI&autoplay=true",
            "url": "https://www.youtube.com/watch?v=ei7sNwLzapI&autoplay=true",
            "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fei7sNwLzapI%3Fautoplay%3D1%26feature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dei7sNwLzapI&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fei7sNwLzapI%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&autoplay=1&type=text%2Fhtml&schema=youtube\" width=\"940\" height=\"528\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"></iframe>",
            "thumbnailUrl": "https://i.ytimg.com/vi/ei7sNwLzapI/hqdefault.jpg",
            "width": 940,
            "height": 528
        }
    ]
}

$(document).ready(function () {
    $(".backtotop").fadeOut();
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".backtotop").fadeIn();
        }
        else {
            $(".backtotop").fadeOut();
        }
    });
    $(".backtotop").click(function () {
        $("html,body").animate({ scrollTop: -2 }, 700);
        return false;
    })
})