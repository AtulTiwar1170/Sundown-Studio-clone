
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function page4Animation() {
    var elemC = document.querySelector(".elem-container")
    var fixed = document.querySelector(".Fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}
// function createSwiper() {
//     const swiperOptions = {
//         slidesPerView: 'auto',
//         centeredSlides: true,
//         spaceBetween: 100,
//         loop: true, // Added loop option
//         grabCursor: true, // Added grab cursor option
//         autoplay: {
//             delay: 3000, // Added autoplay option with delay of 3 seconds
//             disableOnInteraction: false,
//         },
//     };

//     const swiper = new Swiper('.mySwiper', swiperOptions);
// }

// // Call the function to initialize the Swiper
// createSwiper();
function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}
swiperAnimation()
page4Animation()