var database = require("../database/config");

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT idUsuario, nomeUsuario, emailUsuario, senhaUsuario FROM usuario WHERE emailUsuario = '${email}' AND senhaUsuario = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    insert into usuario (nomeUsuario, emailUsuario, senhaUsuario) values ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function pontos_finais(fkUsuario, pontosFinais) {
    var instrucao = `
        INSERT INTO quiz (FkUsuario, pontos) 
        VALUES ('${fkUsuario}', '${pontosFinais}')`;
  
    return database.executar(instrucao);
  }

module.exports = {
    autenticar,
    cadastrar,
    pontos_finais
};