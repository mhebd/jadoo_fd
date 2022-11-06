const togglerBtn = document.querySelector('.navbar-toggler');
const menu = document.querySelector('.menu-wrapper');

togglerBtn.addEventListener('click', (e) => {
  menu.classList.toggle('show');
});
