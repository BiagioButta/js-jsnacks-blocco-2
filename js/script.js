"use strict";

// Snack1

// Creo un generatore di numeri casuali

let numeroRandom = parseInt(Math.floor(Math.random() * 100) + 1);
let firstNum = document.getElementById('firstNum');
let snack1 = document.getElementById('snack1');

snack1.addEventListener('click', function(){
    firstNum.innerHTML = "";
    secondNum.innerHTML = "";
    if(numeroRandom % 2 == 0){
        firstNum.append(numeroRandom)
    }else{
        firstNum.append(numeroRandom)
        document.getElementById('secondNum').classList.remove('d-none') 
        secondNum.append(numeroRandom + 1)
    }
});


