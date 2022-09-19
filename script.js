// Script to add text and red border when password fields do not match

// Compare the password fields function and add red border and text
function compare(str1, str2) {
    if (str1 != str2) {
        const passwordWrapper = document.querySelector('form');
        let para = document.createElement('p');
        para.innerText = '* Passwords do not match';
        para.style.color = 'red';
        passwordWrapper.appendChild(para);

    }
}