'use strict';

function Hero (id, point, tlive) {
    let elem = document.getElementById(id);
    let oldSrc = elem.src;
    let int;
    this.moveHero = function() {
        int = setInterval(move, tlive);
    }
    function move () {
        elem.src=oldSrc;
        elem.style.left=Math.round(Math.random()*95)+'vw';
        elem.style.top=Math.round(Math.random()*95)+'vh';
    }
    elem.addEventListener('click', kick);
    function kick () {
        score += point;
        amount.innerHTML = score;
        elem.src = "images/bang.png"
    }
    this.stopHero=function(){
        clearInterval(int);
        elem.style.left='';
        elem.style.top='';
    }
}

function startGame(){
    body.style.backgroundImage = "url(images/fon.jpg)";
    btn.style.display = "none";
    score = 0;
    tGame = 10;
    amount.innerHTML = score;
    clock.innerHTML = tGame;
    intGame = setInterval(game, 1000)
    red.moveHero();
    bomb.moveHero();
    blue.moveHero();
    pig.moveHero();
    amountD.style.display="block";
    clockD.style.display="block";         
}
function game(){
    clock.innerHTML = tGame;
    tGame--;
    if(tGame<0&&score>=100){
        body.style.backgroundImage = "url(images/win.jpg)";
        red.stopHero();
        bomb.stopHero();
        blue.stopHero();
        pig.stopHero();
        btn.style.display="block";
        clearInterval(intGame);
        amountD.style.display="none";
        clockD.style.display="none";
    }
    if(tGame<0&&score<100){
        body.style.backgroundImage = "url(images/lose.jpg)";
        red.stopHero();
        bomb.stopHero();
        blue.stopHero();
        pig.stopHero();
        clearInterval(intGame);
        btn.style.display="block";
        amountD.style.display="none";
        clockD.style.display="none";
    }
}

let score = 0;
let tGame = 10;
let amount = document.querySelector('#amount>span');
let amountD = document.getElementById('amount');
let clockD = document.getElementById('clock');
let clock = document.querySelector('#clock>span');
let btn = document.getElementById('start');
let body = document.body;
let intGame;
let red = new Hero ('red', 20, 1000);
let bomb = new Hero ('bomb', 10, 1500);
let blue = new Hero ('blue', 50, 300);
let pig = new Hero ('pig', -100, 2000);
amount.innerHTML = score;
clock.innerHTML = tGame;
body.style.backgroundImage = "url(images/0-start.jpg)";
amountD.style.display="none";
clockD.style.display="none";
btn.addEventListener ('click', startGame);