document.addEventListener('DOMContentLoaded', function () {
let heroImage = document.querySelector('.hero-logo');
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Modalità scura
    heroImage.src = 'media/rb-hero-logo-dark.svg';
} else {
    // Modalità chiara
    heroImage.src = 'media/rb-hero-logo.svg';
}
});
