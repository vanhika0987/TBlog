function navAnimation() {
    var nav = document.querySelector("nav");

    nav.addEventListener("mouseenter", function() {
        let tl = gsap.timeline();
        tl.set("nav h5", { display: "block" }) // Ensure h5 is visible by setting display to block
          .to("#nav-bottom", {
              height: "21vh",
              duration: 0.1 // Adjust duration as needed
          })
          .to("nav h5", {
              autoAlpha: 1, // AutoAlpha sets both visibility and opacity
              duration: 0.12 // Adjust duration as needed
          }, "=0.3") // Start this animation 0.3 seconds after the previous one starts
          .from(".nav-part2 h5 span", {
              y: 25,
              stagger: {
                  amount: 0.4
              }
          });
    });

    nav.addEventListener("mouseleave", function() {
        let tl = gsap.timeline();
        tl.to("nav h5", {
            autoAlpha: 0, // AutoAlpha sets both visibility and opacity
            duration: 0.5 // Adjust duration as needed
        })
        .to("#nav-bottom", {
            height: "0vh",
            duration: 0.2 // Adjust duration as needed
        }, "-=0.5") // Start this animation 0.5 seconds earlier
        .set("nav h5", { display: "none" }); // Hide h5 after animation ends
    });
}

navAnimation();

