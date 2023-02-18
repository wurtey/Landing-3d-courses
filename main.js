document.addEventListener('DOMContentLoaded', function () {
  let burgerBtn = document.getElementById('burger-btn');
  burgerBtn.addEventListener('click', function () {
    document.querySelector('.header__container').classList.toggle('open');
    document.body.classList.toggle('stop-scroll');
  })
})
