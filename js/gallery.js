// Interests Gallery Functionality

// Image gallery mapping for each interest
const interestImages = {
  'Photography': [
    '../static/photography/image1.jpg',
    '../static/photography/image2.jpg'
  ],
  'Cooking & Baking': [
    '../static/cooking/cooking1.jpg',
    '../static/cooking/cooking2.jpg'
  ],
  'Hiking & Nature': [
    '../static/hiking/hiking1.jpg',
    '../static/hiking/hiking2.jpg'
  ],
  'Reading & Literature': [
    '../static/reading/reading1.jpg',
    '../static/reading/reading2.jpg'
  ],
  'Music & Playing Instruments': [
    '../static/music/music1.jpg',
    '../static/music/music2.jpg'
  ],
  'Fitness & Yoga': [
    '../static/fitness/fitness1.jpg',
    '../static/fitness/fitness2.jpg'
  ],
  'Art & Design': [],
  'Learning Languages': []
};

document.addEventListener('DOMContentLoaded', () => {
  initializeGallery();
  initializeFilters();
});

// Initialize gallery modal functionality
function initializeGallery() {
  const interestCards = document.querySelectorAll('.interest-card');
  const modal = document.getElementById('interestModal');
  const modalClose = document.querySelector('.modal-close');
  const modalBackdrop = document.querySelector('.modal-backdrop');
  
  if (!modal) return;
  
  // Open modal when clicking a card
  interestCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.dataset.title;
      const description = card.dataset.description;
      const category = card.dataset.category;
      
      // Update modal content
      const modalTitle = modal.querySelector('.modal-title');
      const modalBody = modal.querySelector('.modal-body');
      
      if (modalTitle) modalTitle.textContent = title;
      if (modalBody) {
        // Get images for this interest
        const images = interestImages[title] || [];
        let galleryHTML = '';
        
        if (images.length > 0) {
          galleryHTML = '<div class="modal-gallery">';
          images.forEach(imagePath => {
            galleryHTML += `
              <div class="modal-gallery-item">
                <img src="${imagePath}" alt="${title}" class="gallery-image" style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--radius-md); cursor: pointer;">
              </div>
            `;
          });
          galleryHTML += '</div>';
        } else {
          // Show placeholder if no images
          galleryHTML = `<p class="no-images" style="text-align: center; color: var(--color-text-secondary); padding: 2rem;">Add your images to the static folder to display them here.</p>`;
        }
        
        modalBody.innerHTML = `
          <div class="interest-tag">${category}</div>
          <p class="modal-description">${description}</p>
          ${galleryHTML}
        `;
        
        // Setup image click handlers for lightbox
        const galleryImages = modalBody.querySelectorAll('.gallery-image');
        galleryImages.forEach(img => {
          img.addEventListener('click', () => {
            showLightbox(img.src);
          });
        });
      }
      
      // Show modal
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Close modal functions
  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };
  
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', closeModal);
  }
  
  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

// Initialize filter functionality
function initializeFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const interestCards = document.querySelectorAll('.interest-card');
  
  if (filterButtons.length === 0) return;
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const filter = button.dataset.filter;
      
      // Filter cards
      interestCards.forEach(card => {
        const category = card.dataset.category;
        
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.5s ease-out';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Image lightbox for gallery items
function initializeLightbox() {
  const galleryItems = document.querySelectorAll('.modal-gallery-item, .country-gallery-item');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const imageSrc = e.target.src || e.target.style.backgroundImage;
      
      if (imageSrc) {
        showLightbox(imageSrc);
      }
    });
  });
}

function showLightbox(imageSrc) {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    cursor: zoom-out;
    animation: fadeIn 0.3s ease-out;
  `;
  
  const img = document.createElement('img');
  img.src = imageSrc;
  img.style.cssText = `
    max-width: 90%;
    max-height: 90vh;
    object-fit: contain;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-xl);
  `;
  
  lightbox.appendChild(img);
  document.body.appendChild(lightbox);
  
  lightbox.addEventListener('click', () => {
    lightbox.style.animation = 'fadeOut 0.3s ease-out';
    setTimeout(() => lightbox.remove(), 300);
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      lightbox.style.animation = 'fadeOut 0.3s ease-out';
      setTimeout(() => lightbox.remove(), 300);
    }
  });
}
