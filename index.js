document.addEventListener('DOMContentLoaded', () => {
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const currentTheme = localStorage.getItem('theme');


if (currentTheme === 'light') {
body.classList.add('light-theme');
themeToggle.textContent = '⛅️';
}


themeToggle.addEventListener('click', () => {
body.classList.toggle('light-theme');
const isLight = body.classList.contains('light-theme');
themeToggle.textContent = isLight ? '⛅️' : '✦';
localStorage.setItem('theme', isLight ? 'light' : 'dark');
});
});