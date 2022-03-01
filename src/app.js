import './scss/main.scss';
import Social from './components/Social';
import Overview from './components/overview';
const themeSwitcher = document.querySelector('.toggle__container');

class Theme {
    constructor(theme) {
        this.theme = theme;
    }

    setTheme(theme) {
        this.theme = theme;
    }
}

let defaultTheme = new Theme(false);

window.addEventListener('load', () => {
    document.querySelector('.social__container').innerHTML = Social();
    document.querySelector('.overview__container').innerHTML = Overview();
})

themeSwitcher.addEventListener('click', () => {
    const container = document.querySelector('.container');
    const header = document.querySelector('header');
    const h1 = document.querySelector('h1');
    const h2 = document.querySelectorAll('h2');
    const h3 = document.querySelectorAll('h3');
    const p = document.querySelectorAll('p');
    const toggleContainer = document.querySelector('.toggle__container');
    const toggle = document.querySelector('.toggle');
    const socialBox = document.querySelectorAll('.social__box');
    const overview = document.querySelectorAll('.overview');

    defaultTheme.setTheme(!defaultTheme.theme);

    if (defaultTheme.theme) {
        container.classList.add('dark');
        header.classList.add('dark');
        header.firstChild.classList.add('dark');
        h1.classList.add('dark');
        h2.forEach(item => item.classList.add('dark'));
        h3.forEach(item => item.classList.add('dark'));
        p.forEach(item => item.classList.add('dark'));
        toggleContainer.classList.add('dark');
        toggle.classList.add('dark');
        socialBox.forEach(item => item.classList.add('dark'));
        overview.forEach(item => item.classList.add('dark'));
    } else {
        container.classList.remove('dark');
        header.classList.remove('dark');
        header.firstChild.classList.remove('dark');
        h1.classList.remove('dark');
        h2.forEach(item => item.classList.remove('dark'));
        h3.forEach(item => item.classList.remove('dark'));
        p.forEach(item => item.classList.remove('dark'));
        toggleContainer.classList.remove('dark');
        toggle.classList.remove('dark');
        socialBox.forEach(item => item.classList.remove('dark'));
        overview.forEach(item => item.classList.remove('dark'));
    }
})
