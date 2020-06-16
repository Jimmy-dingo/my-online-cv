//************************************************************************************* */
//********************************* My Online CV Scripts ****************************** */
//************************************************************************************* */

//************************************ Menu Functions ********************************* */

//-------- Mobile Menu trigger --------//

const hamburgerBtn = document.querySelector('.hamburger-menu-icon img');
const mobileMenu = document.querySelector('.main-nav-mobile');
const closeMenuBtn = document.querySelector('.close-menu-icon');
const menuList = document.querySelectorAll('.main-nav-mobile li a');
const iconSocial = document.querySelectorAll('.icon-social');

//-------------------------------------//
//------------- Open Menu -------------//

const applyWidth = (width) => mobileMenu.style.width = `${width}%`;

let currentMenuWidth = 0;

const menuAnimationOpen = () => {
    mobileMenu.style.display = 'flex';
    hamburgerBtn.src = 'assets/icons/hamburger-icon-menu-opened.png';
    currentMenuWidth += 2;

    applyWidth(currentMenuWidth +1);

    if (Math.abs(currentMenuWidth) >= 74) {

        //Menu elements iteration
        for (let elem of menuList) {

            if (Math.abs(currentMenuWidth) >= 55) {
                //It shows the elements after the width of the menu is over 55%
                elem.style.display = 'block';
                closeMenuBtn.style.display = 'block';
            };

        }

        //Icons iteration
        for (let elem of iconSocial) {

            if (Math.abs(currentMenuWidth) >= 55) {
                //It shows the elements after the width of the menu is over 55%
                elem.style.display = 'block';
            };

        }


        return false
    };

    requestAnimationFrame(menuAnimationOpen);
}

//* Event handler *//
hamburgerBtn.addEventListener('click', menuAnimationOpen);


//-------------------------------------//
//------------- Close Menu ------------//


const menuAnimationClose = () => {
    hamburgerBtn.src = 'assets/icons/hamburger-icon-menu-closed.png';
    currentMenuWidth -= 2;
    applyWidth(currentMenuWidth);

    //Menu elements iteration
    for (let elem of menuList) {
        if (Math.abs(currentMenuWidth) <= 55) {
            //It removes the elements after the width of the menu is under 55%
            elem.style.display = 'none';
            closeMenuBtn.style.display = 'none';
        };
    }


    //Icons iteration
    for (let elem of iconSocial) {

        if (Math.abs(currentMenuWidth) >= 55) {
            //It shows the elements after the width of the menu is under 55%
            elem.style.display = 'none';
        };

    }

    if (Math.abs(currentMenuWidth) <= 0) {
        mobileMenu.style.display = 'none';
        return false
    }

    requestAnimationFrame(menuAnimationClose);
}


//* Event handler *//
closeMenuBtn.addEventListener('click', menuAnimationClose);

//-------------------------------------//

//************************************************************************************* */