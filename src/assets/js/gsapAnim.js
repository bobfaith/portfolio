// ======= GSAP ANIMATION CODE ============ //
gsap.registerPlugin(ScrollTrigger);
const sections = document.querySelectorAll('section');


// ======= STICKY NAV ANIMATION CODE  ============ //
// ScrollTrigger.create({
//     trigger: '.section',
//     start: "top top",
//     toggleClass: {targets: ".header", className:"show-nav"}
// })



// ======= HERO SECTION TEXT ANIMATION CODE  ============ //

gsap.set('.tagLine__text',{
    yPercent: 100,
    opacity: 0,
})

gsap.to('.tagLine__text', {duration:1, yPercent:0, opacity: 1, stagger:.5});

// ======= ANIMATION CODE FOR INTRO SECTION PINNING THE HERO SECTION ============ //
gsap.to('.intro',{
    scrollTrigger: {
        trigger: '.intro',
        start:"top bottom",
        end: "top 75%",
        pin: '.hero',
        pinSpacing: false,
        scrub: false,
        toggleActions: 'restart reset reset reverse', 
    }
})


// ======= SLIDING UP/IN ANIMATION CODE FOR ABOUT SECTION ============ //

gsap.from('#sub-title-1, .bio', {
    duration: 1, 
    y:70, 
    opacity: 0, 
    stagger:.5,
    scrollTrigger: {
        trigger: '.container__left',
        start:"top 97%",
        end: "top 12%",
        scrub: true
    }
});

gsap.from('.profile-img', {
    duration:2, 
    x: 140, 
    opacity: 0, 
    scrollTrigger: {
        trigger: '.profile-img',
        start:"top 85%",
        end: "top 8%",
        scrub: true,
    }
});

gsap.to ('.line', {
    width: '0%',
    scrollTrigger: {
        trigger: '.line',
        start:"top 80%",
        scrub: 0.5,
    }
})

// ======= ANIMATION CODE FOR SCROLL TO HIDE & REAPPEAR WITH THE SCROLL ANIMATION OF THE INTRO SECTION ============ //
gsap.to('.scroll',{
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.intro',
        start:"top 90%",
        end: "bottom top",
        toggleActions: 'play none none reset'
        
    }
})

// ======= ANIMATION CODE FOR INTRO TEXT TO SLIDE IN AND SLIDE OUT ============ //

gsap.from('.intro__main-text', {
    y: 100,
    opacity: 0,
    duration: .75,
    ease: 'ease',
    scrollTrigger: {
        trigger: '.intro',
        start: "top 80%",
        end: "55% top",
        scrub: false,
        toggleActions: 'restart reverse restart reset', // onEnter onLeave onEnterBack onLeaveBack
        //values=play pause resume reverse restart reset complete none
        // toggleClass:'black',
    }
})

gsap.from('.intro__sub-text', {
    // x: 400,
    y: -100,
    opacity: 0,
    // duration: .5,
    // ease: 'ease',
    scrollTrigger: {
        trigger: '.intro__sub-text',
        start: "top 97%",
        end: "top 40%",
        scrub: 1,
        toggleActions: 'restart reverse restart reset',
    }
})

// ======= ToggleClass ANIMATION CODE FOR SERVICE SECTION ============ //

gsap.to('.portfolio', {

    scrollTrigger: {
        trigger: '.portfolio',
        start:"top 80%",
        end: "bottom 15%",
        toggleClass:'green'
    }
})

// ======= SLIDING UP/IN ANIMATION CODE FOR CONTACT SECTION ============ //

gsap.from('#sub-title-2, .section-left__text, .section-left__bottom-content', {
    duration:1, 
    y:100, 
    opacity: 0, 
    stagger:.5,
    scrollTrigger: {
        trigger: '.contact-container',
        start:"top 90%",
        end: "top 10%",
        scrub: true,
    }
});

gsap.from('.form__field', {
    duration:1, 
    opacity: 0, 
    stagger:.75,
    scrollTrigger: {
        trigger: '.form',
        start:"top 90%",
        end: "top 10%",
        scrub: true,
    }
});




//=========== For Navbar Animation ============//

const header = document.querySelector(".header");

gsap.to(header, {
//   y: -header.offsetHeight, // Move the navbar above the viewport
  scrollTrigger: {
    trigger: "section",
    start: "top bottom",
    end: "bottom top",
    toggleActions: "play none none reverse",
  },
});


// MY WORK SECTION TEXT ANIMATION

gsap.from("#title-design, #title-dev", {
    y: "100%",
    opacity: 0,
    duration: 2,
    stagger: 1,
    scrollTrigger: {
        trigger: "#title-design, #title-dev",
        scrub: 1,
        start: "top bottom",
        end: "bottom top",  
    }

})

gsap.from(".box__left-description", {
    y: "8%",
    opacity: 0,
    duration: 2,
    stagger: 1,
    scrollTrigger: {
        trigger: ".box__left-description",
        scrub: 1,
        start: "top bottom",
        end: "bottom top",  
    }

})

gsap.to("#design", {
    backgroundPositionX: "0%",
    duration: 2,
    stagger: 1,
    scrollTrigger: {
        trigger: "#design",
        scrub: 1,
        start: "top 85%",
        end: "bottom top",  
    }
})

gsap.to("#dev", {
    backgroundPositionX: "0%",
    duration: 2,
    stagger: 1,
    scrollTrigger: {
        trigger: "#dev",
        scrub: 1,
        start: "top 70%",
        end: "bottom top",  
    }
})



