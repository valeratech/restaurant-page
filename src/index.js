import './styles/main.css'
import {toggleContact} from './contact.js'
import {toggleHome} from './home.js'
import {toggleMenu} from './menu.js'

toggleHome();
const tabList = document.querySelector('.tab-list');
tabList.addEventListener('click', (e) => {
    if (e.target.id === 'home') {
        toggleHome();
    } else if (e.target.id === 'contact') {
        toggleContact();
    } else if (e.target.id === 'menu') {
        toggleMenu();
    }
});



