export {MDCIconButtonToggle} from '@material/icon-button';
export {MDCTopAppBar} from '@material/top-app-bar';

// Import my theme variables
import themeName from './my-theme';

// Top app bar
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

window.addEventListener('resize', layoutForScreenSize);
layoutForScreenSize();

// Build out shape size visualizer
[...document.querySelectorAll('.theme-summary-shape')].forEach((elem) => {
  // Get background value of color component and sanitize
  const sizeVals = getComputedStyle(elem).borderRadius
  const node = document.createElement("span");
  const textnode = document.createTextNode(`${sizeVals};`);
  node.classList.add('varValue');
  node.appendChild(textnode);

  // Append text of the element adjacent sibling to the end of the text string
  elem.previousElementSibling.appendChild(node)
})

// Color Visualization
const rgbToHex = (col) => {
  if(col.charAt(0)=='r') {
    col=col.replace('rgb(','').replace(')','').split(',');
    var r=parseInt(col[0], 10).toString(16);
    var g=parseInt(col[1], 10).toString(16);
    var b=parseInt(col[2], 10).toString(16);
    r=r.length==1?'0'+r:r; g=g.length==1?'0'+g:g; b=b.length==1?'0'+b:b;
    var colHex='#'+r+g+b;
    return colHex;
  }
}

// Build out color variable visualizer
[...document.querySelectorAll('.theme-summary-color')].forEach((elem) => {
  // Get background value of color component and sanitize
  const bgColor = rgbToHex(getComputedStyle(elem).backgroundColor) || ''
  const node = document.createElement("span");
  const textnode = document.createTextNode(`: ${bgColor};`);
  node.classList.add('varValue');
  node.appendChild(textnode);

  // Append text of the element adjacent sibling to the end of the text string
  elem.previousElementSibling.appendChild(node)
})

// Build out typography visualizer
const setVisibleFont = () => {
  const fontSample = document.querySelector('.mdc-typography--headline1')
  const fontUrl = `https://fonts.google.com/specimen/${getComputedStyle(fontSample).fontFamily.split(',', 1)[0].replace(/ /g, '+').replace(/['"]+/g, '')}`

  // Set actual CSS
  document.querySelector('.font-name').innerHTML = getComputedStyle(fontSample).fontFamily

  // Set Link
  document.querySelector('.font-link').href = fontUrl
}
setVisibleFont()
