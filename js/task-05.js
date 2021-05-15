// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const nameInput=document.querySelector('#name-input');
const nameOutput=document.querySelector('#name-output');

function changeName(event){
    if( nameInput.value===''){
        nameOutput.textContent=' Незнакомец';
    }
    else{
    nameOutput.textContent=event.currentTarget.value;
    }
}
nameInput.addEventListener('input',changeName);
