
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    let index = 0;
    setInterval(() => {
        testimonials.forEach((t, i) => {
            t.style.display = (i === index) ? 'block' : 'none';
        });
        index = (index + 1) % testimonials.length;
    }, 3000);
});
