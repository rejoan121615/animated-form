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
                        // display: "none",
                        "clip-path": "circle(0% at 50% 50%)",
                        zIndex: 700,
                    })
                    .to(".out-btn", {
                        zIndex: 500,
                    });
            },
        }
    );
});

document.querySelector(".out-btn").addEventListener("click", () => {
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
                        // display: "none",
                        "clip-path": "circle(0% at 50% 50%)",
                        zIndex: 700,
                    })
                    .to(".in-btn", {
                        zIndex: 500,
                    });
            },
        }
    );
});

// form validation
let signIn = document.querySelector('#sign-in');
let signUp = document.querySelector('#sign-up');

let forms = document.querySelectorAll('form');

// // form event 
validateForm(forms[0]);
validateForm(forms[1]);


function validateForm(form) {
    let submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.addEventListener('click', (clickBtn) => {
        let alertBox = form.querySelectorAll('.alert');
        form.querySelectorAll('input').forEach((input, index) => {
            if (!input.value) {
                clickBtn.preventDefault();
            } else {
                
                // get all of your input value from here 
                do {
                    console.log(alertBox)
                } while (false);
                // click btn 
                clickBtn.preventDefault();
            }
        })
    })
}

// pristine validation 
// window.onload = function () {
//     var form = document.getElementById("sign-in");

//     // create the pristine instance
//     var pristine = new Pristine(form);

//     form.addEventListener("submit", function (e) {
//         e.preventDefault();

//         // check if the form is valid
//         var valid = pristine.validate(); // returns true or false
//         console.log(valid);
//         console.log(pristine);
//     });
// };