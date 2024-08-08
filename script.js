// Loading image animation
document.addEventListener('DOMContentLoaded', () => {
    const planets = document.querySelectorAll('.planet__image');
    // Image of the sun
    const presentation = document.querySelectorAll('.presentation__image');

    [...planets, ...presentation].forEach(planet => {
        const bgUrl = getComputedStyle(planet).getPropertyValue('background-image').slice(5, -2);
        const img = new Image();
        img.src = bgUrl;
        img.onload = () => {
            planet.style.backgroundImage = `url(${bgUrl})`;
            planet.classList.remove('placeholder');
        };
    });
});

// Scroll event listener for the header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll event listener for the plannets
window.addEventListener('scroll', () => {
    const planets = document.querySelectorAll('.planet');
    planets.forEach(planet => {
        const rect = planet.getBoundingClientRect();
        console.log(rect.top, window.innerHeight);
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            planet.classList.remove('invisible');
            planet.classList.add('visible');
        } else if (rect.top > window.innerHeight) {
            planet.classList.remove('visible');
            planet.classList.add('invisible');
        }
    });
});