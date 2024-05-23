var database = require("../database/config")

function verRanking(limite_ranking) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function verRanking(): ", limite_ranking)
    var instrucaoSql = `
    SELECT concat(nome, " ", sobrenome) AS nome, SUM(desafioCsharp + desafioJava + desafioJavascript + desafioHtml + desafioCss + desafioSql) AS pontuacao 
	FROM desafios
    JOIN usuario ON desafios.fk_usuario = usuario.id
	GROUP BY fk_usuario
    ORDER BY pontuacao DESC LIMIT ${limite_ranking};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizar(linguagem, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizar(): ", linguagem, idUsuario)
    var instrucaoSql = `
        UPDATE desafios SET ${linguagem} = 1 WHERE fk_usuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function verDadosUsuario(linguagem, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function verDadosUsuario():", idUsuario);
    
    var instrucaoSql = `
        SELECT ${linguagem} FROM desafios WHERE fk_usuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function cadastrar(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idUsuario);
    
    var instrucaoSql = `
        INSERT INTO desafios (fk_usuario) VALUES (${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    verRanking,
    atualizar,
    verDadosUsuario,
    cadastrar
};