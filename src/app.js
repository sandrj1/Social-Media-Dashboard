import './scss/main.scss';
import Social from './components/Social';
import Overview from './components/overview';

const app = () => {
    document.querySelector('.social__container').innerHTML = Social();
    document.querySelector('.overview__container').innerHTML = Overview();
}

app();