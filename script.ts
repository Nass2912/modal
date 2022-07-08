'use strict';
const modalButton = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal') as HTMLElement;
const closeModal = document.querySelector('.close-modal') as HTMLButtonElement;
const overlay = document.querySelector('.overlay') as HTMLElement;

function hideModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function showModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

modalButton.forEach(button => {
  console.log(button);
  button.addEventListener('click', hideModal);
});

closeModal.addEventListener('click', showModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      showModal();
    }
  }
});

overlay.addEventListener('click', showModal);
