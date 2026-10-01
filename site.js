// Shared theme and navigation for the portfolio and literature pages.
(() => {
    let savedTheme = 'light';
    try {
        savedTheme = localStorage.getItem('theme') || 'light';
    } catch (_) {
        // The controls still work when browser storage is unavailable.
    }
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');

    document.addEventListener('DOMContentLoaded', () => {
        const toggle = document.getElementById('theme-toggle');
        const updateThemeControl = () => {
            const dark = document.documentElement.classList.contains('dark');
            document.getElementById('theme-toggle-dark-icon').classList.toggle('hidden', dark);
            document.getElementById('theme-toggle-light-icon').classList.toggle('hidden', !dark);
            toggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
        };
        updateThemeControl();
        toggle.addEventListener('click', () => {
            const dark = document.documentElement.classList.toggle('dark');
            try {
                localStorage.setItem('theme', dark ? 'dark' : 'light');
            } catch (_) {}
            updateThemeControl();
        });

        const navbar = document.getElementById('navbar');
        const updateNavbar = () => navbar.classList.toggle('navbar-scrolled', window.scrollY > 50);
        window.addEventListener('scroll', updateNavbar, { passive: true });
        updateNavbar();

        const menuButton = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const setMenuOpen = (open) => {
            menu.classList.toggle('hidden', !open);
            menuButton.setAttribute('aria-expanded', String(open));
        };
        menuButton.addEventListener('click', () => setMenuOpen(menu.classList.contains('hidden')));
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => setMenuOpen(false));
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && !menu.classList.contains('hidden')) {
                setMenuOpen(false);
                menuButton.focus();
            }
        });
    });
})();
