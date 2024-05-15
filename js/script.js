// const inputEmail = document.querySelector("#idEmail");
// const inputSenha = document.querySelector("#idSenha");

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
//     //Recupere os dados dos campos e adicione em um objeto de nome usuário e desestruture o objeto
//     //pegando as propriedades e realizando uma validação para ver se as propriedades possuem valores de preenchimento.
//     //Após a validação, adicione uma nova propriedade ao objeto de nome nomeCompleto com o valor de sua escolha.

    let usuario = {
        emailUsuario : inputEmail.value,
        senhaUsuario : inputSenha.value
    };

    if((inputEmail.value == "") && (inputSenha.value == "")){
        alert("O preenchimento dos campos são obrigatórios.");
        return false;
    }
    return true;

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

// document.getElementById('idCpf').addEventListener('input', function(e) {
//     var value = e.target.value;
//     var cpfPattern = value.replace(/\D/g, '')
//                           .replace(/(\d{3})(\d)/, '$1.$2')
//                           .replace(/(\d{3})(\d)/, '$1.$2')
//                           .replace(/(\d{3})(\d)/, '$1-$2')
//                           .replace(/(-\d{2})\d+?$/, '$1');
//     e.target.value = cpfPattern;
//   });


//8.Arrays
// //9.Objetos
// let usuario = {
//     emailUsuario : "jo@email.com",
//     senhaUsuario : "123456",
//     nomeCompleto : "João da Silva"
// }
// // console.log(usuario.nomeCompleto + ", você está logado com o seu email: "+ usuario.emailUsuario);
// // let propsVariavel = "emailUsuario";
// // console.log(usuario["nomeCompleto"] + ", você está logado com o seu email: "+ usuario[propsVariavel]);
// console.log(usuario);
// //OPERADOR SPREAD( ... )
// usuario = {...usuario, idade:20 , regiao:"São Paulo"};
// console.log(usuario);
// //Destructuring
// const{emailUsuario,idade,regiao}=usuario;
// console.log(`E-mail do Usuário: ${emailUsuario}`);
// console.log(`Idade do Usuário: ${idade}`);
// console.log(`Região de Residência: ${regiao}`);
//10.Funções de array
