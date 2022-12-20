import './styles/main.css'
import {toggleContact} from './contact.js'
import {toggleHome} from './home.js'

const tabList = document.querySelector('.tab-list');
tabList.addEventListener('click', (e) => {
    if (e.target.id === 'home') {
        toggleHome();
    } else if (e.target.id === 'contact') {
        toggleContact();
    }
});



