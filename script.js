// let button= document.querySelectorAll(button);

const input = document.getElementById('screen');
// console.log(input)
// const clickded = ()=>{
//     console.log("hey");
// }
// input.addEventListener('click', clickded);
const ac = document.getElementById('ac');
ac.addEventListener('click',()=>{
    input.value = "";
})
const c = document.getElementById('c');
c.addEventListener('click',()=>{
    input.value = input.value.toString().slice(0,-1);
})
const slash = document.getElementById('slash');
slash.addEventListener('click',()=>{
    input.value += "/";
})
const star = document.getElementById('star');
star.addEventListener('click',()=>{
    input.value += '*'
})
const seven = document.getElementById('seven');
seven.addEventListener('click',()=>{
    input.value += "7";
})
const eight = document.getElementById('eight');
eight.addEventListener('click',()=>{
    input.value += "8";
})
const nine = document.getElementById('nine');
nine.addEventListener('click',()=>{
    input.value += "9";
})
const minus = document.getElementById('minus');
minus.addEventListener('click',()=>{
    input.value += "-";
})
const four = document.getElementById('four');
four.addEventListener('click',()=>{
    input.value += "4";
})
const three = document.getElementById('three');
three.addEventListener('click',()=>{
    input.value += "3";
})
const two = document.getElementById('two');
two.addEventListener('click',()=>{
    input.value += "2";
})
const one = document.getElementById('one');
one.addEventListener('click',()=>{
    input.value += "1";
})
const equal = document.getElementById('equal');
equal.addEventListener('click',()=>{
    input.value = eval(input.value);
})
const zero = document.getElementById('zero');
zero.addEventListener('click',()=>{
    input.value += "0";
})
const right = document.getElementById('right');
right.addEventListener('click',()=>{
    input.value += "(";
})
const left = document.getElementById('left');
left.addEventListener('click',()=>{
    input.value += ")";
})
const plus = document.getElementById('plus');
plus.addEventListener('click',()=>{
    input.value += "+";
})
const five = document.getElementById('five');
five.addEventListener('click',()=>{
    input.value += "5";
})
const six = document.getElementById('six');
six.addEventListener('click',()=>{
    input.value += "6";
})
const dblzero = document.getElementById('dblzero');
dblzero.addEventListener('click',()=>{
    input.value += ".";
})