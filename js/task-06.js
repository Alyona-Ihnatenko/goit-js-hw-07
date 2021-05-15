// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid.

const inputCheck=document.querySelector('#validation-input');
let lengthInput=inputCheck.getAttribute('data-length');
let numberInput = parseInt(lengthInput);

inputCheck.addEventListener('input',inputNumber);
function inputNumber(event){

    
    if(event.currentTarget.value.length<=numberInput) {
        inputCheck.classList.add('valid');
        inputCheck.classList.remove('invalid');
    }
    if( event.currentTarget.value.length === 0) {
        inputCheck.classList.remove('valid');
        inputCheck.classList.remove('invalid');
    }
    if(event.currentTarget.value.length>numberInput) {
        inputCheck.classList.add('invalid');
        inputCheck.classList.remove('valid');
    }
}

