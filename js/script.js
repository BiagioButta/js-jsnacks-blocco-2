"use strict";

// Snack1

// let numeroRandom = parseInt(Math.floor(Math.random() * 100) + 1);

let firstNum = document.getElementById('firstNum');
let secondNum = document.getElementById('secondNum');
let snack1 = document.getElementById('snack1');


snack1.addEventListener('click', function(){
    let a =parseInt(firstNum.value);
    console.log(a)
    secondNum.innerHTML = "";
    if(a % 2 == 0){
        secondNum.innerHTML = `${a}`
        
    }else{
        secondNum.innerHTML = `${a += 1}`
    }
});

// Snack2

const nomeRandom=["Guns N'","AC/","Deep","Pink","Led","The"];
const cognomeRandom=["Who","Roses","DC","Floyd","Zeppelin","Purple"];
let snack2 = document.getElementById('snack2');
let nC1 = document.getElementById('nC1');
let nC2 = document.getElementById('nC2');
let nC3 = document.getElementById('nC3');
let nC4 = document.getElementById('nC4');
let nC5 = document.getElementById('nC5');
let nC6 = document.getElementById('nC6');
const nomeCompleto = [];

for(let i = 0 ; i < 6; i++ ){
    let nR = nomeRandom[Math.round(Math.random()*6)];
    let cR = cognomeRandom[Math.round(Math.random()*6)];

    nomeCompleto[i] =  nR + ' ' + cR;
    console.log(nomeCompleto[i])
}

snack2.addEventListener('click', function(){

    nC1.append(nomeCompleto[0])
    nC2.append(nomeCompleto[1])
    nC3.append(nomeCompleto[2])
    nC4.append(nomeCompleto[3])
    nC5.append(nomeCompleto[4])
    nC6.append(nomeCompleto[5])
    
})


// Snack 3


