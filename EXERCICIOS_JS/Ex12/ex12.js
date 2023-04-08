
function fatorialResult() {
  let fatorialNumber = document.getElementById('num').value;
  let result = document.getElementById('result');

  return result.innerHTML = fatorial(fatorialNumber);

}

function fatorial(number){
  if(number <= 1) {
    return 1
  } else {
    return number * fatorial(number-1);
  }
}