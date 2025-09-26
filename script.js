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


// Hamburger menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }
});


// Close nav on link click (mobile)
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
  });
});

// Smooth scroll with header offset (works on iOS Safari too)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      e.preventDefault();
      const headerOffset = document.querySelector("header").offsetHeight;
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset + 5; // +5px gap

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Close nav on mobile
      const nav = document.querySelector("nav");
      if (nav) nav.classList.remove("active");
    }
  });
});
