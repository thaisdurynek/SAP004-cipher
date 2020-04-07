import cipher from './cipher.js';

                /* BOTÃO DE CIPHER E DECIPHER */
/* Criei duas variáveis para pegar os elementos botões de Cifrar e Decifrar.
Utilizei as variáveis para fazer um eventListener. Dentro de cada função eu vou
tentar chamar as funções cipher e decipher no chipher.js */


let inputText = document.getElementById("text");
let inputOffset = document.getElementById("offset");
let buttonCipher = document.getElementById("buttonOne");
let buttonDecipher = document.getElementById("buttonTwo");

buttonCipher.addEventListener("click", callEncode);
buttonDecipher.addEventListener("click", callDecode);

function callEncode() {
    document.getElementById("resposta").innerHTML = cipher.cifrar(inputText.value, Number(inputOffset.value));
}

function callDecode() {
    document.getElementById("resposta").innerHTML = cipher.decifrar(inputText.value, Number(inputOffset.value));
}
   

/* usar animação para a caixa de resposta (easy out) */
//keyframe animação css