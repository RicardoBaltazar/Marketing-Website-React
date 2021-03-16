const input = document.querySelector('#input');
let message = document.querySelector('#message');
const form = document.querySelector('#form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    if(input.value != ''){
        message.innerHTML = input.value;
        input.value = '';
    } else {
        message.innerHTML = 'Valor Inválido';
        input.value = '';
        setTimeout(function(){
            message.innerHTML = '';
        }, 3000)
    }
})