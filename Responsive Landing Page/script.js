const navbar = document.querySelector('.navbar')
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const navLinksLi = document.querySelectorAll('.nav-links li')

window.addEventListener('scroll',() => {
    if(this.scrollY >= 100) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
})

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    hamburger.classList.toggle('active')
})

navLinksLi.forEach(li => li.addEventListener('child',() => {
    navLinksLi.forEach(li => li.classList.remove('active'))
    li.classList.add('active')

    hamburger.classList.remove(active)
    navLinks.classList.remove('active')
}))

//Typed js
var options = {
    strings: [
        'Creative Agency', 
        'Typed JS is COOl'
    ],
    typespeed:40,
    loop: true,
    loopCount: Infinity,
    typespeed: 10,
    backDelay:2000,
  };

var speed = new Typed('#hero-titles', options);

// AOS (Scrolling down)
AOS.init();
