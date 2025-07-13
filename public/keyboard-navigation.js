// Enhanced keyboard navigation and accessibility
(function() {
  'use strict';

  // Focus management for skip links
  function handleSkipLinkClick(e) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
      target.focus();
      // Ensure the target is scrolled into view
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Escape key handler for modals/overlays
  function handleEscapeKey(e) {
    if (e.key === 'Escape') {
      // Close any open modals or return focus to appropriate element
      const activeElement = document.activeElement;
      if (activeElement && activeElement.blur) {
        activeElement.blur();
      }
    }
  }

  // Enhanced card navigation
  function enhanceCardNavigation() {
    const cards = document.querySelectorAll('.thing');
    
    cards.forEach(card => {
      // Add keyboard event listeners
      card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const primaryLink = card.querySelector('.primary-link');
          if (primaryLink) {
            primaryLink.click();
          }
        }
      });
    });
  }

  // Form enhancement for better keyboard navigation
  function enhanceFormNavigation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
      form.addEventListener('keydown', function(e) {
        // Allow form submission with Ctrl+Enter
        if (e.key === 'Enter' && e.ctrlKey) {
          const submitButton = form.querySelector('[type="submit"]');
          if (submitButton) {
            submitButton.click();
          }
        }
      });
    });
  }

  // Navigation enhancement
  function enhanceNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach((link, index) => {
      link.addEventListener('keydown', function(e) {
        let targetIndex;
        
        switch(e.key) {
          case 'ArrowRight':
          case 'ArrowDown':
            e.preventDefault();
            targetIndex = (index + 1) % navLinks.length;
            navLinks[targetIndex].focus();
            break;
          case 'ArrowLeft':
          case 'ArrowUp':
            e.preventDefault();
            targetIndex = (index - 1 + navLinks.length) % navLinks.length;
            navLinks[targetIndex].focus();
            break;
          case 'Home':
            e.preventDefault();
            navLinks[0].focus();
            break;
          case 'End':
            e.preventDefault();
            navLinks[navLinks.length - 1].focus();
            break;
        }
      });
    });
  }

  // Focus indicator enhancement
  function enhanceFocusIndicators() {
    // Add focus-visible polyfill behavior for better UX
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', function() {
      document.body.classList.remove('keyboard-navigation');
    });
  }

  // Announce page changes for screen readers
  function announcePageChange() {
    const pageTitle = document.title;
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'visually-hidden';
    announcement.textContent = `Page loaded: ${pageTitle}`;
    document.body.appendChild(announcement);
    
    // Remove announcement after it's been read
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }

  // Initialize all enhancements
  function init() {
    // Skip link functionality
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
      skipLink.addEventListener('click', handleSkipLinkClick);
    }

    // Global keyboard handlers
    document.addEventListener('keydown', handleEscapeKey);

    // Enhance components
    enhanceCardNavigation();
    enhanceFormNavigation();
    enhanceNavigation();
    enhanceFocusIndicators();
    
    // Announce page load for screen readers
    announcePageChange();
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();