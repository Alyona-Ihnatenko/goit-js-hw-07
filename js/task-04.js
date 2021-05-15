// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//     Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//     Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//     Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const valueEl=document.querySelector('#value');
const btnIncrem=document.querySelector('[data-action="increment"]');
const btnDecr=document.querySelector('[ data-action="decrement"]');
let counterValue=0;
function increment(){
    counterValue+=1;
    valueEl.textContent=counterValue+=1;
}
function decrement(){
    counterValue-=1;
    valueEl.textContent=  counterValue-=1;
}
btnIncrem.addEventListener('click',increment);
btnDecr.addEventListener('click',decrement);