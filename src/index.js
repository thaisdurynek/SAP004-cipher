import cipher from './cipher.js';

console.log(cipher);


                /* BOTÃO DO TEXTO */
let textButton = document.getElementById("buttonText"); //peguei o botao do HTML e add um eventListener que chama a função text ao clicar
textButton.addEventListener('click', text)

function text(){
    let inputText = document.getElementById("message").value; //criei uma função que pega o valor da tag
    alert(inputText)
}


                /* BOTÃO DO DESLOCAMENTO */
let textOffset = document.getElementById("buttonOffset");
textOffset.addEventListener('click', offset)

function offset(){
    let inputOffset = document.getElementById("offset").value;
    alert(inputOffset);
}

                /* BOTÃO DE CIPHER E DECIPHER */
/* Criei duas variáveis para pegar os elementos botões de Cifrar e Decifrar.
Utilizei as variáveis para fazer um eventListener. Dentro de cada função eu vou
tentar chamar as funções cipher e decipher no chipher.js */
           
let buttonCipher = document.getElementById("buttonOne");
let buttonDecipher = document.getElementById("buttonTwo");
buttonCipher.addEventListener('click', function cipher(){
    let cifrarBotao = document.write("você escolheu cifrar");
    return cifrarBotao;
})
buttonDecipher.addEventListener('click', function decipher(){
    let decifrarBotao = document.write("você escolheu decifrar");
    return decifrarBotao;
})

