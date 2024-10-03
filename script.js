// Get the elements
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const navLinks = document.getElementById('nav-links');

// Function to open the menu
menuIcon.addEventListener('click', () => {
    navLinks.style.display = 'flex';
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
});

// Function to close the menu
closeIcon.addEventListener('click', () => {
    navLinks.style.display = 'none';
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
});

//Hiding and displaying reach-top arrow
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}
