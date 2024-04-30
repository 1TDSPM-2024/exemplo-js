//JavaScript básico tópicos
console.log("Olá Mundo!");

const btnElemento = document.getElementById("botao");
btnElemento.addEventListener("click", function(){
    console.log("Botão testado.");
});

//1.Declaração de variáveis e constantes:

//1.1. Declaração de variáveis
var nome = "Thiago";
let sobrenome = "Jesus";
 console.log("Nome completo : " + nome + sobrenome);

//1.2.Declaração de constantes
/* const idade = 20;
console.log("Idade : " + idade);
idade = 21; */

//2.Hoisting

//Diferença de var e let
var nome01 = "João";

if(true){
    var nome01 = "Silva";
}

var nome02 = "Antonio";

if(true){
    let nome02 = "Santos";
}

console.log(nome01);
console.log(nome02); 

//3.Tipos de dados

let tiposDeDados = [
    "Number",
    "String",
    "Boolean",
    "Null",
    "Undefined",
    "Object",
    "Array",
    "Function"
]

console.table(tiposDeDados);
 
//4.Operadores
 
//5.Estruturas condicionais

// 6. Estruturas de repetição
// Imprimindo a estrutura do Array

// 6.1. forEach com função anônima
tiposDeDados.forEach(function(tipo){
    console.log(tipo);
});

// 6.2. forEach com arrowFunction
tiposDeDados.forEach((tipo)=>{
    console.log(tipo);
});

// 6.3 Itera sobre um array de tipos de dados que serão inseridos em uma lista ul no html de id tipo-dados
let listaTiposDeDados = document.getElementById("tipo-dados");

tiposDeDados.forEach((tipo)=>{
    let itemLista = document.createElement("li");
        itemLista.innerText = tipo;
        listaTiposDeDados.appendChild(itemLista);
});

//7.Funções

//8.Arrays

//9.Objetos

//10.Funções de array


