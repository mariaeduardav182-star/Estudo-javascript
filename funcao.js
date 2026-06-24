//criação de uma função
function ola(nome="Visitante"){
    console.log("Olá, " + nome + "!");
}

ola("Bruno");//chamada da função
ola();

function multiplicacao(a,b){
    console.log(a*b);
}
multiplicacao(5,2);//chamada da função
multiplicacao('Bruno', 2);//chamada da função

//forma abreviada de criar uma função multiplicacao
let multiplicacao = (a,b) => {console.log(a*b);};

//forma abreviada de criar uma função divisao
let divisao = (a,b) => {console.log(a/b);};

function soma(a,b){
    return a+b;
}
console.log(soma(5,2));//chamada da função
let resultado = soma(5,2);//chamada da função
console.log(resultado);
let soma =(a,b) =>{console.log(a+b);};//forma abreviada de criar uma função soma
if(resultado > 10){
    console.log("Resultado maior que 10");
}else{
    console.log("Resultado menor que 10");
}
function subtracao(a,b){
    console.log(a-b);
}
subtracao(5,2);//chamada da função

function divisao(a,b){
    return a/b;
}
console.log(divisao(10,2));//chamada da função

function par(numero){
    if(numero % 2 === 0){
        return "Número par";
    }else{
        return "Número ímpar";
    }
}   
console.log(par(4));//chamada da função
console.log(par(5));//chamada da função