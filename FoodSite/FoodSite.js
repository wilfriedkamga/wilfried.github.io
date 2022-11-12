let menu=document.querySelector('#menu-bars');
let navbar=document.querySelector('.navbar');

menu.unclick=()=>{
    menu.classList.toggle ('fa-times');
    navbar.classList.toggle('active');
}