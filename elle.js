document.addEventListener('DOMContentLoaded', () => {
    // Handle menu button click
    document.getElementById('menu-button').addEventListener('click', function() {
        const nav = document.getElementById('main-nav');
        nav.classList.toggle('open'); // Toggle the 'open' class
    });

    // Smooth scrolling for menu links with offset
    const menuLinks = document.querySelectorAll('#main-nav a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Scroll to the target section with offset for the header
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
                    behavior: 'smooth'
                });

                // Close the menu after clicking a link
                document.getElementById('main-nav').classList.remove('open');
            }
        });
    });

    // Handle call button click
    document.getElementById('call-button').addEventListener('click', function() {
        if (confirm('Do you want to call this number?')) {
            window.location.href = 'tel:+19499103159';
        }
    });

    // Handle Book Now button click
    document.querySelector('#book-now-button').addEventListener('click', function() {
        window.location.href = 'tel:+19499103159';
    });

    // Handle Contact Us button click
    document.querySelector('#main-nav a[href="#footer"]').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Scroll to the footer
        const footer = document.getElementById('footer');
        if (footer) {
            window.scrollTo({
                top: footer.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });

            // Close the menu after clicking the link
            document.getElementById('main-nav').classList.remove('open');
        }
    });
});
