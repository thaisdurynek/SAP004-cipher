const cipher = {
    cifrar: function cifrar(inputText, inputOffset) {
        let cifrado = ""; 
        let calcEncode = 0;
        for (let i=0; i < Number(inputText.length); i++) {
            calcEncode = ((inputText.charCodeAt(i) - 65 + inputOffset)% 26 + 65);
            cifrado += String.fromCharCode(calcEncode);
          } 
        //alert(`Seu bilhete decifrado é ${cifrado}`);
        return cifrado;
    }, 

    decifrar: function decifrar(inputText, inputOffset) {
        let decifrado = "";
        let calcDecode = 0;
        for (let cont=0; cont < Number(inputText.length); cont++) {
            calcDecode = ((inputText.charCodeAt(cont) - 90 - inputOffset)% 26 + 90);
            decifrado += String.fromCharCode(calcDecode);
        }
        console.log(calcDecode);
        //alert(`Seu bilhete decifrado é ${decifrado}`);
        return decifrado;
    } 
};

export default cipher;

