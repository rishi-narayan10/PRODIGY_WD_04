document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add a simple animation to section headers
    const sectionHeaders = document.querySelectorAll('h2');
    sectionHeaders.forEach(header => {
        header.style.opacity = '0';
        header.style.transition = 'opacity 0.5s ease-in-out';

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                    }, 300);
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(header);
    });
});