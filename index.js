const input1 = document.getElementById('input_1');
const input2 = document.getElementById('input_2');
const Btn1 = document.getElementById('btn1');
const Btn2 = document.getElementById('btn2');
const Btn3 = document.getElementById('btn3');
const Btn4 = document.getElementById('btn4');
const value = document.getElementById("value");
const action =document.getElementById('action');
let qiymat ;

Btn1.addEventListener('click', ()=>{
    qiymat=+input1.value + +input2.value;
    action.innerHTML=`
    +
    `;
    value.innerHTML=`
    ${qiymat}
    `
})
Btn2.addEventListener('click', ()=>{
    qiymat=+input1.value - +input2.value;
    action.innerHTML=`
    -
    `;
    value.innerHTML=`
    ${qiymat}
    `
})
Btn3.addEventListener('click', ()=>{
    qiymat=+input1.value * +input2.value;
    action.innerHTML=`
    *
    `;
    value.innerHTML=`
    ${qiymat}
    `
})
Btn4.addEventListener('click', ()=>{
    qiymat=+input1.value / +input2.value;
    action.innerHTML=`
    /
    `;
    value.innerHTML=`
    ${qiymat}
    `
})

