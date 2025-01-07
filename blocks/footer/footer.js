// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
   const footerHTML = `
      <div class="footer-content">
        <!-- Logo Section -->
        <div class="footer-logo">
          <img src="/assets/images/logo-s.svg" alt="Logo" />
        </div>
        <!-- Text Section -->
        <div class="footer-text">
          <p>Footer Note</p>
        </div>
      </div>
    `;
  
    document.getElementById('footer-container').innerHTML = footerHTML;
  });
  