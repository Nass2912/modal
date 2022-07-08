'use strict';
var modalButton = document.querySelectorAll('.show-modal');
var modal = document.querySelector('.modal');
var closeModal = document.querySelector('.close-modal');
var overlay = document.querySelector('.overlay');
function hideModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
function showModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
modalButton.forEach(function (button) {
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
