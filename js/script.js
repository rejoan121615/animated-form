"use strict";

const timeline = gsap.timeline();

// get main btn
const btn = document.querySelector("#main-wrap .in-out-btn");

var condition = true;
document.querySelector(".in-btn").addEventListener("click", () => {
    timeline.fromTo(
        ".sign-up-container",
        {
            "clip-path": "circle(0% at 100% 0)",
        },
        {
            "clip-path": "circle(150% at 100% 0)",
            duration: 0.5,
            onStart: function () {
                let btnTl = gsap.timeline();
                btnTl
                    .set(".out-btn", {
                        display: "flex",
                    })
                    .fromTo(
                        ".out-btn",
                        {
                            "clip-path": "circle(0% at 50% 50%)",
                        },
                        {
                            "clip-path": "circle(100% at 50% 50%)",
                        }
                    )
                    .to(".in-btn", {
                        display: "none",
                        "clip-path": "circle(0% at 50% 50%)",
                        zIndex: 700
                    }).to('.out-btn', {
                        zIndex: 500
                    })
            },
        }
    );
});

document.querySelector(".out-btn").addEventListener("click", () => {
    console.log("out btn");
    timeline.fromTo(
        ".sign-up-container",
        {
            "clip-path": "circle(150% at 100% 0)",
        },
        {
            "clip-path": "circle(0% at 100% 0)",
            duration: 0.5,
            onStart: function () {
                let btnTl = gsap.timeline();
                btnTl
                    .set(".in-btn", {
                        display: "flex",
                    })
                    .fromTo(
                        ".in-btn",
                        {
                            "clip-path": "circle(0% at 50% 50%)",
                        },
                        {
                            "clip-path": "circle(100% at 50% 50%)",
                        }
                    )
                    .to(".out-btn", {
                        display: "none",
                        "clip-path": "circle(0% at 50% 50%)",
                        zIndex: 700,
                    }).to('.in-btn', {
                        zIndex: 500
                    })
            },
        }
    );
});
