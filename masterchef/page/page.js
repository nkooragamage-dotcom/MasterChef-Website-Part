
// This script adds smooth scrolling for the "Back to Home" links

document.querySelectorAll('.back-to-home').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        const target = document.querySelector('#home'); // Find the target

        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth' // Add smooth scroll effect
        });
    });
});
