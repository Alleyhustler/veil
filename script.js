window.addEventListener('scroll', () => {
    const image = document.querySelector('.main-image');
    const scrollAmount = window.scrollY;

    // Adjust the factor to control the image movement speed
    const moveDown = Math.min(scrollAmount * 0.5, 150); // Limits to a maximum of 300px
    
    image.style.transform = `translateY(${moveDown}px)`; // Move the image down
});

