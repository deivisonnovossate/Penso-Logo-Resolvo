function dadosPessoa(){
    /* Bendita função hein.  */
    document.getElementById('form').addEventListener('submit', function(event){
        event.preventDefault()
    })

let nomePessoa = document.getElementById('nome').value;
let idadePessoa = document.getElementById('idade').value;
let dataPessoa = document.getElementById('data').value;

let person = {nome:  nomePessoa,
    idade: idadePessoa, 
    data: dataPessoa
}

console.log(person);
}