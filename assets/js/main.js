
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