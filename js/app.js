const cursor = document.getElementById('cursor');
const clickEffect = document.getElementById('clickEffect');

// Update cursor position to follow mouse movement
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

// Show click effect on click
document.addEventListener('click', (e) => {
    // Set the click effect position
    clickEffect.style.left = e.pageX - 25 + 'px'; // Center the effect
    clickEffect.style.top = e.pageY - 25 + 'px'; // Center the effect

    // Trigger animation by resetting the animation property
    clickEffect.style.animation = 'none'; // Reset
    clickEffect.offsetHeight; // Force reflow
    clickEffect.style.animation = ''; // Restart animation
});
// window.onload = function () {
//     const marquee = document.getElementById('marquee');
//     const marqueeContent = marquee.innerHTML; // Get the original content
//     const marqueeSpeed = 2; // Speed of the marquee

//     // Duplicate the content to make the scrolling seamless
//     marquee.innerHTML += marqueeContent;

//     let marqueeWidth = marquee.scrollWidth / 2; // Get the width of the original content
//     let offset = 0; // Initial offset

//     function scrollMarquee() {
//         offset -= marqueeSpeed; // Move left
//         if (offset <= -marqueeWidth) {
//             offset = 0; // Reset to create a continuous loop
//         }
//         marquee.style.transform = `translateX(${offset}px)`;
//         requestAnimationFrame(scrollMarquee); // Smooth animation
//     }

//     scrollMarquee(); // Start the animation
//     const marquee2 = document.getElementById('marquee2');
//     const marqueeContent2 = marquee2.innerHTML; // Get the original content
//     const marqueeSpeed2 = 2; // Speed of the marquee

//     // Duplicate the content to make the scrolling seamless
//     marquee2.innerHTML += marqueeContent2;

//     let marqueeWidth2 = marquee2.scrollWidth / 2; // Get the width of the original content
//     let offset2 = 0; // Initial offset2

//     function scrollMarquee2() {
//         offset2 -= marqueeSpeed2; // Move left
//         if (offset2 <= -marqueeWidth2) {
//             offset2 = 0; // Reset to create a continuous loop
//         }
//         marquee2.style.transform = `translateX(${offset2}px)`;
//         requestAnimationFrame(scrollMarquee2); // Smooth animation
//     }

//     scrollMarquee2(); // Start the animation
// };
window.onload = function () {
    function startMarquee(marqueeElement, speed) {
        const marqueeContent = marqueeElement.innerHTML; // Get the original content
        marqueeElement.innerHTML += marqueeContent; // Duplicate content for seamless scroll

        let offset = 0; // Initial offset

        function scrollMarquee() {
            offset -= speed; // Move left
            if (offset <= -marqueeElement.scrollWidth / 2) {
                offset = 0; // Reset to create a continuous loop
            }
            marqueeElement.style.transform = `translateX(${offset}px)`;
            requestAnimationFrame(scrollMarquee); // Smooth animation
        }

        scrollMarquee(); // Start the animation
    }

    // Initialize marquee1 and marquee2 with different speeds
    const marquee1 = document.getElementById('marquee');
    const marquee2 = document.getElementById('marquee2');
    const marquee3 = document.getElementById('marquee3');

    startMarquee(marquee1, 1); // Speed 1 for the first marquee
    startMarquee(marquee2, 1); // Speed 2 for the second marquee
    startMarquee(marquee3, 1); // Speed 2 for the second marquee
};

let toggleNav = () => {
    let nav = document.getElementById('navbar')
    let thisclick = document.getElementById('thisclick')
    nav.classList.toggle('active-nav')
    thisclick.classList.toggle('active-x')

}


document.addEventListener("DOMContentLoaded", function () {
    // Create the IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add the visible class when the image enters the viewport
                entry.target.classList.add("visible");
            } else {
                // Remove the visible class if the element is not in the viewport (optional)
                entry.target.classList.remove("visible");
            }
        });
    });

    // Target all elements with the 'fall-in' class
    const fallInElements = document.querySelectorAll('.fall-in');
    fallInElements.forEach((el) => observer.observe(el));
});
document.addEventListener("DOMContentLoaded", function () {
    // Create the IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add the visible class when the image enters the viewport
                entry.target.classList.add("visible");
            } else {
                // Optionally, remove the class when it's out of view
                entry.target.classList.remove("visible");
            }
        });
    });

    // Target the image with the 'latkya' class
    const latkyaElement = document.querySelector('.asas');
    observer.observe(latkyaElement);
});
document.addEventListener("DOMContentLoaded", function () {
    // Create the IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add the visible class when the image enters the viewport
                entry.target.classList.add("issm");
            } else {
                // Optionally, remove the class when it's out of view

            }
        });
    });

    // Target the image with the 'latkya' class
    const latkyaElement = document.querySelector('.cig-sec');
    observer.observe(latkyaElement);
});
