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