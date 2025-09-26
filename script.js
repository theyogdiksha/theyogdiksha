document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial-card");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let current = 0;
  let interval;

  function showTestimonial(index, direction = "right") {
    testimonials.forEach((t, i) => {
      t.classList.remove("active", "slide-in-left", "slide-in-right");
      if (i === index) {
        t.classList.add("active");
        t.classList.add(direction === "right" ? "slide-in-right" : "slide-in-left");
      }
    });
  }

  function nextTestimonial() {
    current = (current + 1) % testimonials.length;
    showTestimonial(current, "right");
  }

  function prevTestimonial() {
    current = (current - 1 + testimonials.length) % testimonials.length;
    showTestimonial(current, "left");
  }

  function startAutoPlay() {
    interval = setInterval(nextTestimonial, 4000);
  }

  function stopAutoPlay() {
    clearInterval(interval);
  }

  // Init
  showTestimonial(current);
  startAutoPlay();

  // Buttons
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      stopAutoPlay();
      nextTestimonial();
      startAutoPlay();
    });
  }
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      stopAutoPlay();
      prevTestimonial();
      startAutoPlay();
    });
  }
});
