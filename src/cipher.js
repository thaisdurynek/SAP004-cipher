/* Parte lógica */
const cipher = {
    encode: function encode(inputOffset, inputText) {
        /*Declaração de variáveis*/
        let encoded = ""; 
        let calcEncode = 0;
        let codeArray = [];
        /*TypeError de acordo com os testes*/
        if (typeof inputText!=="string" || typeof inputOffset!=="number" || inputOffset<=0){
            throw new TypeError();
        } 
        /* O for é responsável por executar os ifs letra a letra do inputText */
        for (let cont=0; cont < inputText.length; cont++) {
            codeArray.push(inputText.charCodeAt(cont));
            if (codeArray[cont] >= 65 && codeArray[cont] <= 90) { //Intervalo na tabela ASCII para letras Maiúsculas
                calcEncode = ((codeArray[cont] - 65 + inputOffset)%26 + 65) //Calculo com os limites inferiores do intervalo para cifrar
                encoded += String.fromCharCode(calcEncode);
            }
            else if (codeArray[cont] >= 97 && codeArray[cont] <= 122) { //Intervalo para letras minúsculas
                calcEncode = ((codeArray[cont] - 97 + inputOffset)%26 + 97)
                encoded += String.fromCharCode(calcEncode);
            }
            else { //caracteres especiais
                encoded += String.fromCharCode(codeArray[cont]);
            }
        }
        return encoded;
    }, 

    decode: function decode(inputOffset, inputText) {
        /* Declaração das variáveis */
        let decoded = "";
        let calcDecode = 0;
        let decodeArray = [];
        /*TypeError de acordo com os testes (o teste para a função decode foi criado)*/
        if (typeof inputText!=="string" || typeof inputOffset!=="number" || inputOffset==0){ 
            throw new TypeError();
        }
        /* O for é responsável por executar os ifs letra a letra do inputText */
        for (let i=0; i < inputText.length; i++) {
            decodeArray.push(inputText.charCodeAt(i));
            if (decodeArray[i] >= 65 && decodeArray[i] <= 90) { //Intervalo tabela ASCII para maiúsculas
                calcDecode = ((decodeArray[i] - 90 - inputOffset)%26 + 90) //Calculo para decifrar com os limites superiores do intervalo
                decoded += String.fromCharCode(calcDecode);
            }
            else if (decodeArray[i] >= 97 && decodeArray[i] <= 122) { //Intervalo tabela ASCII para minúsculas
                calcDecode = ((decodeArray[i] - 122 - inputOffset)%26 + 122)
                decoded += String.fromCharCode(calcDecode);
            }
            else { 
                decoded += String.fromCharCode(decodeArray[i]);
            }
        }
        return decoded;
    }

};

export default cipher;

