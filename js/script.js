

//JavaScript básico tópicos
console.log("Olá Mundo!");
//Capturar o botão pelo ID e atrelar a ele um evento de click.
// const btnElemento = document.getElementById("botao");
// btnElemento.addEventListener("click", function(){
//     console.log("Botão testado.");
// });

// //1.Declaração de variáveis
// var nome = "João";
// let sobrenome = "Silva";
//  console.log("Nome completo : " + nome +" "+ sobrenome);

// //2.Declaração de constantes
// const idade = 20;
// console.log("Idade : " + idade);

//2.Hoisting
//Diferença entre var e let
// var nome = "João";

// if(true){
//     let nome = "Silva";
// }
// console.log(nome);
 
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

//Imprimindo o array com console.table.
console.table(tiposDeDados);

//4.Operadores
 
//5.Estruturas condicionais

//6.Estruturas de repetição
// //Imprimindo Array com forEach com função anônima
// tiposDeDados.forEach(function(tipo){
//     console.log(tipo);
// });
//Imprimindo Array com forEach com arrowFunction
// tiposDeDados.forEach((tipo)=>{
//     console.log(tipo);
// });
//Itera sobre um array de tipos de dados que serão inseridos em uma lista ul no html de id tipo-dados
//Recuperando a lista ul atraves do id
let listaTiposDeDados = document.getElementById("tipo-dados");

tiposDeDados.forEach((tipo)=>{
    //Criando um elemento <li> para inserir na <ul>
    let itemLista = document.createElement("li");
    //Adicionando o texto do tipo de dado
     itemLista.innerText = tipo;
     //Inserindo o elemento <li> na <ul>
     listaTiposDeDados.appendChild(itemLista);
});


//7.Funções

//8.Arrays

//9.Objetos

//10.Funções de array


