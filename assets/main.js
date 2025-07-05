// assets/main.js

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Project data with local images
const projectsData = {
  visual: [
    {
      title: "",
      category: "visual",
      images: ["assets/imgs/visuals/1.webp"],
    },
    {
      title: "",
      category: "visual",
      images: ["assets/imgs/visuals/2.webp"],
    },
    {
      title: "",
      category: "visual",
      images: ["assets/imgs/visuals/3.webp"],
    },
    {
      title: "",
      category: "visual",
      images: ["assets/imgs/visuals/4.webp"],
    },
    {
      title: "",
      category: "visual",
      images: ["assets/imgs/visuals/5.webp"],
    },
    {
      title: "",
      category: "visual",
      images: ["assets/imgs/visuals/6.webp"],
    },   
    {
      title: "",
      category: "visual",
      images: ["assets/imgs/visuals/7.webp"],
    },
    {
      title: "",
      category: "visual",
      images: ["assets/imgs/visuals/8.webp"],
    }
    
  ],
  Branding: [
    {
      title: "",
      category: "Branding",
      images: ["assets/imgs/Branding/1.webp"],
    },
    {
      title: "",
      category: "Branding",
      images: ["assets/imgs/Branding/2.webp"],
    },
    {
      title: "",
      category: "Branding",
      images: ["assets/imgs/Branding/3.webp"],
    },
    {
      title: "",
      category: "Branding",
      images: ["assets/imgs/Branding/4.webp"],
    },
    {
      title: "",
      category: "Branding",
      images: ["assets/imgs/Branding/5.webp"],
    },
    {
      title: "",
      category: "Branding",
      images: ["assets/imgs/Branding/6.webp"],
    },
    {
      title: "",
      category: "Branding",
      images: ["assets/imgs/Branding/7.webp"],
    },
    {
      title: "",
      category: "Branding",
      images: ["assets/imgs/Branding/8.webp"],
    },
    {
      title: "",
      category: "Branding",
      images: ["assets/imgs/Branding/9.webp"],
    },
    {
      title: "",
      category: "Branding",
      images: ["assets/imgs/Branding/10.webp"],
    },
  ],
  social: [
    {
      title: "",
      category: "social",
      images: ["assets/imgs/social/1.webp"],
    },
    {
      title: "",
      category: "social",
      images: ["assets/imgs/social/2.webp"],
    },
    {
      title: "",
      category: "social",
      images: ["assets/imgs/social/3.webp"],
    },
    {
      title: "",
      category: "social",
      images: ["assets/imgs/social/4.webp"],
    },
    {
      title: "",
      category: "social",
      images: ["assets/imgs/social/5.webp"],
    },
    {
      title: "",
      category: "social",
      images: ["assets/imgs/social/6.webp"],
    },
    {
      title: "",
      category: "social",
      images: ["assets/imgs/social/7.webp"],
    },
    {
      title: "",
      category: "social",
      images: ["assets/imgs/social/8.webp"],
    },
    {
      title: "",
      category: "social",
      images: ["assets/imgs/social/9.webp"],
    },
    {
      title: "",
      category: "social",
      images: ["assets/imgs/social/10.webp"],
    },
    {
      title: "",
      category: "social",
      images: ["assets/imgs/social/11.webp"],
    },
    {
      title: "",
      category: "social",
      images: ["assets/imgs/social/12.webp"],
    },
    {
      title: "",
      category: "social",
      images: ["assets/imgs/social/13.webp"],
    },
    {
      title: "",
      category: "social",
      images: ["assets/imgs/social/14.webp"],
    },
    {
      title: "",
      category: "social",
      images: ["assets/imgs/social/15.webp"],
    },
    {
      title: "",
      category: "social",
      images: ["assets/imgs/social/16.webp"],
    },
    {
      title: "",
      category: "social",
      images: ["assets/imgs/social/17.webp"],
    },
    {
      title: "",
      category: "social",
      images: ["assets/imgs/social/18.webp"],
    },
    {
      title: "",
      category: "social",
      images: ["assets/imgs/social/19.webp"],
    },
    {
      title: "",
      category: "social",
      images: ["assets/imgs/social/20.webp"],
    },
    {
      title: "",
      category: "social",
      images: ["assets/imgs/social/21.webp"],
    },
    {
      title: "",
      category: "social",
      images: ["assets/imgs/social/22.webp"],
    },
    {
      title: "",
      category: "social",
      images: ["assets/imgs/social/23.webp"],
    },
    {
      title: "",
      category: "social",
      images: ["assets/imgs/social/24.webp"],
    },
    {
      title: "",
      category: "social",
      images: ["assets/imgs/social/25.webp"],
    },
    {
      title: "",
      category: "social",
      images: ["assets/imgs/social/26.webp"],
    }



  ],
  packages: [],
  printing: [],
};

// Category titles mapping
const categoryTitles = {
  visual: "Visual Design",
  Branding: "Branding",
  social: "Social Media",
  packages: "Packages",
  printing: "Printing",
};

// Touch handling variables
let isTouchDevice = false;

// Slider variables
let currentSlide = 0;
let currentCategory = "";
let totalSlides = 0;

// Enhanced function to update category counts dynamically
function updateCategoryCounts() {
  const categoryCards = document.querySelectorAll(".category-card");

  categoryCards.forEach((card) => {
    const category = card.getAttribute("data-category");
    const countElement = card.querySelector(".category-count");

    if (projectsData[category]) {
      const projectCount = projectsData[category].length;
      let displayText;

      if (projectCount > 0) {
        displayText = `${projectCount} Project${projectCount > 1 ? "s" : ""}`;
      } else {
        displayText = "Coming Soon";
      }

      // Animate the count change
      gsap.to(countElement, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          countElement.textContent = displayText;
          gsap.to(countElement, {
            opacity: 1,
            duration: 0.3,
          });
        },
      });
    }
  });
}

// Function to add new project (useful for future updates)
function addProject(category, projectData) {
  if (projectsData[category]) {
    projectsData[category].push(projectData);
    updateCategoryCounts();
    console.log(
      `Project added to ${category}. New count: ${projectsData[category].length}`
    );
  } else {
    console.error(`Category "${category}" does not exist.`);
  }
}

// Function to remove project
function removeProject(category, index) {
  if (projectsData[category] && projectsData[category][index]) {
    projectsData[category].splice(index, 1);
    updateCategoryCounts();
    console.log(
      `Project removed from ${category}. New count: ${projectsData[category].length}`
    );
  } else {
    console.error(`Invalid category or index.`);
  }
}

// Function to get category statistics
function getCategoryStats() {
  const stats = {};
  Object.keys(projectsData).forEach((category) => {
    stats[category] = {
      count: projectsData[category].length,
      title: categoryTitles[category],
    };
  });
  return stats;
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  initAnimations();
  initCounters();
  initGallery();
  initSliderModal();
  addInteractiveEffects();
  initTouchEvents();
  createParticlesBackground();

  // Update category counts dynamically
  updateCategoryCounts();

  // Log statistics to console for debugging
  console.log("Category Statistics:", getCategoryStats());
});

// Initialize GSAP Animations
function initAnimations() {
  // Hero section animations
  gsap
    .timeline({
      onComplete: () => {
        gsap.set(".scroll-indicator", { opacity: 1 });
      },
    })
    .to(".hero-text", {
      opacity: 1,
      x: 0,
      duration: 1.5,
      ease: "power3.out",
    })
    .to(
      ".hero-image",
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
      },
      "-=1"
    );

  // Section title animations
  gsap.utils.toArray(".section-title").forEach((title) => {
    gsap.to(title, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: title,
        start: "top 85%",
        end: "bottom 15%",
      },
    });
  });

  // Title underline animations
  gsap.utils.toArray(".title-underline").forEach((underline) => {
    gsap.to(underline, {
      opacity: 1,
      scaleX: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: underline,
        start: "top 85%",
        end: "bottom 15%",
      },
    });
  });

  // About section animations
  gsap.to(".about-text", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-text",
      start: "top 80%",
    },
  });

  // Skill items animation
  gsap.utils.toArray(".skill-item").forEach((item, index) => {
    gsap.to(item, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: index * 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
      },
    });
  });

  // Category cards animation
  gsap.utils.toArray(".category-card").forEach((card, index) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: index * 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
      },
    });
  });

  // Contact items animation
  gsap.utils.toArray(".contact-item, .social-link").forEach((item, index) => {
    gsap.to(item, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: index * 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
      },
    });
  });
}

// Initialize counters with + sign
function initCounters() {
  const counters = document.querySelectorAll(".stat-number");

  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-target"));
    const duration = 2500;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      if (current < target) {
        current += increment;
        if (current > target) current = target;
        counter.textContent = Math.floor(current);
      } else {
        counter.textContent = target;
      }

      if (current < target) {
        requestAnimationFrame(updateCounter);
      }
    };

    // Start counter when in view
    ScrollTrigger.create({
      trigger: counter,
      start: "top 80%",
      onEnter: () => {
        counter.textContent = "0";
        updateCounter();
      },
    });
  });
}

// Initialize gallery functionality
function initGallery() {
  // Add click events to category cards
  const categoryCards = document.querySelectorAll(".category-card");
  categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const category = card.getAttribute("data-category");
      openCategorySlider(category);
    });

    // Add 3D tilt effect
    addTiltEffectToCard(card);
  });
}

// Create animated particles background
function createParticlesBackground() {
  const gallerySection = document.querySelector(".gallery-section");
  const particlesContainer = document.createElement("div");
  particlesContainer.className = "particles-container";

  // Create particles
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 20 + "s";
    particle.style.animationDuration = Math.random() * 10 + 10 + "s";
    particlesContainer.appendChild(particle);
  }

  gallerySection.appendChild(particlesContainer);
}

// Add 3D tilt effect to category cards
function addTiltEffectToCard(element) {
  element.addEventListener("mousemove", (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    gsap.to(element, {
      duration: 0.3,
      rotationX: rotateX,
      rotationY: rotateY,
      transformPerspective: 1000,
      ease: "power2.out",
    });
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(element, {
      duration: 0.5,
      rotationX: 0,
      rotationY: 0,
      ease: "power2.out",
    });
  });
}

// Open category slider
function openCategorySlider(category) {
  const projects = projectsData[category];

  // Check if category has projects
  if (!projects || projects.length === 0) {
    // Show coming soon message
    showComingSoonMessage(category);
    return;
  }

  currentCategory = category;
  currentSlide = 0;
  totalSlides = projects.length;

  const modal = document.getElementById("gallerySliderModal");
  const sliderTitle = document.querySelector(".slider-title");
  const sliderTrack = document.getElementById("sliderTrack");
  const indicatorsContainer = document.querySelector(".slider-indicators");

  // Set title
  sliderTitle.textContent = categoryTitles[category];

  // Clear previous content
  sliderTrack.innerHTML = "";
  indicatorsContainer.innerHTML = "";

  // Create slides
  projects.forEach((project, index) => {
    const slide = document.createElement("div");
    slide.className = "slider-slide";

    const img = document.createElement("img");
    img.src = project.images[0]; // Each project has one image
    img.alt = `${categoryTitles[category]} ${index + 1}`;
    img.addEventListener("click", () => openFullsizeImage(img.src, img.alt));

    slide.appendChild(img);
    sliderTrack.appendChild(slide);

    // Create indicator
    const indicator = document.createElement("div");
    indicator.className = `indicator ${index === 0 ? "active" : ""}`;
    indicator.addEventListener("click", () => goToSlide(index));
    indicatorsContainer.appendChild(indicator);
  });

  // Show modal
  modal.style.display = "block";
  gsap.fromTo(
    modal,
    { opacity: 0 },
    { opacity: 1, duration: 0.4, ease: "power2.out" }
  );

  // Update slider position
  updateSliderPosition();

  // Update navigation buttons
  updateNavigationButtons();

  // Prevent body scroll
  document.body.style.overflow = "hidden";
}

// Show coming soon message for categories without projects
function showComingSoonMessage(category) {
  const message = document.createElement("div");
  message.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(32, 32, 32, 0.95);
    color: white;
    padding: 30px 40px;
    border-radius: 15px;
    text-align: center;
    z-index: 3000;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  `;

  message.innerHTML = `
    <h3 style="margin-bottom: 15px; font-size: 1.5rem;">${categoryTitles[category]}</h3>
    <p style="margin-bottom: 20px; opacity: 0.8;">Projects coming soon...</p>
    <button style="
      background: linear-gradient(45deg, #898989, #cdcdcd);
      color: #202020;
      border: none;
      padding: 10px 20px;
      border-radius: 25px;
      cursor: pointer;
      font-weight: 600;
    " onclick="this.parentElement.remove()">OK</button>
  `;

  document.body.appendChild(message);

  gsap.fromTo(
    message,
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.7)" }
  );

  // Auto remove after 3 seconds
  setTimeout(() => {
    if (message.parentElement) {
      gsap.to(message, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => message.remove(),
      });
    }
  }, 3000);
}

// Initialize slider modal functionality
function initSliderModal() {
  const modal = document.getElementById("gallerySliderModal");
  const fullsizeModal = document.getElementById("fullsizeModal");
  const closeSliderBtn = document.querySelector(".close-slider");
  const closeFullsizeBtn = document.querySelector(".close-fullsize");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // Close slider modal events
  closeSliderBtn.addEventListener("click", closeSliderModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeSliderModal();
  });

  // Close fullsize modal events
  closeFullsizeBtn.addEventListener("click", closeFullsizeModal);
  fullsizeModal.addEventListener("click", (e) => {
    if (e.target === fullsizeModal) closeFullsizeModal();
  });

  // Navigation buttons
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (modal.style.display === "block") {
      switch (e.key) {
        case "Escape":
          closeSliderModal();
          break;
        case "ArrowLeft":
          prevSlide();
          break;
        case "ArrowRight":
          nextSlide();
          break;
      }
    }
    if (fullsizeModal.style.display === "block" && e.key === "Escape") {
      closeFullsizeModal();
    }
  });
}

// Go to specific slide
function goToSlide(index) {
  currentSlide = index;
  updateSliderPosition();
  updateIndicators();
  updateNavigationButtons();
}

// Previous slide
function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSliderPosition();
    updateIndicators();
    updateNavigationButtons();
  }
}

// Next slide
function nextSlide() {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateSliderPosition();
    updateIndicators();
    updateNavigationButtons();
  }
}

// Update slider position
function updateSliderPosition() {
  const sliderTrack = document.getElementById("sliderTrack");
  const translateX = -currentSlide * 100;

  gsap.to(sliderTrack, {
    duration: 0.5,
    x: `${translateX}%`,
    ease: "power2.out",
  });
}

// Update indicators
function updateIndicators() {
  const indicators = document.querySelectorAll(".indicator");
  indicators.forEach((indicator, index) => {
    if (index === currentSlide) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

// Update navigation buttons
function updateNavigationButtons() {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // Show/hide buttons based on current slide
  if (currentSlide === 0) {
    prevBtn.style.opacity = "0.5";
    prevBtn.style.pointerEvents = "none";
  } else {
    prevBtn.style.opacity = "1";
    prevBtn.style.pointerEvents = "auto";
  }

  if (currentSlide === totalSlides - 1) {
    nextBtn.style.opacity = "0.5";
    nextBtn.style.pointerEvents = "none";
  } else {
    nextBtn.style.opacity = "1";
    nextBtn.style.pointerEvents = "auto";
  }
}

// Open full size image
function openFullsizeImage(imageSrc, imageAlt) {
  const fullsizeModal = document.getElementById("fullsizeModal");
  const fullsizeImg = document.querySelector(".fullsize-img");

  fullsizeImg.src = imageSrc;
  fullsizeImg.alt = imageAlt;

  // Show fullsize modal with animation
  fullsizeModal.style.display = "block";
  gsap.fromTo(
    fullsizeModal,
    { opacity: 0 },
    { opacity: 1, duration: 0.3, ease: "power2.out" }
  );
}

// Close slider modal
function closeSliderModal() {
  const modal = document.getElementById("gallerySliderModal");

  gsap.to(modal, {
    opacity: 0,
    duration: 0.3,
    ease: "power2.out",
    onComplete: () => {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    },
  });
}

// Close fullsize modal
function closeFullsizeModal() {
  const fullsizeModal = document.getElementById("fullsizeModal");

  gsap.to(fullsizeModal, {
    opacity: 0,
    duration: 0.3,
    ease: "power2.out",
    onComplete: () => {
      fullsizeModal.style.display = "none";
    },
  });
}

// Initialize touch events for mobile swipe
function initTouchEvents() {
  const modal = document.getElementById("gallerySliderModal");
  let startX = 0;
  let endX = 0;

  modal.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  modal.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    const difference = startX - endX;
    const threshold = 50; // minimum swipe distance

    if (Math.abs(difference) > threshold) {
      if (difference > 0) {
        // Swipe left - next slide
        nextSlide();
      } else {
        // Swipe right - previous slide
        prevSlide();
      }
    }
  }
}

// Add interactive effects with enhanced 3D
function addInteractiveEffects() {
  // Enhanced 3D Logo items interactions
  const logoItems = document.querySelectorAll(".logo-item");
  logoItems.forEach((item) => {
    // 3D Tilt effect
    item.addEventListener("mousemove", (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 2;
      const rotateY = (centerX - x) / 2;

      gsap.to(item, {
        duration: 0.3,
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: 1000,
        ease: "power2.out",
      });
    });

    item.addEventListener("click", () => {
      const tool = item.getAttribute("data-tool");
      const toolNames = {
        photoshop: "Adobe Photoshop",
        illustrator: "Adobe Illustrator",
        indesign: "Adobe InDesign",
        aftereffects: "Adobe After Effects",
        capcut: "CapCut",
      };

      // Create tooltip effect
      showTooltip(item, `Expert in ${toolNames[tool]}`);

      // Enhanced 3D pulse animation
      gsap
        .timeline()
        .to(item, {
          scale: 1.4,
          rotationY: 180,
          duration: 0.3,
          ease: "back.out(1.7)",
        })
        .to(item, {
          scale: 1,
          rotationY: 360,
          duration: 0.4,
          ease: "back.out(1.7)",
        });
    });

    item.addEventListener("mouseenter", () => {
      gsap.to(item, {
        scale: 1.3,
        rotationZ: 10,
        duration: 0.4,
        ease: "back.out(1.7)",
      });
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(item, {
        scale: 1,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        duration: 0.4,
        ease: "back.out(1.7)",
      });
    });
  });

  // Enhanced 3D Contact items interactions
  const contactItems = document.querySelectorAll(".contact-item");
  contactItems.forEach((item) => {
    const icon = item.querySelector(".contact-icon");

    // 3D Tilt effect for contact icons
    item.addEventListener("mousemove", (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 8;
      const rotateY = (centerX - x) / 8;

      gsap.to(icon, {
        duration: 0.3,
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: 800,
        ease: "power2.out",
      });
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(icon, {
        duration: 0.4,
        rotationX: 0,
        rotationY: 0,
        ease: "back.out(1.7)",
      });
    });

    const whatsAppLink = item.querySelector('a[href*="wa.me"]');
    const emailLink = item.querySelector('a[href*="mailto"]');

    if (whatsAppLink) {
      item.addEventListener("click", () => {
        window.open(whatsAppLink.href, "_blank");
      });
      item.style.cursor = "pointer";
    }

    if (emailLink) {
      item.addEventListener("click", () => {
        window.location.href = emailLink.href;
      });
      item.style.cursor = "pointer";
    }
  });

  // Enhanced 3D Social links interactions
  const socialLinks = document.querySelectorAll(".social-link");
  socialLinks.forEach((link) => {
    const icon = link.querySelector("i");

    link.addEventListener("mousemove", (e) => {
      const rect = link.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      gsap.to(link, {
        duration: 0.3,
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: 1000,
        ease: "power2.out",
      });
    });

    link.addEventListener("mouseleave", () => {
      gsap.to(link, {
        duration: 0.4,
        rotationX: 0,
        rotationY: 0,
        ease: "back.out(1.7)",
      });
    });

    // Icon specific 3D animation
    link.addEventListener("mouseenter", () => {
      gsap.to(icon, {
        rotationY: 360,
        scale: 1.2,
        duration: 0.6,
        ease: "back.out(1.7)",
      });
    });
  });

  // Profile image hover effect
  const profileContainer = document.querySelector(".profile-container");
  if (profileContainer) {
    profileContainer.addEventListener("mouseenter", () => {
      gsap.to(".profile-img", {
        scale: 1.05,
        rotationY: 5,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.to(".floating-logos .logo-item", {
        scale: 1.1,
        rotationZ: 15,
        duration: 0.4,
        stagger: 0.05,
        ease: "back.out(1.7)",
      });
    });

    profileContainer.addEventListener("mouseleave", () => {
      gsap.to(".profile-img", {
        scale: 1,
        rotationY: 0,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.to(".floating-logos .logo-item", {
        scale: 1,
        rotationZ: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "back.out(1.7)",
      });
    });
  }

  // Enhanced 3D Stat box hover effects
  const statBoxes = document.querySelectorAll(".stat-box");
  statBoxes.forEach((box) => {
    box.addEventListener("mousemove", (e) => {
      const rect = box.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 8;
      const rotateY = (centerX - x) / 8;

      gsap.to(box, {
        duration: 0.3,
        rotationX: rotateX,
        rotationY: rotateY,
        scale: 1.05,
        transformPerspective: 800,
        ease: "power2.out",
      });
    });

    box.addEventListener("mouseleave", () => {
      gsap.to(box, {
        scale: 1,
        rotationX: 0,
        rotationY: 0,
        duration: 0.4,
        ease: "back.out(1.7)",
      });
    });
  });

  // Enhanced 3D Skill item animations
  const skillItems = document.querySelectorAll(".skill-item");
  skillItems.forEach((item) => {
    const icon = item.querySelector(".skill-icon");

    item.addEventListener("mousemove", (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      gsap.to(item, {
        duration: 0.3,
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: 1000,
        ease: "power2.out",
      });
    });

    item.addEventListener("mouseenter", () => {
      gsap.to(icon, {
        rotationY: 360,
        scale: 1.15,
        duration: 0.8,
        ease: "back.out(1.7)",
      });
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(item, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.4,
        ease: "back.out(1.7)",
      });
    });
  });

  // Gallery section scroll effects
  addGalleryScrollEffects();
}

// Add scroll-based effects for gallery
function addGalleryScrollEffects() {
  // Parallax effect for particles
  gsap.to(".particle", {
    y: -100,
    ease: "none",
    scrollTrigger: {
      trigger: ".gallery-section",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  // Category cards reveal on scroll
  gsap.utils.toArray(".category-card").forEach((card, index) => {
    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 60,
        scale: 0.8,
        rotationY: 45,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationY: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
}

// Show tooltip function
function showTooltip(element, text) {
  const tooltip = document.createElement("div");
  tooltip.textContent = text;
  tooltip.style.cssText = `
        position: absolute;
        bottom: -45px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.9);
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 12px;
        white-space: nowrap;
        z-index: 1000;
        pointer-events: none;
    `;

  element.appendChild(tooltip);

  gsap.fromTo(
    tooltip,
    { opacity: 0, y: 10 },
    { opacity: 1, y: 0, duration: 0.3 }
  );

  setTimeout(() => {
    gsap.to(tooltip, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => tooltip.remove(),
    });
  }, 2000);
}

// Mouse parallax effect
document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX / window.innerWidth - 0.5;
  const mouseY = e.clientY / window.innerHeight - 0.5;

  // Apply subtle parallax to floating logos
  gsap.to(".floating-logos .logo-item", {
    x: mouseX * 10,
    y: mouseY * 10,
    duration: 1,
    ease: "power2.out",
  });

  // Apply parallax to profile image
  gsap.to(".profile-img", {
    x: mouseX * 5,
    y: mouseY * 5,
    duration: 1,
    ease: "power2.out",
  });
});

// Scroll-triggered animations for skill items
ScrollTrigger.create({
  trigger: ".skills-container",
  start: "top 80%",
  onEnter: () => {
    gsap.fromTo(
      ".skill-item",
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)",
      }
    );
  },
});

// Performance optimization: Reduce animations on mobile
if (window.innerWidth <= 768) {
  // Disable some heavy animations on mobile for better performance
  gsap.set(".floating-logos .logo-item", {
    animation: "none",
  });
}

// Smooth scrolling for any future anchor links
function smoothScroll(target) {
  gsap.to(window, {
    duration: 1.5,
    scrollTo: target,
    ease: "power2.inOut",
  });
}

// Loading animation
window.addEventListener("load", () => {
  gsap.from("body", {
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
  });

  // Animate floating logos on load
  gsap.fromTo(
    ".floating-logos .logo-item",
    {
      scale: 0,
      rotation: -180,
      opacity: 0,
    },
    {
      scale: 1,
      rotation: 0,
      opacity: 1,
      duration: 1,
      delay: 1.5,
      stagger: 0.2,
      ease: "back.out(1.7)",
    }
  );

  // Animate logo images separately
  gsap.fromTo(
    ".logo-img",
    {
      scale: 0,
      rotation: 180,
    },
    {
      scale: 1,
      rotation: 0,
      duration: 0.8,
      delay: 2,
      stagger: 0.15,
      ease: "back.out(1.7)",
    }
  );
});

// Resize handler
window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});

// Export functions for global access
window.openCategorySlider = openCategorySlider;
window.closeSliderModal = closeSliderModal;
window.openFullsizeImage = openFullsizeImage;
window.closeFullsizeModal = closeFullsizeModal;
window.updateCategoryCounts = updateCategoryCounts;
window.addProject = addProject;
window.removeProject = removeProject;
window.getCategoryStats = getCategoryStats;
