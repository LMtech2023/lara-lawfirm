/**
 * Lara Law Firm — site interactions
 */
(function () {
  const contactForm = document.querySelector(".contact-form");
  const menuToggle = document.querySelector(".header__toggle");
  const menuBackdrop = document.querySelector(".header__backdrop");
  const menuLinks = document.querySelectorAll(".header__nav a");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
    });
  }

  const yearEl = document.querySelector("[data-year]");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function setMenuOpen(isOpen) {
    if (!menuToggle) {
      return;
    }

    document.body.classList.toggle("nav-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    document.body.style.overflow = isOpen ? "hidden" : "";
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      const isOpen = !document.body.classList.contains("nav-open");
      setMenuOpen(isOpen);
    });
  }

  if (menuBackdrop) {
    menuBackdrop.addEventListener("click", closeMenu);
  }

  menuLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 980) {
      closeMenu();
    }
  });
})();
