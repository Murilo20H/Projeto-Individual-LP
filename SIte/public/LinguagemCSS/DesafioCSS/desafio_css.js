function voltar() {
    window.location.href = "../css.html";
}

function graficos_gerais() {
    window.location.href = "../../GraficosGerais/graficos_gerais.html"
}

const linguagem_atual = 'css';
var idUsuario = sessionStorage.ID_USUARIO;

function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var nome_usuario = document.getElementById("nome_usuario");

    if (email != null && email != 'undefined' && nome != null && nome != 'undefined') {
        nome_usuario.innerHTML = nome;
    } else {
        Swal.fire({
            imageUrl: "../../assets/Icons/icon_error.png",
            imageHeight: 130,
            title: "Erro no login",
            text: "Por favor tente entrar novamente",
            width: 400,
            color: "black",
            willClose: () => {
                // window.location.href = "../../index.html";
            }
        });
    }
}



var fase = 1;
async function alterarPosicao() {
    var align_items = input_align_items.value;
    var justify_content = input_justify_content.value;
    var flex_direction = input_flex_direction.value;

    bolinhas.style.alignItems = `${align_items}`;
    bolinhas.style.justifyContent = `${justify_content}`;
    bolinhas.style.flexDirection = `${flex_direction}`;

    if (await verificarVitoria()) {
        if (fase == 1) {
            fase++;
            Swal.fire({
                imageUrl: "../../assets/Icons/foto_check.png",
                imageHeight: 130,
                title: "Fase 1 concluída",
                text: "Próxima fase...",
                width: 400,
                color: "black",
                willClose: () => {
                    fase2();
                }
            });
        } else if (fase == 2) {
            fase++;
            Swal.fire({
                imageUrl: "../../assets/Icons/foto_check.png",
                imageHeight: 130,
                title: "Fase 2 concluída",
                text: "Próxima fase...",
                width: 400,
                color: "black",
                willClose: () => {
                    fase3();
                }
            });
        } else if (fase == 3) {
            fase++;
            Swal.fire({
                imageUrl: "../../assets/Icons/foto_check.png",
                imageHeight: 130,
                title: "Fase 3 concluída",
                text: "Próxima fase...",
                width: 400,
                color: "black",
                willClose: () => {
                    fase4();
                }
            });
        } else if (fase == 4) {
            fase++;
            Swal.fire({
                imageUrl: "../../assets/Icons/foto_check.png",
                imageHeight: 130,
                title: "Parabéns",
                text: "Você finalizou o desafio de CSS!!",
                width: 400,
                color: "black",
                willClose: () => {
                    finalizou();
                }
            });
        }
    }
}







function verificarVitoria() {


    var posicaoBolinhaVerde = document.getElementById("bolinha_verde").getBoundingClientRect();
    var posicaoEsperadoVerde = document.getElementById("esperado_verde").getBoundingClientRect();

    var sobrepoeVerde = (
        posicaoBolinhaVerde.top === posicaoEsperadoVerde.top &&
        posicaoBolinhaVerde.left === posicaoEsperadoVerde.left
    );

    if(sobrepoeVerde) {
        var posicaoBolinhaVermelho = document.getElementById("bolinha_vermelho").getBoundingClientRect();
        var posicaoEsperadoVermelho = document.getElementById("esperado_vermelho").getBoundingClientRect();

        var sobrepoeVermelho = (
            posicaoBolinhaVermelho.top === posicaoEsperadoVermelho.top &&
            posicaoBolinhaVermelho.left === posicaoEsperadoVermelho.left
        );

        if(sobrepoeVermelho) {
            var posicaoBolinhaAzul = document.getElementById("bolinha_azul").getBoundingClientRect();
            var posicaoEsperadoAzul = document.getElementById("esperado_azul").getBoundingClientRect();
    
            var sobrepoeAzul = (
                posicaoBolinhaAzul.top === posicaoEsperadoAzul.top &&
                posicaoBolinhaAzul.left === posicaoEsperadoAzul.left
            );

            if(sobrepoeAzul) {
                return true;
            }
        } else {
            return false;
        }
    }

    return false;
}



function fase2() {
    var esperado = document.getElementById("esperado");
    esperado.style.justifyContent = "center";
    esperado.style.alignItems = "end";
}

function fase3() {
    var esperado = document.getElementById("esperado");
    esperado.style.justifyContent = "end";
    esperado.style.alignItems = "start";
    esperado.style.flexDirection = "column";
}

function fase4() {
    var esperado = document.getElementById("esperado");
    esperado.style.justifyContent = "start";
    esperado.style.alignItems = "center";
    esperado.style.flexDirection = "row-reverse";
}

function finalizou() {
    var esperado = document.getElementById("esperado");
    esperado.style.display = "none";
    esperado.style.alignItems = "center";
    esperado.style.flexDirection = "row-reverse";
}