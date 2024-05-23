function voltar() {
    window.location.href = "../javascript.html";
}

const linguagem_atual = 'desafioJavascript';
var idUsuario = sessionStorage.ID_USUARIO;

async function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var nome_usuario = document.getElementById("nome_usuario");

    if (email == null || email == 'undefined' || nome == null || nome == 'undefined') {
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
    } else {
        finalizou()
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
        document.getElementById("input_codigo").style.display = "none";
        document.getElementById("pergunta").style = "color: green; font-size: 3.5vw";
        document.getElementById("pergunta").innerHTML = "Parabéns, você venceu o desafio de JavaScript!";
    }
}





var fase = 1;
function verificar() {
    var codigo = document.getElementById("input_codigo");
    var entrada = document.getElementById("entrada");
    var texto_saida_esperada = document.getElementById("texto_saida_esperada");
    var saida = document.getElementById("saida");

    if (fase == 1) {
        // FASE 1 
        var vetor = [Math.round(Math.random() * 10), Math.round(Math.random() * 10), Math.round(Math.random() * 10), Math.round(Math.random() * 10), Math.round(Math.random() * 10)];
        var resultado_esperado = (vetor[0] + vetor[1] + vetor[2] + vetor[3] + vetor[4]) / 5;

        entrada.innerHTML = `Entrada: vetor[${vetor[0]}, ${vetor[1]}, ${vetor[2]}, ${vetor[3]}, ${vetor[4]}]`;
        texto_saida_esperada.innerHTML = `A saída deve ser identica, saída esperada: <b style="text-decoration: underline; font-weight: 900;">${resultado_esperado}</b>`;

        try {
            var fase1 = new Function('vetor', codigo.value);
            var resultado = fase1(vetor);

            saida.innerHTML = `Saída: <span style="text-decoration: underline">${resultado}</span>`;
        } catch (error) {
            saida.innerHTML = `Saída: <b style="color: red; text-decoration: underline">erro</b>: ${error}`;
        }

        if (resultado == resultado_esperado) {
            acertou(resultado);
            document.getElementById("pergunta").innerHTML = "Você está na segunda fase, nesta fase a sua função é somar todos os valores pares do vetor e retornar o resultado<br><br>Digite o seu código abaixo:";
        }

    } else if (fase == 2) {
        // FASE 2
        var vetor = [Math.round(Math.random() * 10), Math.round(Math.random() * 10), Math.round(Math.random() * 10), Math.round(Math.random() * 10), Math.round(Math.random() * 10)];
        var resultado_esperado = 0;
        for (var contador = 0; contador < vetor.length; contador++) {
            if (vetor[contador] % 2 == 0) {
                resultado_esperado += vetor[contador];
            }
        }

        entrada.innerHTML = `Entrada: vetor[${vetor[0]}, ${vetor[1]}, ${vetor[2]}, ${vetor[3]}, ${vetor[4]}]`;
        texto_saida_esperada.innerHTML = `A saída deve ser identica, saída esperada: <b style="text-decoration: underline; font-weight: 900;">${resultado_esperado}</b>`;

        try {
            var fase2 = new Function('vetor', codigo.value);
            var resultado = fase2(vetor);

            saida.innerHTML = `Saída: <span style="text-decoration: underline">${resultado}</span>`;
        } catch (error) {
            saida.innerHTML = `Saída: <b style="color: red; text-decoration: underline">erro</b>: ${error}`;
        }

        if (resultado === resultado_esperado) {
            acertou(resultado);
            document.getElementById("pergunta").innerHTML = "Você está na terceira fase, nesta fase a sua função é descobrir e retornar o segundo maior número do vetor<br><br>Digite o seu código abaixo:";
            codigo.innerHTML = "";
        }

    } else if (fase == 3) {
        // FASE 3
        var vetor = [Math.round(Math.random() * 10), Math.round(Math.random() * 10), Math.round(Math.random() * 10), Math.round(Math.random() * 10), Math.round(Math.random() * 10)];
        var resultado_esperado;
        var maior_valor = vetor[0];
        var segundo_maior = vetor[0];
        for (var contador = 0; contador < vetor.length; contador++) {
            if (vetor[contador] > maior_valor) {
                maior_valor = vetor[contador];
            }
        }

        for (var contador = 0; contador < vetor.length; contador++) {
            if (vetor[contador] > segundo_maior && vetor[contador] != maior_valor) {
                segundo_maior = vetor[contador];
            }
        }

        resultado_esperado = segundo_maior;

        entrada.innerHTML = `Entrada: vetor[${vetor[0]}, ${vetor[1]}, ${vetor[2]}, ${vetor[3]}, ${vetor[4]}]`;
        texto_saida_esperada.innerHTML = `A saída deve ser identica, saída esperada: <b style="text-decoration: underline; font-weight: 900;">${resultado_esperado}</b>`;

        try {
            var fase2 = new Function('vetor', codigo.value);
            var resultado = fase2(vetor);

            saida.innerHTML = `Saída: <span style="text-decoration: underline">${resultado}</span>`;
        } catch (error) {
            saida.innerHTML = `Saída: <b style="color: red; text-decoration: underline">erro</b>: ${error}`;
        }

        if (resultado == resultado_esperado) {
            venceu();
        }

    }

}

function acertou(resultado) {
    Swal.fire({
        imageUrl: "../../assets/Icons/foto_check.png",
        imageHeight: 130,
        title: `Fase ${fase} concluída`,
        text: "Próxima fase...",
        width: 400,
        color: "black",
        willClose: () => {
            // window.location.href = "../../index.html";
        }
    });
    fase++;
}


function venceu() {
    Swal.fire({
        imageUrl: "../../assets/Icons/foto_check.png",
        imageHeight: 130,
        title: "Parabéns",
        text: "Você finalizou o desafio de JavaScript!!",
        width: 400,
        color: "black",
        willClose: () => {
            finalizou();
        }
    });
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
}