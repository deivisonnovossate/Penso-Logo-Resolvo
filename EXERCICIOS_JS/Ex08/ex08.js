let par = 0

function contadorPares(){
  for(i = 0; i <= 100; i++){
    if(i%2 == 0){
      par = par + 1;
    }

  }
  console.log('De 0 a 100 temos ' + par + ' números pares')

}