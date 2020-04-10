const cipher = {
    encode: function encode(inputOffset, inputText) {
        let cipherUpperCase = inputText.toUpperCase(); //o toUpperCase tá fazendo meus testes typeError passarem
        let cifrado = ""; 
        let calcEncode = 0;
        for (let i=0; i < cipherUpperCase.length; i++) { 
            calcEncode = ((cipherUpperCase.charCodeAt(i) - 65 + inputOffset)% 26 + 65);
            cifrado += String.fromCharCode(calcEncode);
          } 
        return cifrado;
    }, 

    decode: function decode(inputOffset, inputText) {
        let decipherUpperCase = inputText.toUpperCase();
        let decifrado = "";
        let calcDecode = 0;
        for (let cont=0; cont < decipherUpperCase.length; cont++) {
            calcDecode = ((decipherUpperCase.charCodeAt(cont) - 90 - inputOffset)% 26 + 90);
            decifrado += String.fromCharCode(calcDecode);
        }
        return decifrado;
    } 
};

export default cipher;

