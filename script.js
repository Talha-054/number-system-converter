import {decToRest} from './func_1.js';
import { restToDec } from './func_2.js';

let from = document.getElementById('from');
let to = document.getElementById('to');
let userInput = document.getElementById('input');
let convert = document.getElementById('convert');
let result = document.getElementById('result');

let inputNumberBase;
let outputNumberBase;
let finalVal;
let input; 

let allowed_16 = ['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9'];
let allowed_10 = ['0','1','2','3','4','5','6','7','8','9'];
let allowed_8 = ['0','1','2','3','4','5','6','7'];
let allowed_2 = ['0','1'];

let validationArr = JSON.parse(JSON.stringify(allowed_10));


userInput.addEventListener('input', ()=>{
    
    inputNumberBase = parseInt(from.value);
    outputNumberBase = parseInt(to.value);
    console.log('fired')
    
    if (inputNumberBase == 10){
        console.log('reached')
        input = (userInput.value);
        finalVal = decToRest(input,outputNumberBase);
        console.log(finalVal)
        result.innerHTML = finalVal;

    }else if (outputNumberBase == 10){
        input = (userInput.value);
        input = input.toString();
        finalVal = restToDec(input,inputNumberBase);
        result.innerHTML = finalVal;
        console.log('case-2 activated')
    }else if (inputNumberBase !=  10 && outputNumberBase != 10){
        input = (userInput.value);
        input = input.toString();
        finalVal = restToDec(input,inputNumberBase);
        input = finalVal;
        finalVal = decToRest(input,outputNumberBase);
        result.innerHTML = finalVal;
        console.log('case-2 activated')
    }  
})












from.addEventListener('change',(e)=>{

    userInput.value = '';
    result.innerHTML = '';

    let base = e.target.value;
    switch (base){
        case '10':
            validationArr = JSON.parse(JSON.stringify(allowed_10));
            break;
        case '2':
            validationArr = JSON.parse(JSON.stringify(allowed_2));
            break;
        case '16':
            validationArr = JSON.parse(JSON.stringify(allowed_16));
            break;
        case '8':
            validationArr = JSON.parse(JSON.stringify(allowed_8));
            break;
        default:
            console.log('no value found')        
    }
})


userInput.addEventListener('keypress', (e)=>{

    let entry = String.fromCharCode(e.keyCode).toUpperCase();

    if(!validationArr.includes(entry)){
        console.log(entry, 'char not allowed')
        e.preventDefault();
    }
})





