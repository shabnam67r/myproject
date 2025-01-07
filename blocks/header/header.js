window.addEventListener('DOMContentLoaded', () => {
  const headerHTML = `
    <header id="header">
      <div class="logo">
        <img src="/assets/images/logo-l.svg" alt="Logo" id="header-logo" />
      </div>
      <button id="hamburger-menu" class="hamburger-menu">
        ☰
      </button>
      <nav>
        <ul id="nav-list">
          <li><a href="#countdown">HOME</a></li>
          <li><a href="#speakers">SESSIONS</a></li>
          <li><a href="#">OVERVIEW</a></li>
          <li><a href="#">SCHEDULE</a></li>
          <li><a href="#">TEASER</a></li>
          <li><a href="#events">UPCOMING EVENTS</a></li>
        </ul>
      </nav>
    </header>
  `;

  // Insert header HTML into the page
  document.getElementById('header-container').innerHTML = headerHTML;

  // Get references to elements
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navList = document.getElementById('nav-list');

  // Add event listener to the hamburger menu button
  hamburgerMenu.addEventListener('click', () => {
    navList.classList.toggle('open'); // Toggle 'open' class on the navigation list
  });
});
