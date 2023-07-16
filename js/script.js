
var showMenu = document.getElementById('s-menu');
var hideMenu = document.getElementById('hide-menu');
var sideBar = document.getElementById('sbar');
var overLay = document.getElementById('overlay');

showMenu.addEventListener('click', ()=>{
    sideBar.style.right = '0';
    overLay.style.display = 'block';
})

hideMenu.addEventListener('click', ()=>{
    sideBar.style.right = '-400px';
    overLay.style.display = 'none';
})



var anually = document.querySelector('.anually'); 
var monthly = document.querySelector('.monthly'); 
var movement = document.querySelector('.movement');
var card = document.querySelectorAll('.card');



monthly.addEventListener('click', ()=>{
    movement.classList.add("rightbtn");
    movement.innerText = 'Anually';
    movement.classList.add("colorchange");
    for (let i = 0; i< card.length; i++){
        card[i].style.transform = 'rotateY(180deg)';
    }
})

anually.addEventListener('click', ()=>{
    movement.classList.remove("rightbtn");
    movement.classList.remove("colorchange");
    movement.innerText = 'Monthly';
    for (let i = 0; i< card.length; i++){
        card[i].style.transform = 'rotateY(0deg)';
    }
})
