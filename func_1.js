

//  From decimal to Binary/Octal/Hexa;

export function decToRest(input,outputNumberBase){
    
    let output = [];
    let quo;
    let rem;

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

        input = Math.floor(input/outputNumberBase);

        console.log('quo:', quo)
        console.log('rem:', rem)
        console.log('out:', output)
    }
    output = output.join('')
    return output
}



