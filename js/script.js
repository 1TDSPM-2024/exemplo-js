let listaUsuarios = [
    {nome:"João", genero:"m", email:"jo@email.com", senha:"123456"},
    {nome:"Maria", genero:"f", email:"ma@email.com", senha:"123456"},
    {nome:"Roberto", genero:"f", email:"ro@email.com", senha:"123456"},
    {nome:"Antonio", genero:"m", email:"an@email.com", senha:"123456"},
    {nome:"Carlos", genero:"m", email:"ca@email.com", senha:"123456"},
];


function validacao(inputEmail,inputSenha) {

   //Recupere os dados dos campos e adicione em um objeto de nome usuário e desestruture o objeto
   //pegando as propriedades e realizando uma validação para ver se as propriedades possuem valores de preenchimento.
   //Após a validação, adicione uma nova propriedade ao objeto de nome nomeCompleto com o valor de sua escolha.

    let usuario = {
        emailUsuario : inputEmail.value,
        senhaUsuario : inputSenha.value
    };


for (let x = 0; x < listaUsuarios.length; x++) {
        if((inputEmail.value == listaUsuarios[x].email) && (inputSenha.value == listaUsuarios[x].senha)){
            console.log("Usuário encontrado");
            return true;
        }else{
            console.log("Usuário não encontrado");
            return false;
        }
}
}

// Capturando os botões login, close e o elemento dialog \\

const botaoLogin = document.querySelector("#btnLogin");
const botaoClose = document.querySelector("#btnClose");
const modal = document.querySelector("dialog");

//Abrir o modal com o botão de Login através do evento click do botão

botaoLogin.addEventListener("click", (e)=> {
    modal.showModal();
})

botaoClose.addEventListener("click", (e)=> {
    modal.close();
})



// --------- Objetos

// let usuario = {
//     emailUsuario: "jo@email.com",
//     senhaUsuario: "123456",
//     nomeCompleto: "João da Silva"
// }

// // console.log(usuario.nomeCompleto + 
// //             ", você está logado com o e-mail " 
// //             + usuario["emailUsuario"])

// console.log(usuario);

// // OPERADOR SPREAD( ... )

// usuario = {...usuario, idade:20,regiao:"São Paulo"}

// console.log(usuario);

// DESTRUCTURING

// const{emailUsuario,idade,regiao}=usuario;

// console.log(`E-mail do Usuário: ${emailUsuario}`);
// console.log(`Idade do Usuário: ${idade}`);
// console.log(`Região de Residência: ${regiao}`);