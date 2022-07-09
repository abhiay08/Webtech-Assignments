let btnConvet = document.querySelector('button');
let input = document.querySelector('input');
let output = document.querySelector('h1');

btnConvet.addEventListener('click', () => {
    output.innerText = numberToWords.toWords(input.value);
});
// Created By Abhi Ay
