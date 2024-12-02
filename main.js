document.addEventListener('DOMContentLoaded', () => {
    // GSAP Loader Animation
    gsap.to("#loader", { opacity: 0, duration: 1, delay: 0.5, onComplete: () => {
        document.getElementById("loader").style.display = "none";
    }});

    // gsap.to("header", { opacity: 1, y: 0, duration: 1, delay: 1 });
    // gsap.to("#hero", { opacity: 1, y: 0, duration: 1, delay: 1.5 });

    // how would I write this not so shitty?
    // const animateCustomers = () => {
    //     const tl = gsap.timeline({ delay: 2 }); // Start after 3-second delay
    //     console.log("tl, start #customers");
    //     tl.from("#customers", { 
    //         opacity: 0, 
    //         y: 50, 
    //         duration: 1 
    //     }).then((console.log("now the images"))).then(() => {
    //         tl.from("#customers img", { 
    //             opacity: 0, 
    //             x: 250, 
    //             duration: 1.2, 
    //             stagger: 0.1 
    //         }, "-=0.5"); // overlap the start of image animation by .5 second
    //     })
    // };

    // just a test
    const openTestModal = () => {
        const showModalBtn = document.getElementById('show-modal-btn');
        const modalOverlay = document.getElementById('modal-overlay');
        const closeBtn = document.getElementById('close-btn');

        showModalBtn.addEventListener('click', () => {
            modalOverlay.classList.remove('hidden');
        });

        closeBtn.addEventListener('click', () => {
            modalOverlay.classList.add('hidden');
        });

        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.add('hidden');
            }
        });
    };

    const animateCustomers = () => {
        // Ensure customers exist to avoid GSAP errors
        if (!document.querySelector("#customers img")) {
            console.warn("#customers img not found, skipping animation.");
            return;
        }
    
        const tl = gsap.timeline({ delay: 2 });
    
        console.log("Starting customers animation...");
    
        tl.set("#customers", { visibility: "visible" })
          .from("#customers", { 
              opacity: 0, 
              y: 50, 
              duration: 1 
          })
          .add(() => console.log("Now animating images..."))
          .from("#customers img", { 
              opacity: 0, 
              x: 250, 
              duration: 1.2, 
              stagger: 0.1 
          }, "-=0.5");
    };
    // document.addEventListener("DOMContentLoaded", () => {
    //     // Ensure DOM is fully loaded before animations
    //     animateCustomers();
    // });

    animateCustomers();

    document.addEventListener('htmx:afterSettle', (event) => {
        // Check if #customers was loaded dynamically
        if (event.detail.elt.id === "customers") {
            animateCustomers();
        }
        openTestModal();
    });

    // if (document.getElementById("customers")) {
    //     console.log("customers exist");
    //     animateCustomers();
    // }

    // document.addEventListener('htmx:afterSettle', () => {
    //     openTestModal();
    // });

    const sectionsList = ["#about", "#services", "#contact"];
    function animateSection(section) {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%", // !!! Trigger when top of #services reaches 80% of viewport
                toggleActions: "play none none none" // only once
            },
            opacity: 0,
            y: 50,
            duration: 1,
        });
    }

    sectionsList.forEach(animateSection);
});

window.addEventListener('load', () => {
    // Ensure smooth loading on mobile
    // gsap.to("header", { opacity: 1, y: 0, duration: 1, delay: 1 });
    // gsap.to("#hero", { opacity: 1, y: 0, duration: 1, delay: 1.5 });
    gsap.from("#hero h2", { opacity: 0, y: -50, duration: 1, delay: 1.5 });
    gsap.from("#hero p", { opacity: 0, y: 50, duration: 1, delay: 1 });
    gsap.from("#show-modal-btn", { opacity: 0, scale: 0.8, duration: 1, delay: 1.5 });
});
