const toogle= document.getElementsByClassName('toogle')
const navbar=document.getElementsByClassName('nav-link')[0]
toogle.addEventListener('click', () => {
    navbar.classList.toggle('active')
})