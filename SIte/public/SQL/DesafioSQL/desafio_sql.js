function voltar() {
    window.location.href = "../sql.html";
}

function ranking() {
    window.location.href = "../../Ranking/ranking.html"
}

const linguagem_atual = 'desafioSql';
var idUsuario = sessionStorage.ID_USUARIO;

async function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;


    if (email == null || email == 'undefined' || nome == null || nome == 'undefined') {
        Swal.fire({
            imageUrl: "../../assets/Icons/icon_error.png",
            imageHeight: 130,
            title: "Erro no login",
            text: "Por favor tente entrar novamente",
            width: 400,
            color: "black",
            willClose: () => {
                window.location.href = "../../index.html";
            }
        });
    } else {
        document.getElementById("nome_usuario").innerHTML = nome;
        procurar();
    }
}



async function procurar() {
    var dados;
    try {
        const response = await fetch(`/desafios/verDadosUsuario/${linguagem_atual}/${idUsuario}`, { cache: 'no-store' });

        if (response && response.ok) {
            const json = await response.json();
            dados = JSON.stringify(json);
        }
    } catch (error) {
        console.error(`Erro na obtenção dos dados do desafio: ${error.message}`);
    }

    if (dados[dados.length - 3] == "1") {
        document.getElementById("tabelas").style.display = "none";
        document.getElementById("textarea_comando").style.display = "none";
        document.getElementById("botao_verificar").style.display = "none";
        document.getElementById("tela_resposta").style.display = "none";
        document.getElementById("ajuda").style.display = "none";
        document.getElementById("pergunta").style = "color: green; font-size: 3.5vw";
        document.getElementById("pergunta").innerHTML = "Parabéns, você venceu o desafio de SQL!";
    }
}


function verificar() {
    var comando = document.getElementById("textarea_comando").value;
    var texto_ajuda = document.getElementById("texto_ajuda");

    if (comando.length < 14) {
        texto_ajuda.innerHTML = "Será aceito somente o comando 'SELECT'";
        texto_ajuda.style.color = "red";
    } else if (comando[0].toLowerCase() == "s" && comando[1].toLowerCase() == "e" && comando[2].toLowerCase() == "l" && comando[3].toLowerCase() == "e" && comando[4].toLowerCase() == "c" && comando[5].toLowerCase() == "t") {
        texto_ajuda.innerHTML = "Digite o comando na caixa acima";
        texto_ajuda.style.color = "white";
        procurarDados(comando);
    } else {
        texto_ajuda.innerHTML = "Será aceito somente o comando 'SELECT'";
        texto_ajuda.style.color = "red";
    }
}


function venceu() {
    Swal.fire({
        imageUrl: "../../assets/Icons/foto_check.png",
        imageHeight: 130,
        title: "Parabéns",
        text: "Você finalizou o desafio de SQL!!",
        width: 400,
        color: "black",
        willClose: () => {
            finalizou();
        }
    });
}

function perdeu() {
    Swal.fire({
        imageUrl: "../../assets/Icons/icon_error.png",
        imageHeight: 130,
        title: "Infelizmente você perdeu",
        text: "Procure mais ou verifique se digitou corretamente",
        width: 400,
        color: "black"
    });
}


function procurarDados(comando_usario) {
    var erro = false;
    var dados;
    fetch("/desafios/sql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            comando: comando_usario
        })
    }).then(function (resposta) {
        
        if (resposta.ok) {
            document.getElementById("tela_resultados").style.display = "flex";
            console.log(resposta);
            
            resposta.json().then(json => {
                dados = JSON.stringify(json);
            });
            
        } else if (resposta.status == 500) {
            console.log(resposta);
            erro = true;

            Swal.fire({
                imageUrl: "../../assets/Icons/icon_error.png",
                imageHeight: 130,
                title: "Erro",
                text: "Comando inválido",
                width: 400,
                color: "black"
            });
            
        } else {
            console.log("Houve um erro ao tentar rodar o comando do usario no desafio sql!");
            
            resposta.text().then(texto => {
                console.error(texto);
            });
        }
    }).catch(function (erro) {
        console.log(erro);
    })

    if (!erro) {
        setTimeout(function () { criarLista(dados) }, 500);
    }
}


function criarLista(dados) {
    var lista = document.getElementById("lista_resultados");
    var dados1 = dados.replaceAll(',"', '@');
    var dados2 = dados1.replaceAll('"', ' ');
    var dados3 = dados2.replaceAll('[', '<div style="width: 100%; background-color: black; height: 0.2vh"></div><br>');
    var dados4 = dados3.replaceAll(']', '');
    var dados5 = dados4.replaceAll('{', '');
    var dados6 = dados5.replaceAll('},', '<br><br><div style="width: 100%; background-color: black; height: 0.2vh"></div><br>');
    var dados7 = dados6.replaceAll('}', '<br><br>');
    var dados8 = dados7.replaceAll('T03:00:00.000Z', '');
    var dados9 = dados8.replaceAll(' , ', ' <b style="color: red"> || </b> ');
    var dadosFinais = dados9.replaceAll('@', ' <b style="color: red"> || </b> ');
    lista.innerHTML = "<h1>RESULTADOS</h1>";
    lista.scrollTop = 0;
    lista.innerHTML += dadosFinais;
}

function fecharLista() {
    var tela = document.getElementById("tela_resultados");
    tela.style.display = "none";
}

function enviar() {
    var resposta = document.getElementById("resposta").value;
    var resultado_certo1 = "insert into solucao values ('william pinheiro')"
    var resultado_certo2 = "insert into solucao values ('william pinheiro');"
    if (resposta.toLowerCase() == resultado_certo1 || resposta.toLowerCase() == resultado_certo2) {
        venceu();
    } else {
        perdeu();
    }
}


async function finalizou() {
    try {
        const response = await fetch(`/desafios/atualizar/${linguagem_atual}/${idUsuario}`, { cache: 'no-store' });
        console.log(response);

        if (response.ok) {
            const json = response.json();
            console.log(JSON.stringify(json));
        } else {
            console.error(`Erro na atualização dos dados do desafio: ${response.status} - ${response.statusText}`);
        }
    } catch (error) {
        console.error(`Erro na atualização dos dados do desafio: ${error.message}`);
    }
    document.getElementById("tabelas").style.display = "none";
    document.getElementById("textarea_comando").style.display = "none";
    document.getElementById("botao_verificar").style.display = "none";
    document.getElementById("tela_resposta").style.display = "none";
    document.getElementById("ajuda").style.display = "none";
    document.getElementById("pergunta").style = "color: green; font-size: 3.5vw";
    document.getElementById("pergunta").innerHTML = "Parabéns, você venceu o desafio de SQL!";
}