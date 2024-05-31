function voltar() {
    window.location.href = "../css.html";
}

function ranking() {
    window.location.href = "../../Ranking/ranking.html"
}

const linguagem_atual = 'desafioCss';
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
        await procurar()
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
        document.getElementById("esperado").style.display = "none";
        document.getElementById("pergunta").style = "color: green; font-size: 2.5vw";
        document.getElementById("pergunta").innerHTML = "Parabéns, você venceu o desafio de JavaScript!";
        document.getElementById("tela_usuario").innerHTML = '<div><span>Display: flex</span></div>      <div><span>Flex-direction:</span><input autocomplete="off" oninput="alterarPosicao()" id="input_flex_direction" type="text"></div>      <div><span>Align-items:</span><input autocomplete="off" oninput="alterarPosicao()" id="input_align_items" type="text"></div>        <div><span>Justify-content:</span><input autocomplete="off" oninput="alterarPosicao()" id="input_justify_content" type="text"></div>        <div><span>Flex-flow:</span><input autocomplete="off" oninput="alterarPosicao()" id="input_flex_flow" type="text"></div>        <div><span>Align-content:</span><input autocomplete="off" oninput="alterarPosicao()" id="input_align_content" type="text"></div>        <div><span>Flex-wrap:</span><input autocomplete="off" oninput="alterarPosicao()" id="input_flex_wrap" type="text"></div>        <div><span>Order:</span><input autocomplete="off" oninput="alterarPosicao()" id="input_order" type="text"></div>';
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
    
    if (fase == 9) {
        var flex_flow = input_flex_flow.value;
        var align_content = input_align_content.value;
        var flex_wrap = input_flex_wrap.value;
        var order = input_order.value;

        bolinhas.style.flexFlow = `${flex_flow}`;
        bolinhas.style.alignContent = `${align_content}`;
        bolinhas.style.flexWrap = `${flex_wrap}`;
        bolinhas.style.order = `${order}`;
    }

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
                title: "Fase 4 concluída",
                text: "Próxima fase...",
                width: 400,
                color: "black",
                willClose: () => {
                    fase5();
                }
            });
        } else if (fase == 5) {
            fase++;
            Swal.fire({
                imageUrl: "../../assets/Icons/foto_check.png",
                imageHeight: 130,
                title: "Fase 5 concluída",
                text: "Próxima fase...",
                width: 400,
                color: "black",
                willClose: () => {
                    fase6();
                }
            });
        } else if (fase == 6) {
            fase++;
            Swal.fire({
                imageUrl: "../../assets/Icons/foto_check.png",
                imageHeight: 130,
                title: "Fase 6 concluída",
                text: "Próxima fase...",
                width: 400,
                color: "black",
                willClose: () => {
                    fase7();
                }
            });
        } else if (fase == 7) {
            fase++;
            Swal.fire({
                imageUrl: "../../assets/Icons/foto_check.png",
                imageHeight: 130,
                title: "Fase 7 concluída",
                text: "Próxima fase...",
                width: 400,
                color: "black",
                willClose: () => {
                    fase8();
                }
            });
        } else if (fase == 8) {
            fase++;
            Swal.fire({
                imageUrl: "../../assets/Icons/foto_check.png",
                imageHeight: 130,
                title: "Parabéns",
                text: "Você finalizou o desafio de CSS!!",
                width: 400,
                color: "black",
                willClose: () => {
                    alterarPosicao();
                    procurar()
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
    esperado.style.alignItems = "end";
    esperado.style.justifyContent = "center";
}

function fase3() {
    var esperado = document.getElementById("esperado");
    esperado.style.flexDirection = "column";
    esperado.style.alignItems = "start";
    esperado.style.justifyContent = "end";
}

function fase4() {
    var esperado = document.getElementById("esperado");
    esperado.style.alignItems = "center";
    esperado.style.justifyContent = "space-between";
}

function fase5() {
    var esperado = document.getElementById("esperado");
    esperado.style.flexDirection = "column";
    esperado.style.alignItems = "end";
    esperado.style.justifyContent = "space-around";
}

function fase6() {
    var esperado = document.getElementById("esperado");
    esperado.style.flexDirection = "row-reverse";
    esperado.style.alignItems = "center";
    esperado.style.justifyContent = "start";
}

function fase7() {
    var esperado = document.getElementById("esperado");
    esperado.style.flexDirection = "row-reverse";
    esperado.style.alignItems = "start";
    esperado.style.justifyContent = "space-between";
}

function fase8() {
    var esperado = document.getElementById("esperado");
    esperado.style.flexDirection = "column-reverse";
    esperado.style.alignItems = "center";
    esperado.style.justifyContent = "space-evenly";
}

async function finalizou() {
    var esperado = document.getElementById("esperado");
    esperado.style.display = "none";
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
    document.getElementById("esperado").style.display = "none";
    document.getElementById("pergunta").style = "color: green; font-size: 2.5vw";
    document.getElementById("pergunta").innerHTML = "Parabéns, você venceu o desafio de JavaScript!";
    document.getElementById("tela_usuario").innerHTML = '<div><span>Display: flex</span></div>      <div><span>Flex-direction:</span><input autocomplete="off" oninput="alterarPosicao()" id="input_flex_direction" type="text"></div>      <div><span>Align-items:</span><input autocomplete="off" oninput="alterarPosicao()" id="input_align_items" type="text"></div>        <div><span>Justify-content:</span><input autocomplete="off" oninput="alterarPosicao()" id="input_justify_content" type="text"></div>        <div><span>Flex-flow:</span><input autocomplete="off" oninput="alterarPosicao()" id="input_flex_flow" type="text"></div>        <div><span>Align-content:</span><input autocomplete="off" oninput="alterarPosicao()" id="input_align_content" type="text"></div>        <div><span>Flex-wrap:</span><input autocomplete="off" oninput="alterarPosicao()" id="input_flex_wrap" type="text"></div>        <div><span>Order:</span><input autocomplete="off" oninput="alterarPosicao()" id="input_order" type="text"></div>';
}