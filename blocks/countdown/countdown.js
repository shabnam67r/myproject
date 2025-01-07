document.addEventListener('DOMContentLoaded', () => {
  // Set up the countdown container
  const countdownContainer = document.getElementById('countdown');
  countdownContainer.innerHTML = `
    <div class="countdown-content">
      <div class="countdown-text-content">
        <div>
         <p class="countdown-first-title">NEXT WEBINAR</p>
         <p class="countdown-title">EVENT NAME it amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
         <p class="countdown-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
        </div>
        <div class="date" id="date-container"></div>
        <div id="timer" class="countdown-timer">
          <div class="time-unit">
            <div class="square" id="days"></div>
            <span>Days</span>
          </div>
          <div class="time-unit">
            <div class="square" id="hours"></div>
            <span>Hours</span>
          </div>
          <div class="time-unit">
            <div class="square" id="minutes"></div>
            <span>Minutes</span>
          </div>
          <div class="time-unit">
            <div class="square" id="seconds"></div>
            <span>Seconds</span>
          </div>
        </div>
      </div>
      <div class="countdown-buttons">
        <button class="btn login-btn"></button>
        <button class="btn register-btn"></button>
      </div>
    </div>
  `;
  function getFormattedDate() {
    const today = new Date();
    return today.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  // Display the current date using the utility function
  const dateContainer = document.getElementById('date-container');
  dateContainer.innerText = getFormattedDate(); // Use utility function here

  // Countdown timer setup
  const targetDate = new Date('2025-01-15T24:00:00').getTime();
  // Function to update the countdown timer
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      return { ended: true };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      ended: false, days, hours, minutes, seconds,
    };
  }
  // Function to update the countdown and display it
  function updateCountdownDisplay() {
    const result = updateCountdown(targetDate); // Use utility function here

    if (result.ended) {
      document.getElementById('timer').innerHTML = '<p>Countdown Ended!</p>';
      return;
    }

    document.getElementById('days').innerText = result.days;
    document.getElementById('hours').innerText = result.hours;
    document.getElementById('minutes').innerText = result.minutes;
    document.getElementById('seconds').innerText = result.seconds;
  }

  // Update countdown every second
  setInterval(updateCountdownDisplay, 1000);
});
