import cipher from './cipher.js';

                /* Manipulação de elementos DOM */

/*Criei as variáveis e peguei os elementos HTML por ID*/
let inputText = document.getElementById("text");
let inputOffset = document.getElementById("offset");
let buttonCipher = document.getElementById("buttonOne");
let buttonDecipher = document.getElementById("buttonTwo");

/*Funções que chamam o objeto cipher e colocam o return dentro do HTML*/
function callEncode() {
    document.getElementById("resposta").innerHTML = cipher.encode(Number(inputOffset.value), inputText.value);
}

function callDecode() {
    document.getElementById("resposta").innerHTML = cipher.decode(Number(inputOffset.value), inputText.value);
}

/*Evento que é disparado ao clicar nos botões*/
buttonCipher.addEventListener("click", callEncode);
buttonDecipher.addEventListener("click", callDecode);



/* usar animação para a caixa de resposta (easy out) */
//keyframe animação css