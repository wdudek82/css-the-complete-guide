let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let no = document.querySelector('.modal__action--negative');
let planButtons = document.querySelectorAll('.plan .button');

function showModal() {
  modal.classList.add('open');
  backdrop.classList.add('open');
}

function hideModal() {
  if (modal) {
    modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
}

if (no) {
  no.addEventListener('click', hideModal);
}

planButtons.forEach(item => {
  item.addEventListener('click', showModal);
});

backdrop.addEventListener('click', () => {
  hideModal()
  mobileMenu.classList.remove('open');
});

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 27) {
    hideModal();
  } 
});


let hamburger = document.querySelector('.toggle-button');
let mobileMenu = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
  backdrop.classList.add('open');
  mobileMenu.classList.add('open');
  mobileMenu.style.zIndex = 250;
});