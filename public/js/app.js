import {MDCIconButtonToggle} from '@material/icon-button';
import {MDCMenu} from '@material/menu';
import {MDCMenuSurface} from '@material/menu-surface';
import {MDCRipple} from '@material/ripple';
import {MDCTopAppBar} from '@material/top-app-bar';


// Import my theme variables
import themeName from './my-theme';

const mainEl = document.querySelector('#main-content');

// enable ripple on all buttons
// const buttonEls = Array.from(mainEl.querySelectorAll('.mdc-button'));
// buttonEls.forEach((el) => new MDCRipple(el));

//main menu
const menuEl = mainEl.querySelector('#my-main-menu');
const mainMenu = new MDCMenu(menuEl);
mainMenu.open = false;
mainMenu.setAnchorCorner(1);


//main menu button
const iconToggleEl = mainEl.querySelector('#my-main-menu-button')
const iconToggle = new MDCIconButtonToggle(iconToggleEl);
iconToggleEl.addEventListener('MDCIconButtonToggle:change', function() {
    mainMenu.open = event.detail.isOn
});
// this is so icon toggles when user clicks outside menu to close it
menuEl.addEventListener('MDCMenuSurface:closed', function() {
    iconToggle.on = false;
});

const careerCardElArray = Array.from(mainEl.querySelectorAll('.career-card'));
const ripples = [].map.call(careerCardElArray, function(el) {
  return new MDCRipple(el);
});

// stuff to make card transition work!
const careerCardExpansionMap = new Map();
// create map first, don't want to spend time making it fancier...
careerCardElArray.forEach((cardEl) => {
    careerCardExpansionMap.set(cardEl.id, false);
});
console.log(careerCardExpansionMap);
careerCardElArray.forEach((cardEl) => {
    cardEl.addEventListener('click', function(event) {
        const clicked_id = this.id;
        console.log(clicked_id);
        if (careerCardExpansionMap.get(clicked_id)) {
            this.classList.remove('career-expanded');
            careerCardExpansionMap.set(clicked_id, false);
        } else {
            this.classList.add('career-expanded');
            careerCardExpansionMap.set(clicked_id, true);
        }
    });
});


// Toggle between permanent drawer and modal drawer at 1310px
// const layoutForScreenSize = () => {
//   if (window.matchMedia("(max-width: 1310px)").matches) {
//     initModalDrawer();
//     mainEl.classList.add('mdc-top-app-bar--fixed-adjust');
//   } else {
//     destroyModalDrawer();
//     mainEl.classList.remove('mdc-top-app-bar--fixed-adjust');
//   }
// }

// window.addEventListener('resize', layoutForScreenSize);
// layoutForScreenSize();
