var database = require("../database/config");

// SELECT
function buscarUltimosDados(idUsuario, linguagem, limite_linhas) {

    var instrucaoSql = `SELECT 
        nota_aprecia,
        nota_dificuldade, 
        momento, 
        DATE_FORMAT(momento,'%d/%m/%Y - %H:%i:%s') as 'Data da gravação'
        FROM dados_linguagem 
        JOIN usuario ON usuario.id = dados_linguagem.fk_usuario
        WHERE usuario.id != ${idUsuario} AND linguagem = '${linguagem}' ORDER BY momento DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDadosDoUsuario(idUsuario, linguagem) {

    var instrucaoSql = `SELECT 
        nota_aprecia,
        nota_dificuldade, 
        momento, 
        DATE_FORMAT(momento,'%d/%m/%Y - %H:%i:%s') as 'Data da gravação'
        FROM dados_linguagem 
        JOIN usuario ON usuario.id = dados_linguagem.fk_usuario
        WHERE usuario.id = ${idUsuario} AND linguagem = '${linguagem}'`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMediaDados(linguagem) {

    var instrucaoSql = `SELECT 
        ROUND(AVG(nota_aprecia), 2) AS 'nota_aprecia',
        ROUND(AVG(nota_dificuldade), 2) AS 'nota_dificuldade'
        FROM dados_linguagem 
        WHERE linguagem = '${linguagem}'`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}





// INSERT E DELETE
function darNotas(idUsuario, nota_aprecia, nota_dificuldade, linguagem) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function darNotas():", idUsuario, nota_aprecia, nota_dificuldade, linguagem);
    
    var instrucaoSql = `
        INSERT INTO dados_linguagem (nota_aprecia, nota_dificuldade, linguagem, fk_usuario) VALUES (${nota_aprecia}, ${nota_dificuldade}, '${linguagem}', ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function apagarNotas(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function apagarNotas():", idUsuario);
    
    var instrucaoSql = `
        DELETE FROM dados_linguagem WHERE fk_usuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    buscarUltimosDados,
    buscarDadosDoUsuario,
    buscarMediaDados,
    darNotas,
    apagarNotas
}
