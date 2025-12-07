document.addEventListener("DOMContentLoaded", () => {
  //   // Inisialisasi AOS Animation
  //   AOS.init({
  //     duration: 800,
  //     offset: 100,
  //     once: true,
  //   });

  const teams = [
    {
      id: 1,
      name: "Dr. Olivia Rhye",
      role: "Senior Veterinarian",
      twitter: "",
      linkedin: "",
      fb: "",
      img: "unsplash_DEQAyBEDRQE.png",
    },
    {
      id: 2,
      name: "Phoenix Baker",
      role: "Asst. Veterinarian",
      twitter: "",
      linkedin: "",
      fb: "",
      img: "unsplash_O13B7suRG4A.png",
    },
    {
      id: 3,
      name: "Lana Steiner",
      role: "Resident Veterinarian",
      twitter: "",
      linkedin: "",
      fb: "",
      img: "unsplash_E6Vo_4i-3Xg.png",
    },
    {
      id: 4,
      name: "Demi Wilkinson",
      role: "Intern Veterinarian",
      twitter: "",
      linkedin: "",
      fb: "",
      img: "unsplash_eGbmOTQxF04.png",
    },
  ];

  // Product data matching the design
  const products = [
    // --- BIRD FOOD ---
    {
      id: 1,
      name: "Premium Bird Seeds",
      category: "bird",
      image: "bird-food (1).png",
      price: "Rp 25.000",
    },
    {
      id: 2,
      name: "Bird Vitamin Mix",
      category: "bird",
      image: "bird-food (2).png",
      price: "Rp 30.000",
    },
    {
      id: 3,
      name: "Daily Bird Nutrition",
      category: "bird",
      image: "bird-food.png",
      price: "Rp 15.000",
    },

    // --- CAT FOOD ---
    {
      id: 4,
      name: "Adult Cat Dry Food",
      category: "cat",
      image: "cat-food (1).png",
      price: "Rp 85.000",
    },
    {
      id: 5,
      name: "Kitten Wet Food Pouch",
      category: "cat",
      image: "cat-food (2).png",
      price: "Rp 12.000",
    },
    {
      id: 6,
      name: "Premium Cat Kibble",
      category: "cat",
      image: "cat-food.png",
      price: "Rp 95.000",
    },

    // --- DOG FOOD ---
    {
      id: 7,
      name: "Puppy Growth Formula",
      category: "dog",
      image: "dog-food (1).png",
      price: "Rp 120.000",
    },
    {
      id: 8,
      name: "Dog Chews & Treats",
      category: "dog",
      image: "dog-food (2).png",
      price: "Rp 45.000",
    },
    {
      id: 9,
      name: "Adult Dog Meat Selection",
      category: "dog",
      image: "dog-food.png",
      price: "Rp 150.000",
    },

    // --- FISH FOOD ---
    {
      id: 10,
      name: "Goldfish Flakes",
      category: "fish",
      image: "fish-food (1).png",
      price: "Rp 20.000",
    },
    {
      id: 11,
      name: "Tropical Fish Pellets",
      category: "fish",
      image: "fish-food (2).png",
      price: "Rp 35.000",
    },
    {
      id: 12,
      name: "Aquarium Micro Granules",
      category: "fish",
      image: "fish-food.png",
      price: "Rp 25.000",
    },
  ];

  // Mobile Menu Toggle
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  document.querySelectorAll(".nav-item").forEach((n) =>
    n.addEventListener("click", () => {
      if (window.innerWidth > 769) return; // Only close on mobile

      if (!n.classList.contains("dropdown")) {
        // if the clicked nav-item is not a dropdown
        if (hamburger && navMenu) {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");

          // reset all open dropdown menus
          document.querySelectorAll(".dropdown-menu.show").forEach((menu) => {
            menu.classList.remove("show");
          });

          // reset all active dropdown toggles
          document
            .querySelectorAll(".dropdown-toggle.active")
            .forEach((toggle) => {
              toggle.classList.remove("active");
            });
        }
      }
    })
  );

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      // Check if we are in mobile view (width < 768px)
      if (window.innerWidth <= 768) {
        e.preventDefault();

        // Find the sibling <ul> submenu element
        const dropdownMenu = toggle.nextElementSibling;

        // Toggle menu display
        dropdownMenu.classList.toggle("show");

        // Toggle arrow rotation
        toggle.classList.toggle("active");
      }
    });
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      //   navMenu.classList.remove("active"); // Close menu on click
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Navbar scroll effect
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Contact form submission
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for your message! We will get back to you soon.");
      this.reset();
    });

  // Newsletter form submission
  document
    .getElementById("newsletterForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for subscribing to our newsletter!");
      this.reset();
    });

  // Render products function
  function renderProducts(filter = "random") {
    const grid = document.getElementById("productsGrid");
    const limit = window.innerWidth > 768 ? 3 : 2; // limit products on devices
    const filteredProducts =
      filter === "random"
        ? [...products].sort(() => 0.5 - Math.random()).slice(0, limit)
        : products.filter((p) => p.category === filter);

    grid.innerHTML = filteredProducts
      .map(
        (product, index) => `
                <div class="product-card" style="animation: fadeIn 0.6s ease-out ${
                  index * 100
                }ms backwards">
                    <div class="product-image-container">
                        <img src="./assets/image/products/${
                          product.image
                        }" alt="${product.name}" class="product-image">
                    </div>
                    
                </div>
            `
      )
      .join("");
  }

  // Filter buttons functionality
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      const filter = this.getAttribute("data-filter");
      renderProducts(filter);
    });
  });

  function renderTeams() {
    const grid = document.getElementById("team-members");
    grid.innerHTML = teams
      .map(
        (team, index) => `
<div class="team-member">
              <div class="team-image-container">
                <img
                  src="./assets/image/our_team/${team.img}" alt="${team.name}"
                  class="team-image"
                />
              </div>
              <div>
                <h4 class="team-name">${team.name}</h4>
                <p class="team-role">${team.role}</p>
              </div>
              <div class="team-social">
                <a href="#" class="social-link">
                    <img
                    src="./assets/icon/brands/twitter.svg" alt="twitter" width="24" 
     height="24"
                    />
                </a>
                <a href="#" class="social-link">
                    <img
                    src="./assets/icon/brands/linkedin.svg" alt="linkedin" width="24" 
     height="24"
                    />
                </a>
                <a href="#" class="social-link">
                    <img
                    src="./assets/icon/brands/facebook.svg" alt="facebook" width="24" 
     height="24"
                    />  
                </a>
              </div>
            </div>
            `
      )
      .join("");
  }

  // Video Play/Pause Toggle
  document
    .querySelector(".play-overlay")
    .addEventListener("click", function () {
      const video = document.getElementById("blogVideo");
      const overlay = document.querySelector(".play-overlay");

      if (video.paused) {
        // play video
        video.play();
        // hide custom button overlay
        overlay.style.display = "none";
        // show native browser controls (pause, volume, fullscreen)
        video.setAttribute("controls", "controls");
      }
    });

  // Initialize products on page load
  renderProducts();
  renderTeams();
});
