//************************************************************************************* */
//********************************* My Online CV Scripts ****************************** */
//************************************************************************************* */

//************************************ Menu Functions ********************************* */

//*** Mobile menu trigger ***//
const hamburgerBtn = document.querySelector('.hamburger-menu-icon img');
const mobileMenu = document.querySelector('.main-nav-mobile');
const closeMenuBtn = document.querySelector('.close-menu-icon');

const animationMenu = (widthPercentage, delayMs) => {
    setTimeout(() => {
        mobileMenu.style.width = widthPercentage;
    }, delayMs);
};

//*** Open button ***//

hamburgerBtn.addEventListener('click', ()=>{
    mobileMenu.style.display = 'flex';
    hamburgerBtn.src= 'assets/icons/hamburger-icon-menu-opened.png';
    setTimeout(()=>{
        mobileMenu.style.width = '25%';
        setTimeout(()=>{
            mobileMenu.style.width = '50%';
            setTimeout(()=>{
                mobileMenu.style.width = '75%';
            },30);
        },30);
    },30);
});

//*** Close button ***//

closeMenuBtn.addEventListener('click', ()=>{
    setTimeout(()=>{
        mobileMenu.style.width = '75%';
        setTimeout(()=>{
            mobileMenu.style.width = '50%';
            setTimeout(()=>{
                mobileMenu.style.width = '25%';
                setTimeout(()=>{
                    mobileMenu.style.display = 'none';
                    hamburgerBtn.src= 'assets/icons/hamburger-icon-menu-closed.png';
                },30);
            },30);
        },30);
    },30);
});
