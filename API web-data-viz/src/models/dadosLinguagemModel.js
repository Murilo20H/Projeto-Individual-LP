var database = require("../database/config");

function buscarUltimosDados(idUsuario, limite_linhas) {

    var instrucaoSql = `SELECT 
        nota_aprecia as 'O quanto a pessoa gosta',
        nota_dificuldade as 'O quanto a pessoa acha difícil', 
        momento, 
        DATE_FORMAT(momento,'%d/%m/%Y - %H:%i:%s') as 'Data da gravação'
        FROM dados_linguagem 
        JOIN usuario ON usuario.id = dados_linguagem.fk_usuario
        ORDER BY usuario.id DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDadosDeUsuarios(idUsuario) {

    var instrucaoSql = `SELECT 
        nota_aprecia as 'O quanto a pessoa gosta',
        nota_dificuldade as 'O quanto a pessoa acha difícil', 
        momento, 
        DATE_FORMAT(momento,'%d/%m/%Y - %H:%i:%s') as 'Data da gravação'
        FROM dados_linguagem 
        JOIN usuario ON usuario.id = dados_linguagem.fk_usuario
        WHERE usuario.id = ${id_usuario}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimosDados,
    buscarDadosDeUsuarios
}
