document.write('Fui colocado externamente');

var usuario = {
    nome: "fulano",
    senha: "asjuhduahda",
    recursosescondidos: false
};

var meumodulo= (function(){
    //isso é um modulo
    // aqui dentro é tudo privado
    var usuario3 = {
        nome: "ciclano",
        senha: "asjuhduahda",
        recursosescondidos: false
    };

    var nomeusuario =usuario3.nome ;
    return{
        nomeusuario // o return torna ele publico
    }

})()
// var meumodulo= (()=>{
//modulo
// })() mesma coisa que o de cima porem esta escrito de forma distinta

var batatinha = (function(){
    //modulo

})()