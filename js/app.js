// DOM Elements
const mobileMenuButton = document.querySelector('.sm\\:hidden button');
const darkModeToggle = document.createElement('button');

// Initialize dark mode toggle
function initDarkModeToggle() {
  darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  darkModeToggle.className = 'p-2 rounded-full focus:outline-none';
  darkModeToggle.title = 'Toggle dark mode';
  
  const nav = document.querySelector('nav > div');
  nav.appendChild(darkModeToggle);
  
  // Check for saved preference or system preference
  const isDark = localStorage.getItem('darkMode') === 'true' || 
                (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  if (isDark) document.documentElement.classList.add('dark');
  
  darkModeToggle.addEventListener('click', toggleDarkMode);
}

// Toggle dark mode
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
  updateDarkModeIcon();
}

// Update dark mode icon
function updateDarkModeIcon() {
  const isDark = document.documentElement.classList.contains('dark');
  darkModeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

// Initialize mobile menu
function initMobileMenu() {
  const mobileMenu = document.querySelector('.sm\\:hidden .hidden');
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}

// Initialize animations
function initAnimations() {
  const animatedElements = document.querySelectorAll('.hero, .features');
  animatedElements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.2}s`;
    el.classList.add('animate-fade-in');
  });
}

// Form handling
function initForm() {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      try {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
        form.reset();
        
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 2000);
      } catch (error) {
        submitBtn.innerHTML = '<i class="fas fa-exclamation-circle"></i> Error';
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 2000);
      }
    });
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initDarkModeToggle();
  initAnimations();
  initForm();
});
