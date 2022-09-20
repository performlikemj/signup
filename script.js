// Script to add text and red border when password fields do not match
let match = true;
let para = document.createElement('p');
para.innerText = '* Passwords do not match';
para.style.color = 'red';
// Compare the password fields function and add red border and text
function compare(str1, str2) {
    if (para.parentNode === null && str1 != str2) {
        const passwordWrapper = document.querySelector('form');
        passwordWrapper.appendChild(para);
    }
    if (para.parentNode != null && str1 === str2) {
        para.parentNode.removeChild(para);
    }

    // if (str1 != str2) {

    //     match = false;
    //     const passwordWrapper = document.querySelector('form');
    //     passwordWrapper.appendChild(para);
    // } 
    // if (str1 === str2) {
    //     para.remove();

    // }
}

let str1 = '';
let str2 = '';

function concatPass1(e) {
    console.log(e);
    str1 += e.key;
    compare(str1, str2);
}

function concatPass2(e) {
    str2 += e.key;
    compare(str1, str2);
}

const passwordInput = document.querySelector('input[name=password]');
const confirmPasswordInput = document.querySelector('input[name=confirm-password]');
passwordInput.addEventListener('keyup', concatPass1);
confirmPasswordInput.addEventListener('keyup', concatPass2);