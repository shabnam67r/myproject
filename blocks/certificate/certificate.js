document.addEventListener('DOMContentLoaded', () => {
  // Define the certificate data dynamically
  const certificateData = [
    {
      imgSrc: '/assets/images/001-certificate.png',
      imgAlt: '/Certificate Icon',
      title: 'Certified Speakers',
      description: 'Eabore etsu dolore magn aliqua enim ad minim veniam quis nostrud exercitas tion ullamco ipsum laboris.',
    },
    {
      imgSrc: '/assets/images/002-group.png',
      imgAlt: 'Connecting People',
      title: 'Connecting People',
      description: 'Eabore etsu dolore magn aliqua enim ad minim veniam quis nostrud exercitas tion ullamco ipsum laboris.',
    },
    {
      imgSrc: '/assets/images/003-world.png',
      imgAlt: 'Latest Updates',
      title: 'Latest Updates',
      description: 'Eabore etsu dolore magn aliqua enim ad minim veniam quis nostrud exercitas tion ullamco ipsum laboris.',
    },
  ];

  // Get the container where the certificates will be inserted
  const certificateContainer = document.getElementById('certificate');

  // Generate dynamic content
  let certificateHTML = '';

  certificateData.forEach((certificate) => {
    certificateHTML += `
        <div class="certificate-cards">
          <div class="certificate-cards-part1">
            <img src="${certificate.imgSrc}" alt="${certificate.imgAlt}" />
          </div>
          <div class="certificate-cards-part2">
            <div class="modal-circle"><h2>${certificate.title}</h2></div>
            <p>${certificate.description}</p>
          </div>
        </div>
      `;
  });

  // Insert the generated HTML into the container
  certificateContainer.innerHTML = certificateHTML;
});
