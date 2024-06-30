let from = document.getElementById('from');
let to = document.getElementById('to');
let userInput = document.getElementById('input');
let result = document.getElementById('result');
let convert = document.getElementById('convert');
let solutionLayout = document.getElementById('solution-boxes');
let initialBox = document.getElementById('initial');

let inputNumberBase;
let outputNumberBase;
let finalVal;
let input;

let solution = true

let allowed_16 = ['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9'];
let allowed_10 = ['0','1','2','3','4','5','6','7','8','9'];
let allowed_8 = ['0','1','2','3','4','5','6','7'];
let allowed_2 = ['0','1'];

let validationArr = JSON.parse(JSON.stringify(allowed_10));



function decToRest(input,outputNumberBase){
    
    let output = [];
    let quo;
    let rem;
    let count = 2
    initialBox.innerText = input
    while (solutionLayout.children.length>2) {
        solutionLayout.removeChild(solutionLayout.lastChild);
    }
    
    while(input>=outputNumberBase){
        quo = Math.floor(input/outputNumberBase);
        rem = input % outputNumberBase

        if (rem > 9 && outputNumberBase == 16){
                    rem == 10? rem = 'A':null
                    rem == 11? rem = 'B':null
                    rem == 12? rem = 'C':null
                    rem == 13? rem = 'D':null
                    rem == 14? rem = 'E':null
                    rem == 15? rem = 'F':null
                }

        output.unshift(rem)
        quo <outputNumberBase? output.unshift(quo):null
        if(solution){
            for (let i=0; i<2; i++){
                let box = document.createElement('div')
                solutionLayout.appendChild(box)
                count%2 == 0? box.classList.add('w-10','border-b-2', 'border-r-2', 'border-white', 'flex', 'justify-center', 
                             'items-center','text-white', 'text-xl', 'font-bold') : 
                              box.classList.add('w-44','border-b-2', 'border-white', 'flex', 'justify-center', 'items-center',
                              'text-white', 'text-xl', 'font-bold', 'pl-4',)
                count++
                switch(i){
                    case 0:
                        box.innerText = outputNumberBase
                        break;
                    case 1:    
                        box.innerText = quo + ' ' + '-' + rem
                        break;
                }
            }
        }else{
            solutionLayout.innerHTML = ''
        }
        input = Math.floor(input/outputNumberBase);
        // console.log('quo:', quo)
        // console.log('rem:', rem)
        // console.log('out:', output)
    }
    output = output.join('')
    return output
}



function restToDec(input, inputNumberBase){

    let output = 0
    let length = input.split('').length - 1;
    let alphs = ['A','B','C','D','E','F','a','b','c','d','e','f'];

    for (let no of input.toString().split('')){
        
        if (inputNumberBase == 16){
            if (alphs.includes(no)){
                no == 'A'? no = 10:null
                no == 'B'? no = 11:null
                no == 'C'? no = 12:null
                no == 'D'? no = 13:null
                no == 'E'? no = 14:null
                no == 'F'? no = 15:null
                no == 'a'? no = 10:null
                no == 'b'? no = 11:null
                no == 'c'? no = 12:null
                no == 'd'? no = 13:null
                no == 'e'? no = 14:null
                no == 'f'? no = 15:null
                console.log('reached here')
            }
        }
        output += no*(inputNumberBase**length);
        length--;
    }
    return output
}



userInput.addEventListener('input', ()=>{
    
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
    }else if (inputNumberBase !=  10 && outputNumberBase != 10){
        input = (userInput.value);
        input = input.toString();
        finalVal = restToDec(input,inputNumberBase);
        input = finalVal;
        finalVal = decToRest(input,outputNumberBase);
        result.innerHTML = finalVal;
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



convert.addEventListener('click',()=>{
    inputNumberBase == 10? Solution():null
})









