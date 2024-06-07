function sair() {
    sessionStorage.clear()
    window.location.href = "../index.html";
}

function csharp() {
    window.location.href = "../CSharp/csharp.html";
}

function java() {
    window.location.href = "../Java/java.html";
}

function javascript() {
    window.location.href = "../Javascript/javascript.html";
}

function html() {
    window.location.href = "../LinguagemHTML/html.html";
}

function css() {
    window.location.href = "../LinguagemCSS/css.html";
}

function sql() {
    window.location.href = "../SQL/sql.html";
}

function sobre_mim() {
    window.location.href = "../Sobre Mim/sobre_mim.html";
}

function configuracoes() {
    window.location.href = "Configuracoes/configuracoes.html";
}

function abrir_configuracoes() {
    div_configuracoes.style = "background-color: white;";
    span_configuracoes.style = "width: 17.5vw";
}

function fechar_configuracoes() {
    div_configuracoes.style = "background-color: transparent;";
    span_configuracoes.style = "width: 0vw";
}

var id = sessionStorage.ID_USUARIO;

function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var nome_usuario = document.getElementById("nome_usuario");

    if (email != null && nome != null) {
        nome_usuario.innerHTML = nome;
        verificarDesafios()
    } else {
        Swal.fire({
            imageUrl: "../assets/Icons/icon_error.png",
            imageHeight: 130,
            title: "Erro no login",
            text: "Por favor tente entrar novamente",
            width: 400,
            color: "black",
            didOpen: () => {
                tela_cobrir.style = "display: flex;";
            },
            willClose: () => {
                tela_cobrir.style = "display: none";
                window.location.href = "../index.html";
            }
        });
    }
}

async function verificarDesafios() {
    var existe = false;
    var linguagem = "desafioCsharp";

    try {
        const response = await fetch(`/desafios/verDadosUsuario/${linguagem}/${id}`, { cache: 'no-store' });

        if (response.status == 200) {
            console.log("Tabela desafios existe: ", response);
            existe = true;
        } else {
            console.log('Nenhum dado encontrado na API');
        }
    } catch (error) {
        console.error(`Erro na obtenção dos dados para o gráfico: ${error.message}`);
    }

    if (!existe) {
        cadastrarDesafios();
    }
}

function cadastrarDesafios() {
    fetch("/desafios/cadastrar", { method: "POST",  headers: {  "Content-Type": "application/json"  }, body: JSON.stringify({ idUsuario: id }) })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                console.log("dados cadastrados com sucesso: ", resposta);
            } else {
                throw "Houve um erro ao tentar realizar o cadastro dos desafios!";
            }
        });
}



function csharp_button() {
    csharp_texto.style = "width: 0; height: 0;"
}