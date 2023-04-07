
let listProducts = [
    {name:"Computador", category: "Informática", price: 1500},
    {name:"Microondas", category: "EletroEletronicos", price: 1000},
    {name:"Celular", category: "Eletronicos", price: 800}
];

let myList = document.getElementById('listaDeProdutos');

for(i = 0; i < listProducts.length; i++){
  let product = listProducts[i];

  let listItem = document.createElement("li");

  listItem.textContent = product.name + " ( " + product.category
  + "); " + product.price + " E";

  myList.appendChild(listItem);
}