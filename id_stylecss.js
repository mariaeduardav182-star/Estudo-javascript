//const test = document.getElementById("teste");
const test = document.querySelector("#teste");
test.style.color = "#ff0000";
test.style.background="#000000";
test.innerHTML = "<p>Turma 13613.1 - Front-end</p>" ;

const novaimg = document.querySelector(".novaimg");
const img = document.createElement("img");
img.src = "https://www.w3schools.com/images/w3schools_green.jpg";
novaimg.appendChild(img);   