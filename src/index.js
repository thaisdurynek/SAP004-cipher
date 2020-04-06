import cipher from './cipher.js';

console.log(cipher);

                /* BOTÃO DE CIPHER E DECIPHER */
/* Criei duas variáveis para pegar os elementos botões de Cifrar e Decifrar.
Utilizei as variáveis para fazer um eventListener. Dentro de cada função eu vou
tentar chamar as funções cipher e decipher no chipher.js */
   
let buttonCipher = document.getElementById("buttonOne");
buttonCipher.addEventListener('click', function cipherCall(){
    let inputText = document.getElementById("message").value;
    let stringLength = Number(inputText.length);
    let inputOffset = Number(document.getElementById("offset").value);
    for (let i=0; i < stringLength; i++) {
        let calcEncode = ((inputText.charCodeAt(i) - 65 + inputOffset)% 26 + 65);
        let cifrado = String.fromCharCode(calcEncode);
        document.write(cifrado); 
      }
});

let buttonDecipher = document.getElementById("buttonTwo");
buttonDecipher.addEventListener('click', function decipherCall(){
    let inputText = document.getElementById("message").value;
    let stringLength = Number(inputText.length);
    let inputOffset = Number(document.getElementById("offset").value);
    for (let cont=0; cont < stringLength; cont++) {
        let calcDecode = ((inputText.charCodeAt(cont) - 65 - inputOffset)% 26 + 65);
        let decifrado = String.fromCharCode(calcDecode);
        document.write(decifrado); 
      }
})

/* usar animação para a caixa de resposta (easy out) */