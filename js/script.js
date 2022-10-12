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
    nC1.innerHTML = "";
    nC2.innerHTML = "";
    nC3.innerHTML = "";
    nC4.innerHTML = "";
    nC5.innerHTML = "";
    nC6.innerHTML = "";

    nC1.append(nomeCompleto[0])
    nC2.append(nomeCompleto[1])
    nC3.append(nomeCompleto[2])
    nC4.append(nomeCompleto[3])
    nC5.append(nomeCompleto[4])
    nC6.append(nomeCompleto[5])
    
})


// Snack 3


let numDaSommare = document.getElementById('numDaSommare')
let snack3 = document.getElementById('snack3')
let somma = document.getElementById('somma')
let totNum = document.getElementById('totNum')
let sommaDispari = document.getElementById('sommaDispari')

let  array = []

snack3.addEventListener('click', function(){
    let nDs = parseFloat(numDaSommare.value)
    for(let i = 0; i < nDs; i++){
        array[i] = Math.round(Math.random() * 100) + 1
        totNum.append(`${array[i]}  `)
    }
})

somma.addEventListener('click', function(){
    
    let k = 0
    for(let i= 0; i < array.length; i = i + 2){
        let somma = (k += array[i])
        sommaDispari.innerHTML = `${somma}`
    }
})


// snack 4

const t = [];
const s = [];
let snack4 = document.getElementById('snack4');
let t_array = document.getElementById('t_array');
let s_array = document.getElementById('s_array');
let btn = document.getElementById('aggiungi');
let noAdd = document.getElementById('noAdd');
let tL = t.length;
let sL = s.length;


for(let i = 0; i < 30; i = i + 2){
    t[i] = Math.round(Math.random() * 100) + 1
}
for(let z = 0; z < 50; z = z + 2){
    s[z] = Math.round(Math.random() * 100) +1
}

snack4.addEventListener('click', function(){
    t_array.innerHTML = ""
    s_array.innerHTML = ""
    t_array.append(t)
    s_array.append(s)
})



btn.addEventListener('click', function(){
    noAdd.innerHTML = "";
    if(tL < sL){
       
})