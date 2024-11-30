// look into lenis later
// const lenis = new Lenis();

// function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

document.addEventListener('htmx:afterSettle', () => {
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
});
 
 // GSAP Loader Animation
 window.addEventListener('load', () => {
    // Loader fade out
    // gsap.to("#loader", { opacity: 0, duration: 1, delay: 0.5, onComplete: () => {
    //     document.getElementById("loader").style.display = "none";
    // }});

    gsap.to("header", { opacity: 1, y: 0, duration: 1, delay: 1 });
    gsap.to("#hero", { opacity: 1, y: 0, duration: 1, delay: 1.5 });
    gsap.from("#hero h2", { opacity: 0, y: -50, duration: 1, delay: 1.5 });
    gsap.from("#hero p", { opacity: 0, y: 50, duration: 1, delay: 1 });
    gsap.from("#show-modal-btn", { opacity: 0, scale: 0.8, duration: 1, delay: 1.5 });
    // #customers section
    // gsap.from("#customers", { opacity: 0, y: 50, duration: 1, delay: 3, onComplete: () => {
    //     gsap.from("#customers img", {
    //         opacity: 0,
    //         x: 50,
    //         duration: 2,
    //         stagger: 0.1, // Stagger between images
    //     });
    // }});
    // ahhhha
    const tl = gsap.timeline({ delay: 2 }); // Start after 3-second delay

    tl.from("#customers", { 
        opacity: 0, 
        y: 50, 
        duration: 1 
    })  
    .from("#customers img", { 
        opacity: 0, 
        x: 250, 
        duration: 1.2, 
        stagger: 0.1 
    }, "-=0.5"); // Overlap the start of image animation by 1 second

});
// GSAP animations demo
// gsap.from("#hero h2", { opacity: 0, y: -50, duration: 1 });
// gsap.from("#hero p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
// gsap.from("#learn-more", { opacity: 0, scale: 0.8, duration: 1, delay: 1 });
// handle all sections
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

// animate all images in the sections
// const imagesList = ["#customers img", "#about img", "#services img", "#contact img"];
// function animateImages(image) {
//     gsap.from(image, {
//         opacity: 0,
//         x: 50,
//         delay: 0.5,
//         duration: 2,
//         stagger: 0.3 // !! Stagger animation between each element
//     });
// }

// gsap.from("#customers img", { opacity: 0, x: 50, duration: 2, delay: 0.5 });

// imagesList.forEach(animateImages);
