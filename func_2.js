//  hex/octa/binary to decima


export function restToDec(input, inputNumberBase){

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








