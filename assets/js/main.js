
$(document).ready(function () {
    $('.nav-link').on('click', function (e) {
        e.preventDefault();
        if ($(this).next('.drop-menu').css('display') == 'none') {
            $(this).find('svg').css('transform', 'rotate(90deg)');
        }
        else {
            $(this).find('svg').css('transform', 'rotate(0deg)');
        }

        $(this).next('.drop-menu').slideToggle();
    })
});



// Blog



$(".button-blog").on("click", function () {
    $(".button-blog").removeClass("active");
    $(this).addClass("active");
});



let icons = document.querySelector("header .openMenu .icon-menu");


icons.addEventListener("click", function (e) {
    e.preventDefault();
    let customResponsiveNav = document.querySelector(".custom-responsive-nav");
    let times = document.querySelector("header .openMenu .icon-menu");
    let bars = document.querySelector("header .openMenu .icon-menu");
    if (customResponsiveNav.style.height == null || customResponsiveNav.style.height == "" || customResponsiveNav.style.height == "0px") {
        customResponsiveNav.style.height = "100%";
        times.style.display = "inline-block";
    } else {
        customResponsiveNav.style.height = "0px";
        times.style.display = "none";
        bars.style.display = "inline-block";
    }
});




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



const Play = document.querySelector(".image .link-watch-video");
const Close = document.querySelector("#close");
const Modal = document.querySelector(".modal");

Play.addEventListener("click", (e) => {
    e.preventDefault();
    Modal.classList.add("show")
});

Close.addEventListener("click", () => {
    Modal.classList.remove("show");
    var iframes = Modal.getElementsByClassName('.iframe-container img');
    if (iframes != null) {
        for (let i = 0; i < iframes.length; i++) {
            const iframe = iframes[i];
            iframe.src = iframe.src;

        }
    }
})