document.addEventListener('DOMContentLoaded', () => {
  const modalContainer = document.getElementById('modal-container');

  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <p id="modal-text">Speaker bio will appear here.</p>
    </div>
  `;
  modalContainer.appendChild(modal);

  const modalElement = document.querySelector('.modal');
  const modalText = document.querySelector('#modal-text');
  const closeBtn = document.querySelector('.close-btn');

  if (!modalElement || !modalText || !closeBtn) {
    return;
  }

  const speakers = [
    {
      name: 'Dr. Name Surname',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
      image: 'assets/images/Ellipse 17.png',
      bio: 'Speaker 1 is a renowned expert in AI and Machine Learning with 10+ years of experience.',
    },
    {
      name: 'Dr. Name Surname',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
      image: 'assets/images/profilepic2.png',
      bio: 'Speaker 2 specializes in software development and has contributed to numerous open-source projects.',
    },
    {
      name: 'Dr. Name Surname',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
      image: 'assets/images/prpic3.png',
      bio: 'Speaker 3 is a leading data scientist and analyst, helping organizations make data-driven decisions.',
    },
    {
      name: 'Dr. Name Surname',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
      image: 'assets/images/pic4.png',
      bio: 'Speaker 3 is a leading data scientist and analyst, helping organizations make data-driven decisions.',
    },
    {
      name: 'Dr. Name Surname',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
      image: 'assets/images/prpic3.png',
      bio: 'Speaker 3 is a leading data scientist and analyst, helping organizations make data-driven decisions.',
    },
    {
      name: 'Dr. Name Surname',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
      image: 'assets/images/pic4.png',
      bio: 'Speaker 3 is a leading data scientist and analyst, helping organizations make data-driven decisions.',
    },
  ];

  const speakerCardsContainer = document.getElementById('speaker-cards-container');

  // Create speaker cards dynamically
  speakers.forEach((speaker) => {
    const card = document.createElement('div');
    card.classList.add('speaker-card');

    card.innerHTML = `
      <img src="${speaker.image}" alt="${speaker.name}" class="speaker-image" />
      <h3 class="speaker-name">${speaker.name}</h3>
      <p class="speaker-desc">${speaker.desc}</p>
      <button class="bio-btn">See Bio</button>
    `;

    speakerCardsContainer.appendChild(card);

    // Add click event for "See Bio" button
    const bioButton = card.querySelector('.bio-btn');
    bioButton.addEventListener('click', () => {
      modalText.textContent = speaker.bio;
      modalElement.style.display = 'block';
    });
  });

  // Close the modal when the close button is clicked
  closeBtn.addEventListener('click', () => {
    modalElement.style.display = 'none';
  });

  // Close the modal when clicking outside of it
  window.addEventListener('click', (e) => {
    if (e.target === modalElement) {
      modalElement.style.display = 'none';
    }
  });
});

// Display the current date
const dateContainer = document.getElementById('speaker-btn-1');
const now = new Date();

const options = {
  weekday: 'long',
  day: '2-digit',
  month: 'long',
  year: 'numeric',
};
const formattedDate = now.toLocaleDateString('en-US', options);
dateContainer.innerText = formattedDate;
// Update Speaker Section Buttons
document.getElementById('speaker-btn-1').textContent = formattedDate;
document.getElementById('speaker-btn-2').textContent = formattedDate;
