let frase = document.getElementById('fraseParaReverso');

function fraseReversa(){
  let fraseReverter =  frase.value;
  let separarCaracter =  fraseReverter.split("").reverse().join("");
  document.getElementById('mostrarReverso').innerHTML = separarCaracter;
}