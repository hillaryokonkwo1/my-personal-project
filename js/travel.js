// Travel Page Functionality

document.addEventListener('DOMContentLoaded', () => {
  initializeCountryCards();
  initializeImageViewer();
});

// Initialize expandable country cards
function initializeCountryCards() {
  const expandButtons = document.querySelectorAll('.expand-btn');
  
  expandButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      
      const card = button.closest('.country-card');
      const details = card.querySelector('.country-details');
      const isExpanded = details.classList.contains('expanded');
      
      // Close all other expanded cards
      document.querySelectorAll('.country-details.expanded').forEach(detail => {
        if (detail !== details) {
          detail.classList.remove('expanded');
          const btn = detail.parentElement.querySelector('.expand-btn');
          if (btn) {
            btn.textContent = '📖 Read More';
            btn.style.backgroundColor = 'var(--color-surface-elevated)';
          }
        }
      });
      
      // Toggle current card
      if (isExpanded) {
        details.classList.remove('expanded');
        button.textContent = '📖 Read More';
        button.style.backgroundColor = 'var(--color-surface-elevated)';
      } else {
        details.classList.add('expanded');
        button.textContent = '📖 Show Less';
        button.style.backgroundColor = 'var(--color-primary-light)';
        
        // Smooth scroll to expanded content
        setTimeout(() => {
          const cardTop = card.offsetTop - 100;
          window.scrollTo({
            top: cardTop,
            behavior: 'smooth'
          });
        }, 300);
      }
    });
  });
}

// Initialize image viewer for country gallery
function initializeImageViewer() {
  const galleryItems = document.querySelectorAll('.country-gallery-item');
  const viewer = document.getElementById('imageViewer');
  const viewerImage = document.getElementById('viewerImage');
  const viewerClose = document.querySelector('.viewer-close');
  
  if (!viewer || !viewerImage) return;
  
  // Open viewer on image click
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const imageSrc = item.src || item.dataset.image;
      
      if (imageSrc) {
        viewerImage.src = imageSrc;
        viewer.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });
  
  // Close viewer
  const closeViewer = () => {
    viewer.classList.remove('active');
    document.body.style.overflow = '';
  };
  
  if (viewerClose) {
    viewerClose.addEventListener('click', closeViewer);
  }
  
  viewer.addEventListener('click', (e) => {
    if (e.target === viewer) {
      closeViewer();
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && viewer.classList.contains('active')) {
      closeViewer();
    }
  });
}

// Animate travel stats on scroll
function animateTravelStats() {
  const stats = document.querySelectorAll('.stat-number[data-count]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const stat = entry.target;
        const target = parseInt(stat.dataset.count);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateStat = () => {
          current += increment;
          if (current < target) {
            stat.textContent = Math.floor(current);
            requestAnimationFrame(updateStat);
          } else {
            stat.textContent = target;
          }
        };
        
        updateStat();
        observer.unobserve(stat);
      }
    });
  }, { threshold: 0.5 });
  
  stats.forEach(stat => observer.observe(stat));
}

// Initialize stats animation
animateTravelStats();

// Gallery image lazy loading
function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

lazyLoadImages();
