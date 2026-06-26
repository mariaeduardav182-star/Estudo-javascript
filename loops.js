const marcas_carros = [
    "toyota",
    "honda",
    "ford",
    "chevrolet",
    "nissan"
];

console.log(marcas_carros[0]);
console.log(marcas_carros[1]);
console.log(marcas_carros[2]);
console.log(marcas_carros[3]);
console.log(marcas_carros[4]);

let num = 0;

console.log("antes: " + num++);
console.log("depois: " + num);

console.log(marcas_carros.length); // quantidade de itens

// Seleciona a div com classe "lista"
const minhalista = document.querySelector(".lista");

// Cria a UL
const ul = document.createElement("ul");

// Percorre o array
for (const marca of marcas_carros) {

    const li = document.createElement("li");

    li.textContent = marca;

    ul.appendChild(li);
}

// Adiciona a UL dentro da DIV
minhalista.appendChild(ul);

   