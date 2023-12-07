import './gsapAnim';

/* Implementation of Accordion Button My Work Section */
let tableData = document.querySelector('.portfolioTable')     
tableData.addEventListener('click', (e)=> {
    const target = e.target
    const parentElm = target.closest(".portfolioTable__data")
    const sibling = parentElm.nextElementSibling;
    console.log(sibling)
    sibling.classList.toggle("hide");
})


/* Implementation fo Navbar Showing up as we scroll up */ 
let header = document.querySelector(".header")

let prevScrollpos = window.scrollY;

window.onscroll = function() {
  let currentScrollPos = window.scrollY;
  
  if (prevScrollpos > currentScrollPos) {
    header.classList.add("show-nav");
  } else {
    header.classList.remove("show-nav");
  }
  prevScrollpos = currentScrollPos;
}


const sections = document.querySelectorAll(".section");
const navLi = document.querySelectorAll(".nav__link");

function scrollToSection(e) {
  e.preventDefault();
  const targetId = this.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);
  console.log(this)
  console.log('TargetID:', targetId)
  console.log('TargetSection:', targetSection)

  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth',
  });
}

navLi.forEach((link) => {
  link.addEventListener('click', scrollToSection);
});



// Logo button and scroll button implementation
let logoBtn = document.querySelector('.logo');
let scrollBtn = document.querySelector('.scroll');
let home = document.querySelector("#home");
let intro = document.querySelector('.intro')

logoBtn.addEventListener('click', ()=>{
  window.scrollTo({
    top: home.offsetTop,
    behavior: 'smooth',
  });
});

scrollBtn.addEventListener('click', ()=>{
  window.scrollTo({
    top: intro.offsetTop,
    behavior: 'smooth',
  });
});

// The code to remove the hash sign from the url which gets stated when we click the anchor tag having the scroll class - (the scroll button)
scrollBtn.addEventListener ('click', function (e) { 
  e.preventDefault (); 
  history.pushState ('', document.title, window.location.pathname); 
});