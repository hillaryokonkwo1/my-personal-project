// Navigation & Mobile Menu

document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navbarNav = document.querySelector('.navbar-nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const navbar = document.querySelector('.navbar');
  
  // Mobile menu toggle
  if (mobileMenuToggle && navbarNav) {
    mobileMenuToggle.addEventListener('click', () => {
      navbarNav.classList.toggle('active');
      
      // Animate hamburger icon
      const icon = mobileMenuToggle.querySelector('.menu-icon');
      if (icon) {
        icon.textContent = navbarNav.classList.contains('active') ? '✕' : '☰';
      }
    });
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navbarNav.classList.remove('active');
          const icon = mobileMenuToggle.querySelector('.menu-icon');
          if (icon) {
            icon.textContent = '☰';
          }
        }
      });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && navbarNav.classList.contains('active')) {
        navbarNav.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('.menu-icon');
        if (icon) {
          icon.textContent = '☰';
        }
      }
    });
  }
  
  // Highlight active page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || 
        (currentPage === '' && href === 'index.html') ||
        (currentPage === '/' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
  
  // Sticky navbar on scroll
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      navbar.classList.remove('scroll-up');
      return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
      // Scrolling down
      navbar.classList.remove('scroll-up');
      navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
      // Scrolling up
      navbar.classList.remove('scroll-down');
      navbar.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offsetTop = target.offsetTop - 80; // Account for fixed navbar
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});
