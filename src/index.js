import cipher from './cipher.js';

                /* Manipulação de elementos DOM */

/*Criei as variáveis e peguei os elementos HTML por ID*/
let inputText = document.getElementById("text");
let inputOffset = document.getElementById("offset");
let buttonCipher = document.getElementById("buttonOne");
let buttonDecipher = document.getElementById("buttonTwo");


/*Funções que chamam o objeto cipher e colocam o return dentro do HTML*/
function callEncode(event) {
    document.getElementById("resposta").innerHTML = cipher.encode(parseInt(inputOffset.value), inputText.value);
    event.preventDefault();
} 

function callDecode(event) {
    document.getElementById("resposta").innerHTML = cipher.decode(parseInt(inputOffset.value), inputText.value);
    event.preventDefault();
}


/*Evento que é disparado ao clicar nos botões*/
buttonCipher.addEventListener("click", callEncode);
buttonDecipher.addEventListener("click", callDecode);


/* usar animação para a caixa de resposta (easy out) */
/*keyframe animação css*/