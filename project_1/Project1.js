// PART 3
// caesarEncrypt accepts three parameters, and returns the Caesar Cipher encrypted text
const caesarEncrypt = (clearText, shiftNum, shiftLeft) => {
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
    if (shiftLeft == false) { // check to see if shiftLeft is true/false
        arr = arr.map(function (elem) { // use map() to apply each conditional to each element in the array
            if (elem == 32) { // ASCII code 32 is equal to a 'space'; doesn't get shifted
                arr2.push(elem)
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
                (elem);
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
    } else if (shiftLeft == true) {
        arr = arr.map(function (elem) {
            if (elem == 32) {
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
            }
        })
        encrypt = String.fromCharCode.apply(String, arr2); // convert the ASCII code to their corresponding characters, add to encrypt
        return encrypt;
    }
}

// PART 4
// output the caesar cipher substituion alphabet
const caesarSubstitutionAlphabet = (shiftNum, shiftLeft) => {
    // declaring variables
    let original = '',
        shifted = [],
        first = '!',
        last = '~',
        output = '',
        val = [...Array(shiftNum).keys()].length
    if (typeof (shiftNum) != "number") {
        return "shiftNum must be a number"
    }
    
    for (var i = first.charCodeAt(0); i <= last.charCodeAt(0); i++) {// loop through ASCII table 33 - 126
        var container = document.querySelector("#container");// determine where the div elements will be created
        var line = document.createElement('div');// create the div
        original = String.fromCharCode(i);// get the corresponding ASCII character and assign to 'original'
        line.innerHTML = `${original}=`;// fill in the div space using a template string
        console.log(line)
        container.appendChild(line);// append the div to the div element
        if (shiftLeft == true) {
            shifted.push(i);
            shifted = shifted.map(function (i) {
                if (i >= 33 && i <= 47) {
                    output = String.fromCharCode.apply(String, shifted);
                    line.innerHTML = `${original} = ${output}`;
                    container.appendChild(line);
                    shifted.pop();
                } else if (i >= 48 && i <= 57) {
                    let asciiNum = Array.from(new Array(10), (x, i) => i + 48);
                    let pos = asciiNum.indexOf(i);
                    for (let x = 0; x < val; x++) {
                        asciiNum.unshift(asciiNum.pop());
                    }
                    let elem2 = asciiNum[pos];
                    let foo = shifted.filter(x => x != undefined);
                    foo.unshift(elem2);
                    foo.pop();
                    output = String.fromCharCode.apply(String, foo);
                    line.innerHTML = `${original} = ${output}`;
                    container.appendChild(line);
                    foo.pop();
                } else if (i >= 58 && i <= 64) {
                    output = String.fromCharCode.apply(String, shifted);
                    line.innerHTML = `${original} = ${output}`;
                    container.appendChild(line);
                    shifted.pop();
                } else if (i >= 65 && i <= 90) {
                    let asciiUpper = Array.from(new Array(26), (x, i) => i + 65);
                    let pos = asciiUpper.indexOf(i);
                    for (let x = 0; x < val; x++) {
                        asciiUpper.unshift(asciiUpper.pop());
                    }
                    let elem2 = asciiUpper[pos];
                    let foo = shifted.filter(x => x != undefined);
                    foo.unshift(elem2);
                    foo.pop();
                    output = String.fromCharCode.apply(String, foo);
                    line.innerHTML = `${original} = ${output}`;
                    container.appendChild(line);
                    foo.pop();
                } else if (i >= 91 && i <= 96) {
                    output = String.fromCharCode.apply(String, shifted);
                    line.innerHTML = `${original} = ${output}`;
                    container.appendChild(line);
                    shifted.pop();
                } else if (i >= 97 && i <= 122) {
                    let asciiLower = Array.from(new Array(26), (x, i) => i + 97);
                    let pos = asciiLower.indexOf(i);
                    for (let x = 0; x < val; x++) {
                        asciiLower.unshift(asciiLower.pop());
                    }
                    let elem2 = asciiLower[pos];
                    let foo = shifted.filter(x => x != undefined);
                    foo.unshift(elem2);
                    foo.pop();
                    output = String.fromCharCode.apply(String, foo);
                    line.innerHTML = `${original} = ${output}`;
                    foo.pop();
                } else if (i >= 123 && i <= 126) {
                    output = String.fromCharCode.apply(String, shifted);
                    line.innerHTML = `${original} = ${output}`;
                    container.appendChild(line);
                    shifted.pop();
                }
            })
        } else if (shiftLeft == false) {
            shifted.push(i);
            shifted = shifted.map(function (i) {
                if (i >= 33 && i <= 47) {
                    output = String.fromCharCode.apply(String, shifted);
                    line.innerHTML = `${original} = ${output}`;
                    container.appendChild(line);
                    shifted.pop();
                } else if (i >= 48 && i <= 57) {
                    let asciiNum = Array.from(new Array(10), (x, i) => i + 48);
                    let pos = asciiNum.indexOf(i);
                    for (let x = 0; x < val; x++) {
                        asciiNum.push(asciiNum.shift())
                    }
                    let elem2 = asciiNum[pos];
                    let foo = shifted.filter(x => x != undefined);
                    foo.unshift(elem2);
                    foo.pop();
                    output = String.fromCharCode.apply(String, foo);
                    line.innerHTML = `${original} = ${output}`;
                    container.appendChild(line);
                    foo.pop();
                } else if (i >= 58 && i <= 64) {
                    output = String.fromCharCode.apply(String, shifted);
                    line.innerHTML = `${original} = ${output}`;
                    container.appendChild(line);
                    shifted.pop();
                } else if (i >= 65 && i <= 90) {
                    let asciiUpper = Array.from(new Array(26), (x, i) => i + 65);
                    let pos = asciiUpper.indexOf(i);
                    for (let x = 0; x < val; x++) {
                        asciiUpper.push(asciiUpper.shift());
                    }
                    let elem2 = asciiUpper[pos];
                    let foo = shifted.filter(x => x != undefined);
                    foo.unshift(elem2);
                    foo.pop();
                    output = String.fromCharCode.apply(String, foo);
                    line.innerHTML = `${original} = ${output}`;
                    container.appendChild(line);
                    foo.pop();
                } else if (i >= 91 && i <= 96) {
                    output = String.fromCharCode.apply(String, shifted);
                    line.innerHTML = `${original} = ${output}`;
                    container.appendChild(line);
                    shifted.pop();
                } else if (i >= 97 && i <= 122) {
                    let asciiLower = Array.from(new Array(26), (x, i) => i + 97);
                    let pos = asciiLower.indexOf(i);
                    for (let x = 0; x < val; x++) {
                        asciiLower.push(asciiLower.shift());
                    }
                    let elem2 = asciiLower[pos];
                    let foo = shifted.filter(x => x != undefined);
                    foo.unshift(elem2);
                    foo.pop();
                    output = String.fromCharCode.apply(String, foo);
                    line.innerHTML = `${original} = ${output}`;
                    container.appendChild(line);
                    foo.pop();
                } else if (i >= 123 && i <= 126) {
                    output = String.fromCharCode.apply(String, shifted);
                    line.innerHTML = `${original} = ${output}`;
                    container.appendChild(line);
                    shifted.pop();
                }
            })
        }
    }
}

// PART 5
const defaultInput = "Cost: $19.99";

// clearInput handles the clear button and clears the input box
function clearInput() {
    document.querySelector("#inputText").value = '';
    document.querySelector("#inputText").dispatchEvent(new Event('input'));
}

// encryptClearText encrypts the defaultInput and displays it on the page when the window loads
function encryptClearText(evt) {
    document.querySelector("#outputText").innerHTML = evt.target.value;
    let shiftValue = document.querySelector("#shiftValue").value;
    if (document.querySelector("#checkbox").checked == true) {
        var shiftDirect = true;
    } else if (document.querySelector("#checkbox").checked == false) {
        var shiftDirect = false;
    }
    let ans = caesarEncrypt(evt.target.value, shiftValue, shiftDirect);
    document.querySelector("#outputText").innerHTML = ans;
}

// reloadAlphabet dynamically reflects the substitution alphabet on the page based on the values of the slider and/or checkbox
function reloadAlphabet() {
    let shiftValue = parseInt(document.querySelector("#shiftValue").value);
    let alphabet = document.querySelector("#container");
    if (document.querySelector("#checkbox").checked == true) {
        while (alphabet.firstChild) {
            alphabet.removeChild(alphabet.lastChild);
        }
        caesarSubstitutionAlphabet(shiftValue, true);
    } else if (document.querySelector("#checkbox").checked == false) {
        while (alphabet.firstChild) {
            alphabet.removeChild(alphabet.lastChild);
        }
        caesarSubstitutionAlphabet(shiftValue, false);
    }
}

// changeCipherText dynamically changes the ciphertext if the user adjusts the slider and/or checks/unchecks shiftLeft
function changeCipherText(evt) {
    let shiftValue = parseInt(document.querySelector("#shiftValue").value);
    document.querySelector("#inputText").innerHTML = evt.target.value;
    if (document.querySelector("#checkbox").checked == true) {
        caesarEncrypt(evt.target.value, shiftValue, true)
    } else if (document.querySelector("#checkbox").checked == false) {
        caesarEncrypt(evt.target.value, shiftValue, false)
    }
}

// handles events for when the page loads
window.onload = () => {
    document.querySelector("#ClearButton").addEventListener('click', (evt) => {
        clearInput();
    })
    const sampleInputRef = document.querySelector("#inputText");
    sampleInputRef.addEventListener('input', encryptClearText);
    sampleInputRef.value = defaultInput;
    sampleInputRef.dispatchEvent(new Event('input'));
    caesarSubstitutionAlphabet(2, true);
}

// handles events for when the user changes an input on the page
window.oninput = () => {
    const alphabet = document.querySelector("#container");
    alphabet.addEventListener('input', reloadAlphabet);
    alphabet.dispatchEvent(new Event('input'));
    const cipherText = document.querySelector("#inputText");
    cipherText.addEventListener('input', changeCipherText);
    cipherText.dispatchEvent(new Event('input'));
}