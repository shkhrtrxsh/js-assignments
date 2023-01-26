const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
  let span = resultEl;
  let text = span.innerText;

  const el = document.createElement('textarea');
  el.value = text;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  alert("Text copied to clipboard: " + text);
})

generateEl.addEventListener('click', function(event){
    
    let ans=generatePassword(lowercaseEl, uppercaseEl, numbersEl, symbolsEl, lengthEl.value);
    resultEl.innerText=""+ans+"";
})

function generatePassword(lower, upper, number, symbol, length) {
    let password = "";
    let characters = "";
    if(upper.checked){
        characters+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
  if(lower.checked){
    characters+="abcdefghijklmnopqrstuvwxyz";
  }
  if(number.checked){
    characters+="0123456789";
  }
  if(symbol.checked){
characters+="!@#$%^&*()_+-=[]{}|;':,.<>/?";
  }
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

function getRandomLower() {
    let password = "";
  let characters = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
}

function getRandomUpper() {
    let password = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
}

function getRandomNumber() {
    let password = "";
  let characters = "0123456789";

  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
}

function getRandomSymbol() {
    let password = "";
  let characters = "!@#$%^&*()_+-=[]{}|;':,.<>/?";

  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
}