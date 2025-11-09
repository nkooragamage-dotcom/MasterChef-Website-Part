document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission



    

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Simple validation (could be more complex)
    if (!name || !email || !phone || !message) {
        document.getElementById('form-message').textContent = 'Please fill in all fields.';
        return;
    }

    // Mock form submission success
    document.getElementById('form-message').textContent = 'Thank you for your message, we will get back to you soon!';

    // Clear the form
    document.getElementById('contact-form').reset();
});
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');

    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('open');
    });
});
