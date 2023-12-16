
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
    const okruglenie = Math.round(width) + 10;
    childElement.style.setProperty('--parent-width', okruglenie + 'px');
}


//////// swiper logic ///////

const MainTouchContainer = document.querySelector(".Video__container");
const Swiper = document.querySelector(".Swiper")
MainTouchContainer.addEventListener('mousedown', handleMouseUp);
MainTouchContainer.addEventListener('mouseup', handleMouseDown);
let isMouseDown = false;
let startX = 0;
let FullPosition = 0;
let distance = 0;



function handleMouseDown(event) {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseDown)
    StopOn()
    isMouseDown = false;
    }

function handleMouseUp(event) {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseDown);
    isMouseDown = true;
    startX = 0;
    startX = event.clientX;
}


function StopOn(){
    if(distance <= -250 && distance >= -502){
        distance = -502;
        Swiper.style.setProperty('--changes-transform', distance + 'px')
    }else if(distance >= -250 && distance < 500){
        distance = 0;
        Swiper.style.setProperty('--changes-transform', distance + 'px')
    }else if(distance <= -800 && distance > -1600){
        distance = -1006;
        Swiper.style.setProperty('--changes-transform', distance + 'px')
    }else if(distance > -800){
        distance = -502;
        Swiper.style.setProperty('--changes-transform', distance + 'px')
    }
}

function handleMouseMove(event) {
if(isMouseDown == true ){
    const currentX = event.clientX;
    const deltaX = currentX - startX;
    distance += deltaX;
    startX = currentX;
    
}
        if(distance < 100 ){
        Swiper.style.setProperty('--changes-transform', distance  + 'px')
        }else{
            distance = 100;
        }
        if(distance > -1050){

        }else{
            distance = -1050;
        }

}




//////// swiper logic for Phone ///////
document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchmove', handleTouchMove);

function handleTouchStart(event) {
  const touch = event.touches[0].clientX;

}

function handleTouchMove(event) {
  const touch = event.touches[0].clientX;
}


MainTouchContainer.addEventListener('touchstart', handleMouseUpPhone);
MainTouchContainer.addEventListener('touchend', handleMouseDownPhone);
let isMouseDownPhone = false;
let startXPhone = 0;
let FullPositionPhone = 0;
let distancePhone = 0;



function handleMouseDownPhone(event) {
    document.removeEventListener('touchstart', handleTouchStart);
    document.removeEventListener('touchmove', handleTouchMove);
    isMouseDownPhone = false;
    StopOPhone()
    }

function handleMouseUpPhone(event) {
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    isMouseDownPhone = true;
    startXPhone = 0;
    startXPhone = event.touches[0].clientX;
}


function StopOPhone(){
    if(distancePhone <= -250 && distancePhone >= -502){
        distancePhone = -502;
        Swiper.style.setProperty('--changes-transform', distancePhone + 'px')
    }else if(distancePhone >= -250 && distancePhone < 500){
        distancePhone = 0;
        Swiper.style.setProperty('--changes-transform', distancePhone + 'px')
    }else if(distancePhone <= -800 && distancePhone > -1600){
        distancePhone = -1006;
        Swiper.style.setProperty('--changes-transform', distancePhone + 'px')
    }else if(distancePhone > -800){
        distancePhone = -502;
        Swiper.style.setProperty('--changes-transform', distancePhone + 'px')
    }
}

function handleTouchMove(event) {
if(isMouseDownPhone == true ){
    const currentX = event.touches[0].clientX;
    const deltaX = currentX - startXPhone;
    distancePhone += deltaX;
    startXPhone = currentX;
    
}
        if(distancePhone < 100 ){
        Swiper.style.setProperty('--changes-transform', distancePhone  + 'px')
        }else{
            distancePhone = 100;
        }
        if(distancePhone > -1050){

        }else{
            distancePhone = -1050;
        }

}


    // Button of swiper left and Right // 

    const ButtonLeft = document.querySelector('.Btn_elemtLeft');
    const ButtonRight = document.querySelector('.Btn_elemtRight');

    ButtonLeft.addEventListener('click', swipeLeft)
    ButtonRight.addEventListener('click', swipeRight)

    function swipeLeft(){
        if(distance < -2){
        distance += 501
        console.log(distance)
        StopOn()
        }else{
            distance = -1003
            StopOn()
        }
    }

    function swipeRight(){
        if(distance > -1003){
            distance -= 501
            console.log(distance)
            StopOn()
            }else{
                distance = -3
                StopOn()
            }
    }