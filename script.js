'use strict';
const themeButton = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const themeLabel = document.querySelector('.theme-label');
if (themeButton) {
  themeButton.addEventListener('click', () => {
    const darkEnabled = document.documentElement.dataset.theme !== 'dark';
    document.documentElement.dataset.theme = darkEnabled ? 'dark' : 'light';
    themeButton.setAttribute('aria-pressed', String(darkEnabled));
    themeButton.setAttribute('aria-label', darkEnabled ? 'Switch to light mode' : 'Switch to dark mode');
    if (themeIcon) themeIcon.textContent = darkEnabled ? '☀' : '☾';
    if (themeLabel) themeLabel.textContent = darkEnabled ? 'Light mode' : 'Dark mode';
  });
}

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    menuButton.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
    navigation.classList.toggle('is-open', !expanded);
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
      navigation.classList.remove('is-open');
    });
  });
}

const revealItems = document.querySelectorAll('.reveal');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('IntersectionObserver' in window && !reduceMotion) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -35px 0px' });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
