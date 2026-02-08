/**
 * Navigation functionality for the Analytiq Pages theme.
 * Handles desktop dropdowns, mobile menu, and keyboard accessibility.
 */
document.addEventListener('DOMContentLoaded', function() {
  const dropdownContainers = document.querySelectorAll('.dropdown-container');
  const mobileDropdownContainers = document.querySelectorAll('.mobile-dropdown-container');
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

  // Close all desktop dropdowns
  function closeAllDropdowns() {
    dropdownContainers.forEach(container => {
      const toggle = container.querySelector('.dropdown-toggle');
      const menu = container.querySelector('.dropdown-menu');
      toggle.classList.remove('active');
      menu.classList.remove('active');
    });
  }

  // Close all mobile dropdowns
  function closeAllMobileDropdowns() {
    mobileDropdownContainers.forEach(container => {
      const toggle = container.querySelector('.mobile-dropdown-toggle');
      const menu = container.querySelector('.mobile-dropdown-menu');
      toggle.classList.remove('active');
      menu.classList.remove('active');
    });
  }

  // Toggle mobile menu
  function toggleMobileMenu() {
    const isActive = mobileMenu.classList.contains('active');
    if (isActive) {
      mobileMenu.classList.remove('active');
      hamburgerIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      closeAllMobileDropdowns();
    } else {
      mobileMenu.classList.add('active');
      hamburgerIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
      closeAllDropdowns();
    }
  }

  // Handle mobile menu button clicks
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleMobileMenu();
    });
  }

  // Handle desktop dropdown toggle clicks and hover
  dropdownContainers.forEach(container => {
    const toggle = container.querySelector('.dropdown-toggle');
    const menu = container.querySelector('.dropdown-menu');

    // Click handler for desktop dropdowns
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();

      const isActive = toggle.classList.contains('active');

      // Close all other dropdowns and mobile menu
      closeAllDropdowns();
      if (mobileMenu && mobileMenu.classList.contains('active')) {
        toggleMobileMenu();
      }

      // Toggle current dropdown
      if (!isActive) {
        toggle.classList.add('active');
        menu.classList.add('active');
      }
    });

    // Hover handlers for desktop dropdowns
    if (window.innerWidth >= 768) {
      container.addEventListener('mouseenter', function() {
        closeAllDropdowns();
        toggle.classList.add('active');
        menu.classList.add('active');
      });

      container.addEventListener('mouseleave', function() {
        setTimeout(() => {
          if (!container.matches(':hover') && !menu.matches(':hover')) {
            toggle.classList.remove('active');
            menu.classList.remove('active');
          }
        }, 100);
      });

      menu.addEventListener('mouseleave', function() {
        toggle.classList.remove('active');
        menu.classList.remove('active');
      });
    }
  });

  // Handle mobile dropdown toggle clicks
  mobileDropdownContainers.forEach(container => {
    const toggle = container.querySelector('.mobile-dropdown-toggle');
    const menu = container.querySelector('.mobile-dropdown-menu');

    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();

      const isActive = toggle.classList.contains('active');

      if (isActive) {
        toggle.classList.remove('active');
        menu.classList.remove('active');
      } else {
        toggle.classList.add('active');
        menu.classList.add('active');
      }
    });
  });

  // Close menus when clicking outside
  document.addEventListener('click', function(e) {
    // Ignore clicks inside #app (for Excalidraw or other embedded apps)
    if (e.target.closest('#app')) {
      return;
    }

    if (!e.target.closest('.dropdown-container') &&
        !e.target.closest('.mobile-dropdown-container') &&
        !e.target.closest('#mobile-menu-button') &&
        !e.target.closest('#mobile-menu')) {
      closeAllDropdowns();
      closeAllMobileDropdowns();
      if (mobileMenu && mobileMenu.classList.contains('active')) {
        toggleMobileMenu();
      }
    }
  });

  // Close menus when pressing Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeAllDropdowns();
      closeAllMobileDropdowns();
      if (mobileMenu && mobileMenu.classList.contains('active')) {
        toggleMobileMenu();
      }
    }
  });

  // Close mobile menu when screen size changes to desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
      if (mobileMenu && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        closeAllMobileDropdowns();
      }
      closeAllDropdowns();
    } else {
      closeAllDropdowns();
    }
  });
});
