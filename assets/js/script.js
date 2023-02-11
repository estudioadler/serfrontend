const topo = document.getElementById('return-top')

topo.addEventListener("click", function(){
    window.scrollTo(0,0)
})

document.addEventListener("scroll", ocultar)

function ocultar() {
    if (window.scrollY > 10){
        topo.style.display = "flex"
    } else {
        topo.style.display = "none"
    }

}
ocultar()

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);