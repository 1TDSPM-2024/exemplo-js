

//JavaScript básico tópicos
// console.log("Olá mundo!");

//---Capturar o botão pelo ID e atrelar a ele um evento de click
// const btnElemento = document.getElementById("botao");
// btnElemento.addEventListener("click", function(){
//     console.log("Botão testado.")
// });


// --------- 1.Declaração de variáveis
// var nome = "João";
// let sobrenome = "Silva";
// console.log("Nome completo: " + nome + sobrenome);

// --------- 2.Declaração de constantes

// const idade = 20;
// console.log("Idade: " + idade);


// --------- 3.Hoisting
// diferença entre var e let
// var nome = "João";

// if(true){
//     let nome = "Silva"
// }

// console.log(nome);


// --------- 4.Tipos de dados

// let tiposDeDados = [
//     "Number",
//     "String",
//     "Boolean",
//     "Null",
//     "Undefined",
//     "Object",
//     "Array",
//     "Function"
// ]

// console.table(tiposDeDados)

// --------- 5.Operadores
 
// --------- 6.Estruturas condicionais

// --------- 7.Estruturas de repetição

// let listaTiposDados = document.getElementById("tipo-dados");

// tiposDeDados.forEach((tipo)=>{
//     // cria <li> como itemLista
//     let itemLista = document.createElement("li");
//     // adiciona o texto dentro da <li>
//     itemLista.innerText = tipo;
//     // adiciona o <li> na <ul>
//     listaTiposDados.appendChild(itemLista)
// });


// --------- 8.Funções

// function soma(a,b){
//     if((a+b) >= 10){
//         console.log(`A soma de ${a} e ${b} é >= 10.`);
//         return true;
//     } else {
//         console.log(`A soma de ${a} e ${b} é < 10.`);
//         return false;
//     }
// }

// transferindo para ARROW FUNCTION

// const soma = (a,b)=>{
//     if((a+b) >= 10){
//         console.log(`A soma de ${a} e ${b} é >= 10.`);
//         return true;
//     } else {
//         console.log(`A soma de ${a} e ${b} é < 10.`);
//         return false;
//     }
// }


// RECUPERAR CAMPOS DO FORMULARIO -> querySelector

const inputEmail = document.querySelector("#idEmail")
const inputSenha = document.querySelector("#idSenha")

function validacao(inputEmail, inputSenha){

    if((inputEmail.value == "") && (inputSenha.value == "")){
        alert("É necessário preencher os campos obrigatórios.")
        return false;
    }
    return true;
}

// --------- 9.Arrays

// --------- 10.Objetos

// --------- 11.Funções de array


