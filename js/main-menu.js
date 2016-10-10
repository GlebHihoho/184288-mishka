var mainMenuBtn = document.querySelector('.header__main-menu-btn');
var mainMenu = document.querySelector('.main-menu');
var menuImg = document.querySelector('.header__btn-img');

mainMenuBtn.addEventListener('click', openClose);

function openClose(click) {
  mainMenu.classList.toggle('open-close-js');

  if (mainMenu.classList.contains('open-close-js')) {
    menuImg.src = 'img/icon-menu-open.svg';
  } else {
    menuImg.src = 'img/icon-menu-close.svg';
  }
}
