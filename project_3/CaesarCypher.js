export function caesarEncrypt (clearText, shiftNum, shiftLeft) {
    // declaring variables
    let result = '',
        arr = [],
        arr2 = [],
        encrypt = '';
    clearText = clearText.split(''); // split the string into array elements
    for (var elem of clearText) { // loop over each element of the array
        result = elem.charCodeAt(0); // get the ASCII code of each element in the array
        arr.push(result); // put the corresponding ASCII code into a new array
    }
    if (shiftLeft === false) { // check to see if shiftLeft is true/false
        arr = arr.map(function (elem) { // use map() to apply each conditional to each element in the array
            if (elem === 32) { // ASCII code 32 is equal to a 'space'; doesn't get shifted
                arr2.push(elem);
            } else if (elem >= 33 && elem <= 47) { // ASCII code symbols 33 - 47 do not get shifted
                arr2.push(elem);
            } else if (elem >= 48 && elem <= 57) { // ASCII code characters are numbers 0-9; must be shifted if applicable
                let asciiNum = Array.from(new Array(10), (x, i) => i + 48); // declare array of ASCII numbers (corresponds to 48-57)
                let pos = asciiNum.indexOf(elem); // declare variable 'pos' to hold the index of the element 'elem,' taken from the array 'asciiNum'
                for (let i = 0; i < shiftNum; i++) { // loop through the array 'one-less times' than the value of shiftNum
                    asciiNum.push(asciiNum.shift()); // remove first element from array, then add it to the end of it
                }
                let elem2 = asciiNum[pos]; // declare new variable to hold the value of the element from the shifted array 'asciiNum' given the index from 'pos'
                arr2.push(elem2); // add the value to the end of the array
            } else if (elem >= 58 && elem <= 64) { // ASCII code symbols 58 - 64 do not get shifted
                arr2.push(elem);
            } else if (elem >= 65 && elem <= 90) { // ASCII code characters are uppercase letters; must be shifted if applicable
                let asciiUpper = Array.from(new Array(26), (x, i) => i + 65); // similar methodology to handling ASCII code characters 48 - 57
                let pos = asciiUpper.indexOf(elem);
                for (let i = 0; i < shiftNum; i++) {
                    asciiUpper.push(asciiUpper.shift());
                }
                let elem2 = asciiUpper[pos];
                arr2.push(elem2);
            } else if (elem >= 91 && elem <= 96) { // ASCII code symbols 91 - 96 do not get shifted
                arr2.push(elem);
            } else if (elem >= 97 && elem <= 122) { // ASCII code characters are lowercase letters; must be shifted if applicable
                let asciiLower = Array.from(new Array(26), (x, i) => i + 97); // similar methodology to handling ASCII code characters 48 - 57 and 65 - 90
                let pos = asciiLower.indexOf(elem);
                for (let i = 0; i < shiftNum; i++) {
                    asciiLower.push(asciiLower.shift());
                }
                let elem2 = asciiLower[pos];
                arr2.push(elem2);
            } else if (elem >= 123 && elem <= 126) {
                arr2.push(elem);
            }
        })
        encrypt = String.fromCharCode.apply(String, arr2); // convert the ASCII code to their corresponding characters, add to 'encrypt,' and then return it
        return encrypt;
    } else if (shiftLeft === true) {
        arr = arr.map(function (elem) {
            if (elem === 32) {
                arr2.push(elem)
            } else if (elem >= 33 && elem <= 47) {
                arr2.push(elem);
            } else if (elem >= 48 && elem <= 57) {
                let asciiNum = Array.from(new Array(10), (x, i) => i + 48);
                let pos = asciiNum.indexOf(elem);
                for (let i = 0; i < shiftNum; i++) {
                    asciiNum.unshift(asciiNum.pop());
                }
                let elem2 = asciiNum[pos];
                arr2.push(elem2);
            } else if (elem >= 58 && elem <= 64) {
                arr2.push(elem);
            } else if (elem >= 65 && elem <= 90) {
                let asciiUpper = Array.from(new Array(26), (x, i) => i + 65);
                let pos = asciiUpper.indexOf(elem);
                for (let i = 0; i < shiftNum; i++) {
                    asciiUpper.unshift(asciiUpper.pop());
                }
                let elem2 = asciiUpper[pos];
                arr2.push(elem2);
            } else if (elem >= 91 && elem <= 96) {
                arr2.push(elem);
            } else if (elem >= 97 && elem <= 122) {
                let asciiLower = Array.from(new Array(26), (x, i) => i + 97);
                let pos = asciiLower.indexOf(elem);
                for (let i = 0; i < shiftNum; i++) {
                    asciiLower.unshift(asciiLower.pop());
                }
                let elem2 = asciiLower[pos];
                arr2.push(elem2);
            } else if (elem >= 123 && elem <= 126) {
                arr2.push(elem);
            }
        })
        encrypt = String.fromCharCode.apply(String, arr2); // convert the ASCII code to their corresponding characters, add to encrypt
        return encrypt;
    }
}

