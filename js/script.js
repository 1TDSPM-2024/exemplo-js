//prestar atençao no efeito cascata

//JavaScript básico tópicos
console.log("Olá JOVEMM");
//Capturar o botão pelo ID e atrelar a ele um evento de click.
const btnElemento = document.getElementById("botao");
btnElemento.addEventListener("click",function () {
    console.log("BOTÃO TESTADO. ");//deferJá utilizando o defer além do download e análise simultânea, o carregamento do seu HTML não será interrompido em nenhum momento para a execução dos scripts. Eles são executados apenas quando o carregamento de todo o documento estiver concluído.
});//mostra o evento e parametro
//1.Declaração de variáveis
// var nome = "João";
// let sobrenome = "Silva";
//  console.log("Nome completo : " + nome +" "+ sobrenome);
// //2.Declaração de constantes
// const idade = 20;
// console.log("Idade : " + idade);
// idade = 21;

//2.Hoisting
//Diferença entre var e let
var nome = "João";//declara como var são tiradas de ond estao em colocam no topo do programa uma embaixo da outra
let sobrenome = "Silva";
//usa let que não tem erro pra n dar problena
if(true){
    var nome = "Silva"
}

console.log(nome)

//3.Tipos de dados
 
//4.Operadores
 
//5.Estruturas condicionais

//6.Estruturas de repetição

//7.Funções

//8.Arrays

//9.Objetos

//10.Funções de array


