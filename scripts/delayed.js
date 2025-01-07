// add delayed functionality here
document.addEventListener('DOMContentLoaded', function () {
    const openModalButton = document.querySelector('#open-modal-button');
    const modal = document.querySelector('#my-modal');
    const closeModalButton = modal.querySelector('.close-button');
  
    function openModal() {
      setTimeout(() => {
        modal.style.display = 'block';
      }, 1000); // Delay opening the modal by 1 second (1000ms)
    }
  
    function closeModal() {
      modal.style.display = 'none';
    }
  
    openModalButton.addEventListener('click', function () {
      openModal();
    });
  
    closeModalButton.addEventListener('click', function () {
      closeModal();
    });
  
    // Optional: Close the modal if the user clicks outside of it
    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  });
  