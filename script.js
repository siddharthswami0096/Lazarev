function loadingAnimation(){
    
var t1 = gsap.timeline();

t1.from("#page1", {
    opacity: 0,
    duration: 0.2,
    delay: 0.2
})
t1.from("#page1", {
    transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRadius: "150px",
    duration: 2,
    ease: "expo.out"
})
t1.from("nav", {
    opacity: 0,
    delay: -0.2
})
t1.from("#page1 h1, #page1 p, #page1 div", {
    opacity: 0,
    duration: 0.5,
    stagger: 0.2
})

}


function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

function navAnimation() {
    let nav = document.querySelector("#nav");

    nav.addEventListener("mouseenter", function () {
        let timeline = gsap.timeline();
        timeline.to("#nav-bottom", {
            height: "21vh"
        })
        timeline.to("#nav-part2 h5", {
            display: "block"
        })
        timeline.from("#nav-part2 h5 span", {
            x: -20,
            stagger: {
                amount: 0.5
            },
            opacity: 0
        })
    })

    nav.addEventListener("mouseleave", function () {
        let timeline = gsap.timeline();

        timeline.to("#nav-part2 h5 span", {
            x: 0,
            stagger: {
                amount: 0.3
            }
        })

        timeline.to("#nav-part2 h5", {
            display: "none",
            duration: 0.1
        }, "anim")
        timeline.to("#nav-bottom", {
            height: "0",
            duration: 0.2
        }, "anim")

    })
}

function page2Animation() {
    let rightelems = document.querySelectorAll("#right-elem1");
    rightelems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[5], {
                opacity: 1,
                scale: 1
            })
        })

        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[5], {
                opacity: 0,
                scale: 0
            })
        })

        elem, addEventListener("mousemove", function (dets) {
            gsap.to(elem.childNodes[5], {
                x: dets.x - elem.getBoundingClientRect().x - 100,
                y: dets.y - elem.getBoundingClientRect().y - 100
            })
        })


    })
}

function page3VideoAnimation() {
    var page3center = document.querySelector(".page3-center");
    var video = document.querySelector("#page3 video")

    page3center.addEventListener("click", function () {
        video.play();

        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0,
            zIndex: 99
        })

        video.addEventListener("click", function () {
            video.pause();
            gsap.to(video, {
                transform: "scaleX(0) scaleY(0)",
                opacity: 0,
                borderRadius: "30px"
            })
        })
    })
}


function page4Animations() {

    var sections = document.querySelectorAll(".sec-right")

    sections.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {

            elem.childNodes[3].play()


            gsap.to(".sec-right img", {
                opacity: 0
            }, "anim1")

            gsap.to(".sec-right video", {
                duration: 1.5,
                opacity: 1,
                transform: "scaleX(1.5) translateX(-140px)"
            }, "anim1")
        })


        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].load()


            gsap.to(".sec-right video", {
                duration: 1.5,
                transform: "scaleX(1) translateX(0)"

            })

            gsap.to(".sec-right img", {
                opacity: 1
            })



        })
    })




    let uiux = document.querySelector(".uiux");
    let arrowup1 = document.querySelectorAll("#arrowup1")
    let arrowup2 = document.querySelectorAll("#arrowup2")
    let product = document.querySelector(".product")
    let rotated1 = false;
    let rotated2 = false;
    uiux.addEventListener("click", function () {
        if (rotated1) {
            gsap.to("#arrowup1", {
                transform: "rotateX(0deg)"
            });
        } else {
            gsap.to("#arrowup1", {
                transform: "rotateX(180deg)"
            });
        }
        rotated1 = !rotated1;

    })

    product.addEventListener("click", function () {
        if (rotated2) {
            gsap.to(arrowup2, {
                transform: "rotateX(0deg)"
            });
        } else {
            gsap.to(arrowup2, {
                transform: "rotateX(180deg)"
            });
        }
        rotated2 = !rotated2;
    })


}


function page6Animations() {
    gsap.from(".btm6-part h4", {
        x: 0,
        duration: 0.8,
        stagger: {
            amount: -0.3
        },
        scrollTrigger: {
            trigger: ".btm6-part",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
}

loadingAnimation();
locomotiveAnimation();
navAnimation();
page2Animation();
page3VideoAnimation();
page4Animations();
page6Animations();