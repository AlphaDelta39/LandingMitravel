
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
function handleResize() {
    // Обработка изменения размера экрана
    console.log('Размер экрана изменился!');
}

// Устанавливаем обработчик при загрузке страницы
    window.addEventListener('resize', handleResize);

function StartAnimation(){

    burgerLine1.classList.toggle('active');
    burgerLine2.classList.toggle('active');
    BurgerContainer.classList.toggle('active');

}


function getinfo(){

    info = document.documentElement.scrollTop;
    console.log(info);
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

