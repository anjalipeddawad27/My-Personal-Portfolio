const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 120);
});
/*scrolling page header part */

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onClick= () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}