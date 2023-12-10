
const BurgerMenu = document.querySelector('.burgerthree');
const BurgerContainer = document.querySelector('.BurgerContainer');
const burgerLine2 = document.querySelector('.one');
const burgerLine1 = document.querySelector('.two');
const HeaderAnimation = document.querySelector('.Header__ContentContainer')





let element = window;
let info;
let counter=1;

    BurgerMenu.addEventListener('click', StartAnimation);
    element.addEventListener("scroll", getinfo);


function StartAnimation(){

    burgerLine1.classList.toggle('active');
    burgerLine2.classList.toggle('active');
    BurgerContainer.classList.toggle('active');

}


function getinfo(){

    info = document.documentElement.scrollTop;

    HeaderAnimation.classList.toggle('active');

if(info == 0 ){
    HeaderAnimation.classList.remove('deactive');
    HeaderAnimation.classList.toggle('active');
    counter = 1;
    
}
if(info > 0 & counter == 1 ){
    HeaderAnimation.classList.remove('active');
    HeaderAnimation.classList.toggle('deactive');
    counter =0;
    
}
    
}


const childElement = document.querySelector('.ForSearchButton__container button')

window.addEventListener('load', updateChildMargin);
window.addEventListener('resize', updateChildMargin);

function updateChildMargin() {
    const parentElement = window.innerWidth;
    const parentWidth = parentElement.clientWidth;
    const width = parentElement/36;
    const okruglenie = Math.round(width) + 40;
    childElement.style.setProperty('--parent-width', okruglenie + 'px');
}
