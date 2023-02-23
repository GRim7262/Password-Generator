const passwordEle = document.getElementById('password');
const copyEle = document.getElementById('copy');
const lengthEle = document.getElementById('length');
const upperEle = document.getElementById('upper');
const lowerEle = document.getElementById('lower');
const numberEle = document.getElementById('number');
const symbolEle = document.getElementById('symbol');
const generateEle = document.getElementById('generate');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '~`!@#$%^&*()_-+={[}]|;"<,>.?/';

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    const len = lengthEle.value;

    let password = "";

    for(let i = 0; i < len; i++) {
        const x = generateX();
        password += x;
    }

    passwordEle.innerText = password;
}

function generateX() {
    const xs = []; 
    if(upperEle.checked) {
        xs.push(getUppercase());
    }

    if(lowerEle.checked) {
        xs.push(getLowercase());
    }

    if(numberEle.checked) {
        xs.push(getNumber());
    }

    if(symbolEle.checked) {
        xs.push(getSymbol());
    }

    if(xs.length == 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

generateEle.addEventListener('click', generatePassword);

copyEle.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = passwordEle.innerText;

    if(!password) { 
        return; 
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Copied to clipboard');
});