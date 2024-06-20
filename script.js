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


convert.addEventListener('click', ()=>{
    inputNumberBase = parseInt(from.value);
    outputNumberBase = parseInt(to.value);

    
    if (inputNumberBase == 10){
        input = (userInput.value);
        finalVal = decToRest(input,outputNumberBase);
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


