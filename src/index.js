import cipher from './cipher.js';

                /* BOTÃO DE CIPHER E DECIPHER */
/* Criei duas variáveis para pegar os elementos botões de Cifrar e Decifrar.
Utilizei as variáveis para fazer um eventListener. Dentro de cada função eu vou
tentar chamar as funções cipher e decipher no chipher.js */

const inputText = document.getElementById("message").value;        
const stringLength = Number(inputText.length);
const inputOffset = Number(document.getElementById("offset").value);

function callEncode() {
    document.getElementById("resposta").innerHTML = cipher.cifrar(inputText, stringLength, inputOffset);
}

function callDecode() {
    document.getElementById("resposta").innerHTML = cipher.decifrar(inputText, stringLength, inputOffset);
}
   
const buttonCipher = document.getElementById("buttonOne");
buttonCipher.addEventListener("click", callEncode);

const buttonDecipher = document.getElementById("buttonTwo");
buttonDecipher.addEventListener("click", callDecode);

/* usar animação para a caixa de resposta (easy out) */
//keyframe animação css