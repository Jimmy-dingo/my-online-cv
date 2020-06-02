//************************************************************************************* */
//********************************* My Online CV Scripts ****************************** */
//************************************************************************************* */

//************************************ Menu Functions ********************************* */

//******** Mobile menu trigger ********//
const hamburgerBtn = document.querySelector('.hamburger-menu-icon img');
const mobileMenu = document.querySelector('.main-nav-mobile');
const closeMenuBtn = document.querySelector('.close-menu-icon');


//******** Open button ********//

const applyWidth = (width) => mobileMenu.style.width = `${width}%`;

const menuAnimationOpen = () =>{
    mobileMenu.style.display = 'flex';
    hamburgerBtn.src= 'assets/icons/hamburger-icon-menu-opened.png';
    const widthAndWait = (width) =>{
        applyWidth(width)
        return wait(30) //* delay of the animation *//
    }
    wait(30)
    .then(widthAndWait(15)) //* Increments the width of the menu *//
    .then(widthAndWait(30))
    .then(widthAndWait(45))
    .then(widthAndWait(60))
    .then(widthAndWait(75))
}

//* Promise declaration*//
const wait = (timeMs) => {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, timeMs);
    })
}

//* Event handler *//
hamburgerBtn.addEventListener('click', menuAnimationOpen);


//******** Close button ********//

const menuAnimationClose = () =>{
    hamburgerBtn.src= 'assets/icons/hamburger-icon-menu-closed.png';
    const widthAndWait = (width) =>{
        applyWidth(width)
        return wait(30) //* delay of the animation *//
    }
    wait(30)
    .then(widthAndWait(75)) //* Decrements the width of the menu *//
    .then(widthAndWait(60))
    .then(widthAndWait(45))
    .then(widthAndWait(30))
    .then(widthAndWait(15))
    .then(()=> mobileMenu.style.display = 'none')
}

//* Event handler *//
closeMenuBtn.addEventListener('click', menuAnimationClose);
