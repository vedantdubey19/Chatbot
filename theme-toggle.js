function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const themeIcon = document.getElementById('theme-icon');

    if (currentTheme === 'light') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
        themeIcon.innerHTML = '🌞'; 
        themeIcon.setAttribute('aria-label', 'Switch to Light Mode');
    } else {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeIcon.innerHTML = '🌙'; 
        themeIcon.setAttribute('aria-label', 'Switch to Dark Mode');
    }
}
function initializeTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (storedTheme === 'light') {
        body.setAttribute('data-theme', 'light');
        themeIcon.innerHTML = '🌙';
        themeIcon.setAttribute('aria-label', 'Switch to Dark Mode');
    } else if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
        body.removeAttribute('data-theme');
        themeIcon.innerHTML = '🌞';
        themeIcon.setAttribute('aria-label', 'Switch to Light Mode');
    } else {
        body.removeAttribute('data-theme');
        themeIcon.innerHTML = '🌞';
        themeIcon.setAttribute('aria-label', 'Switch to Light Mode');
    }
    const themeButton = document.getElementById('theme-toggle');
    if (themeButton) {
        themeButton.addEventListener('click', toggleTheme);
    }
}
document.addEventListener('DOMContentLoaded', initializeTheme);
