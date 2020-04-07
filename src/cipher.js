const cipher = {
    cifrar: function cifrar(inputText, stringLength, inputOffset) {
        let cifrado = ""; 
        for (let i=0; i < stringLength; i++) {
            let calcEncode = ((inputText.charCodeAt(i) - 65 + inputOffset)% 26 + 65);
            cifrado += String.fromCharCode(calcEncode);
          } 
        return cifrado;
    }, 

    decifrar: function decifrar(inputText, stringLength, inputOffset) {
        let decifrado = "";
        for (let cont=0; cont < stringLength; cont++) {
            let calcDecode = ((inputText.charCodeAt(cont) - 90 - inputOffset)% 26 + 90);
            decifrado += String.fromCharCode(calcDecode);
        }
        return decifrado;
    } 
};

export default cipher;

