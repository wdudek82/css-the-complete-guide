let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let no = document.querySelector('.modal__action--negative');
let planButtons = document.querySelectorAll('.plan .button');
let hamburger = document.querySelector('.toggle-button');
let mobileMenu = document.querySelector('.mobile-nav');
let ctaButton = document.querySelector('.main-nav__item--cta');



function showModal() {
  modal.classList.add('open');

  backdrop.style.display = 'block';

  setTimeout(() => {
    console.log('done');
    backdrop.classList.add('open');
  }, 100);
}

function hideModal() {
  if (modal) {
    modal.classList.remove('open');
  }

  backdrop.classList.remove('open');
  
  setTimeout(() => {
    backdrop.style.display = 'none';
  }, 300);
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
  setTimeout(() => {
    mobileMenu.style.display = 'none';
  }, 300);
});

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 27) {
    hideModal();
  } 
});

hamburger.addEventListener('click', () => {
  backdrop.style.display = 'block';

  setTimeout(() => {
    backdrop.classList.add('open');
  }, 100);

  mobileMenu.style.display = 'block';

  setTimeout(() => {
    mobileMenu.classList.add('open');
    mobileMenu.style.zIndex = 250;
  }, 10);
});

ctaButton.addEventListener('animationstart', (e) => {
  console.log('Animation started', e)
})

ctaButton.addEventListener('animationend', (e) => {
  console.log('Animation ended', e);
})

ctaButton.addEventListener('animationiteration', (e) => {
  console.log('Animation iteration', e);
});