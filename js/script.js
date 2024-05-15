let listaUsuarios = [
    {nome: 'João', genero: 'm', email: 'joao@email.com', senha: '12345'},
    {nome: 'Maria', genero: 'f', email: 'maria@email.com', senha: '12345'},
    {nome: 'Gabriel', genero: 'm', email: 'gabriel@email.com', senha: '12345'},
    {nome: 'Debora', genero: 'f', email: 'debora@email.com', senha: '12345'}
]


function validacao(inputEmail, inputSenha) {

    for (let x = 0; x < listaUsuarios.length; x++) {

        if((inputEmail.value == u.email) && (inputSenha.value == u.senha)){
            console.log("Usuário", u.nome, "encontrado.");
            return false;
        } else {
            console.log("Usuário não encontrado.")
            return true;
        }
    };

}

// --------- 9.Arrays

// --------- 10.Objetos

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


// --------- 11.Funções de array

