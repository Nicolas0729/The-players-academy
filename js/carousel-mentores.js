$('.carousel-mentores').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout:2000,
    autoplayHoverPause: true,
    margin: 30,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        300:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        900:{
            items: 3,
            nav: false
        },
        1140:{
            items: 4,
            nav: false
        },
        1340:{
            items: 4,
            nav: false
        }
    }    
})