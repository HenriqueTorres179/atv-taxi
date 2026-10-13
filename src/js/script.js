const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
menuToggle.addEventListener('click', () => {
  const toggle = navMenu.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', toggle);
  menuToggle.setAttribute('aria-label', toggle ? 'Fechar Menu' : 'Abrir Menu');
});
