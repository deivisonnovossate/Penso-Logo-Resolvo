

function palavraMaior(){

  let palavra = document.getElementById('frase').value;

  const palavras = palavra.split(" ");

  let maior = palavras[0];

  for(i = 0; i < palavras.length; i++){
    if(maior.length < palavras[i].length){
      maior = palavras[i];
    }
  }

  document.getElementById('mostrarPalavra').innerHTML = "A maior palavra da frase é: " + maior;
  console.log(palavras)

}