const navUl = document.querySelector('.nav-ul');
const burgerBtn = document.querySelector('.burger-btn');

burgerBtn.addEventListener('click', () => {
  console.log('object');
  navUl.classList.toggle('show');
});
