document.addEventListener('DOMContentLoaded', () => {
  // Function to dynamically create an HTML element with classes
  function createElement(tagName, classNames = []) {
    const element = document.createElement(tagName);
    classNames.forEach((className) => element.classList.add(className));
    return element;
  }

  // Function to select an element by ID
  function selectById(id) {
    const element = document.getElementById(id);
    if (!element) {
      console.error(`Element with ID "${id}" not found!`);
    }
    return element;
  }
  // Use utility to safely get the slider container
  const sliderContainer = selectById('slider-container');
  if (!sliderContainer) return; // Early return if the container doesn't exist

  // Create slider structure dynamically
  const slider = createElement('div', ['slider']);

  // Array of event titles (replace these with actual event data)
  const events = [
    'Event 1: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
    'Event 2: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
    'Event 3: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
    'Event 4: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
    'Event 5: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
    'Event 6: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
    'Event 7: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
    'Event 8: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
    'Event 9: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
    'Event 10: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
    'Event 11: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
  ];

  // Create slider content (cards) for each event
  const sliderContent = createElement('div', ['slider-content']);

  events.forEach((event) => {
    const slide = createElement('div', ['slide']);

    // Function to format the current date
    function getFormattedDate() {
      const now = new Date();
      const options = {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      };
      return now.toLocaleDateString('en-US', options);
    }

    // Get formatted date using utils.js
    const dateString = getFormattedDate();

    // HTML structure for each event card
    slide.innerHTML = `
       <div class="event-card">
        <!-- Date Header -->
        <div class="date-header">
          <h4>${dateString}</h4>
        </div>

        <!-- Event Description -->
        <div class="description">
          <p>Details about ${event}.</p>
        </div>

        <!-- Speaker's Name -->
        <div class="speaker">
          <p>Speaker: John Doe</p>
        </div>

        <!-- Buttons -->
        <div class="buttons">
          <button class="btn-register">Register</button>
          <button class="btn-calender">Add To Calendar</button>
        </div>
      </div>
    `;

    sliderContent.appendChild(slide);
  });

  // Append the slider content to the slider
  slider.appendChild(sliderContent);

  // Append the created slider to the container
  sliderContainer.appendChild(slider);
});
