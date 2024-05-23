function abaixar() {
    window.location.href = "#parte_detalhes";
}

function sair() {
    window.location.href = "../index.html";
}

function sobre_mim() {
    window.location.href = "../Sobre Mim/sobre_mim.html";
}

function desafio() {
    window.location.href = "DesafioCSS/desafio_css.html";
}

const linguagem_atual = 'css';
var id = sessionStorage.ID_USUARIO;

async function validarSessao() {
    var carregar = false
    var dados;
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    if (email == null && nome == null) {
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
                // window.location.href = "../index.html";
            }
        });
    }

    try {
        const response = await fetch(`/dadosLinguagem/usuario/${id}/${linguagem_atual}`, { cache: 'no-store' });

        if (response.ok) {
            var resposta = await response.json();
            resposta.reverse();
            carregar = true;
            dados = resposta;
        } else {
            console.log(`Não encontrou dados na API: ${response.statusText}`);
        }
    } catch (error) {
        console.error(`Erro na obtenção dos dados para o gráfico: ${error.message}`);
    }

    if (carregar) {
        var aprecia_votada = dados[0].nota_aprecia;
        var dificuldade_votada = dados[0].nota_dificuldade;
        await carregarNotas(aprecia_votada, dificuldade_votada);
    }
}



async function verSeJaVotou() {
    var existe = false;
    var dados;

    try {
        const response = await fetch(`/dadosLinguagem/usuario/${id}/${linguagem_atual}`, { cache: 'no-store' });

        if (response.ok) {
            var resposta = await response.json();
            resposta.reverse();
            existe = true;
            dados = resposta;
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    } catch (error) {
        console.error(`Erro na obtenção dos dados para o gráfico: ${error.message}`);
    }
    
    if (existe) {
        await apagar();
        await carregarNotas(nota_aprecia, nota_dificuldade);
        await votar();
    } else {
        votar()
    }
}




async function carregarNotas(aprecia, dificuldade) {

    if (aprecia == 1) {
        await aprecia1()
    } else if (aprecia == 2) {
        await aprecia2()
    } else if (aprecia == 3) {
        await aprecia3()
    } else if (aprecia == 4) {
        await aprecia4()
    } else if (aprecia == 5) {
        await aprecia5()
    } else if (aprecia == 6) {
        await aprecia6()
    } else if (aprecia == 7) {
        await aprecia7()
    } else if (aprecia == 8) {
        await aprecia8()
    } else if (aprecia == 9) {
        await aprecia9()
    } else if (aprecia == 10) {
        await aprecia10()
    } else {
        console.error(`Erro ao tentar encontrar a nota de gosto pessoal`);
    }

    if (dificuldade == 1) {
        await dificuldade1()
    } else if (dificuldade == 2) {
        await dificuldade2()
    } else if (dificuldade == 3) {
        await dificuldade3()
    } else if (dificuldade == 4) {
        await dificuldade4()
    } else if (dificuldade == 5) {
        await dificuldade5()
    } else if (dificuldade == 6) {
        await dificuldade6()
    } else if (dificuldade == 7) {
        await dificuldade7()
    } else if (dificuldade == 8) {
        await dificuldade8()
    } else if (dificuldade == 9) {
        await dificuldade9()
    } else if (dificuldade == 10) {
        await dificuldade10()
    } else {
        console.error(`Erro ao tentar encontrar a nota de dificuldade`);
    }
}






async function enviar() {

    if (nota_aprecia == 0 && nota_dificuldade == 0) {
        Swal.fire({
            imageUrl: "../assets/Icons/icon_error.png",
            imageHeight: 130,
            title: "Campos inválidos",
            text: "Por favor, dê pelo menos uma nota",
            width: 400,
            color: "black",
            didOpen: () => {
                tela_cobrir.style = "display: flex;";
            },
            willClose: () => {
                tela_cobrir.style = "display: none";
            }
        });
    } else if (nota_aprecia != 0 && nota_dificuldade != 0) {
        await estaCerto();

    } else if (nota_aprecia != 0 || nota_dificuldade != 0) {
        Swal.fire({
            imageUrl: "../assets/Icons/icon_alert.png",
            imageHeight: 130,
            title: "Nota não enviada",
            text: "Por favor, vote nas duas classificações",
            width: 400,
            color: "black",
            didOpen: () => {
                tela_cobrir.style = "display: flex;";
            },
            willClose: () => {
                tela_cobrir.style = "display: none";
            }
        });
    } else {
        Swal.fire({
            imageUrl: "../assets/Icons/icon_error.png",
            imageHeight: 130,
            title: "Erro",
            text: "Por favor recarregue a página e vote novamente",
            width: 400,
            color: "black",
            didOpen: () => {
                tela_cobrir.style = "display: flex;";
            },
            willClose: () => {
                tela_cobrir.style = "display: none";
            }
        });
    }
}


async function estaCerto() {

    return new Promise(function (resolve, reject) {
        Swal.fire({
            imageUrl: "../assets/Icons/foto_check.png",
            imageHeight: 130,
            title: "Duas notas enviadas",
            text: "Ao alterar uma nota, envie novamente",
            width: 400,
            color: "green",
            didOpen: () => {
                tela_cobrir.style = "display: flex;";
            },
            willClose: () => {
                tela_cobrir.style = "display: none";
                certo = true;
                verSeJaVotou();
                resolve()
            }
        });
    });
}





async function votar() {

    try {
        const response = await fetch(`/dadosLinguagem/criarNotas/${id}/${nota_aprecia}/${nota_dificuldade}/${linguagem_atual}`, {
            cache: 'no-store',
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log(`Dados recebidos: ${JSON.stringify(data)}`);
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    } catch (error) {
        console.error(`Erro na obtenção dos dados para o gráfico: ${error.message}`);
    }
}




async function apagar() {
    try {
        const response = await fetch(`/dadosLinguagem/apagarNotas/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.ok) {
            console.log(`Dados apagados: ${JSON.stringify(response)}`);
        } else if (response.status === 404) {
            window.alert("Deu 404!");
        } else {
            throw new Error(`Houve um erro ao tentar apagar as notas antigas! Código da resposta: ${response.status}`);
        }
    } catch (error) {
        console.error(`#ERRO: ${error.message}`);
    }
}





async function graficos() {
    return new Promise(function (resolve, reject) {
        if (nota_aprecia == 0 || nota_dificuldade == 0) {
            Swal.fire({
                imageUrl: "../assets/Icons/icon_error.png",
                imageHeight: 130,
                title: "Vote nas duas classificações",
                width: 400,
                color: "black",
                didOpen: () => {
                    tela_cobrir.style = "display: flex;";
                },
                willClose: () => {
                    tela_cobrir.style = "display: none";
                }
            });
        } else {
            window.location.href = "GraficoCSS/grafico_css.html";
        }
        resolve()
    });

}









var nota_aprecia = 0;
// FUNCÕES APRECIA

function aprecia1() {
    nota_aprecia = 1;
    gosta2.style = "transition: opacity 0.8s; opacity: .2;";
    gosta3.style = "transition: opacity 0.8s; opacity: .2;";
    gosta4.style = "transition: opacity 0.8s; opacity: .2;";
    gosta5.style = "transition: opacity 0.8s; opacity: .2;";
    gosta6.style = "transition: opacity 0.8s; opacity: .2;";
    gosta7.style = "transition: opacity 0.8s; opacity: .2;";
    gosta8.style = "transition: opacity 0.8s; opacity: .2;";
    gosta9.style = "transition: opacity 0.8s; opacity: .2;";
    gosta10.style = "transition: opacity 0.8s; opacity: .2;";
    gosta1.style = "transition: opacity 0.8s; opacity: 1;";
}

function aprecia2() {
    nota_aprecia = 2;
    gosta1.style = "transition: opacity 0.8s; opacity: .2;";
    gosta3.style = "transition: opacity 0.8s; opacity: .2;";
    gosta4.style = "transition: opacity 0.8s; opacity: .2;";
    gosta5.style = "transition: opacity 0.8s; opacity: .2;";
    gosta6.style = "transition: opacity 0.8s; opacity: .2;";
    gosta7.style = "transition: opacity 0.8s; opacity: .2;";
    gosta8.style = "transition: opacity 0.8s; opacity: .2;";
    gosta9.style = "transition: opacity 0.8s; opacity: .2;";
    gosta10.style = "transition: opacity 0.8s; opacity: .2;";
    gosta2.style = "transition: opacity 0.8s; opacity: 1;";
}

function aprecia3() {
    nota_aprecia = 3;
    gosta1.style = "transition: opacity 0.8s; opacity: .2;";
    gosta2.style = "transition: opacity 0.8s; opacity: .2;";
    gosta4.style = "transition: opacity 0.8s; opacity: .2;";
    gosta5.style = "transition: opacity 0.8s; opacity: .2;";
    gosta6.style = "transition: opacity 0.8s; opacity: .2;";
    gosta7.style = "transition: opacity 0.8s; opacity: .2;";
    gosta8.style = "transition: opacity 0.8s; opacity: .2;";
    gosta9.style = "transition: opacity 0.8s; opacity: .2;";
    gosta10.style = "transition: opacity 0.8s; opacity: .2;";
    gosta3.style = "transition: opacity 0.8s; opacity: 1;";
}

function aprecia4() {
    nota_aprecia = 4;
    gosta1.style = "transition: opacity 0.8s; opacity: .2;";
    gosta2.style = "transition: opacity 0.8s; opacity: .2;";
    gosta3.style = "transition: opacity 0.8s; opacity: .2;";
    gosta5.style = "transition: opacity 0.8s; opacity: .2;";
    gosta6.style = "transition: opacity 0.8s; opacity: .2;";
    gosta7.style = "transition: opacity 0.8s; opacity: .2;";
    gosta8.style = "transition: opacity 0.8s; opacity: .2;";
    gosta9.style = "transition: opacity 0.8s; opacity: .2;";
    gosta10.style = "transition: opacity 0.8s; opacity: .2;";
    gosta4.style = "transition: opacity 0.8s; opacity: 1;";
}

function aprecia5() {
    nota_aprecia = 5;
    gosta1.style = "transition: opacity 0.8s; opacity: .2;";
    gosta2.style = "transition: opacity 0.8s; opacity: .2;";
    gosta3.style = "transition: opacity 0.8s; opacity: .2;";
    gosta4.style = "transition: opacity 0.8s; opacity: .2;";
    gosta6.style = "transition: opacity 0.8s; opacity: .2;";
    gosta7.style = "transition: opacity 0.8s; opacity: .2;";
    gosta8.style = "transition: opacity 0.8s; opacity: .2;";
    gosta9.style = "transition: opacity 0.8s; opacity: .2;";
    gosta10.style = "transition: opacity 0.8s; opacity: .2;";
    gosta5.style = "transition: opacity 0.8s; opacity: 1;";
}

function aprecia6() {
    nota_aprecia = 6;
    gosta1.style = "transition: opacity 0.8s; opacity: .2;";
    gosta2.style = "transition: opacity 0.8s; opacity: .2;";
    gosta3.style = "transition: opacity 0.8s; opacity: .2;";
    gosta4.style = "transition: opacity 0.8s; opacity: .2;";
    gosta5.style = "transition: opacity 0.8s; opacity: .2;";
    gosta7.style = "transition: opacity 0.8s; opacity: .2;";
    gosta8.style = "transition: opacity 0.8s; opacity: .2;";
    gosta9.style = "transition: opacity 0.8s; opacity: .2;";
    gosta10.style = "transition: opacity 0.8s; opacity: .2;";
    gosta6.style = "transition: opacity 0.8s; opacity: 1;";
}

function aprecia7() {
    nota_aprecia = 7;
    gosta1.style = "transition: opacity 0.8s; opacity: .2;";
    gosta2.style = "transition: opacity 0.8s; opacity: .2;";
    gosta3.style = "transition: opacity 0.8s; opacity: .2;";
    gosta4.style = "transition: opacity 0.8s; opacity: .2;";
    gosta5.style = "transition: opacity 0.8s; opacity: .2;";
    gosta6.style = "transition: opacity 0.8s; opacity: .2;";
    gosta8.style = "transition: opacity 0.8s; opacity: .2;";
    gosta9.style = "transition: opacity 0.8s; opacity: .2;";
    gosta10.style = "transition: opacity 0.8s; opacity: .2;";
    gosta7.style = "transition: opacity 0.8s; opacity: 1;";
}

function aprecia8() {
    nota_aprecia = 8;
    gosta1.style = "transition: opacity 0.8s; opacity: .2;";
    gosta2.style = "transition: opacity 0.8s; opacity: .2;";
    gosta3.style = "transition: opacity 0.8s; opacity: .2;";
    gosta4.style = "transition: opacity 0.8s; opacity: .2;";
    gosta5.style = "transition: opacity 0.8s; opacity: .2;";
    gosta6.style = "transition: opacity 0.8s; opacity: .2;";
    gosta7.style = "transition: opacity 0.8s; opacity: .2;";
    gosta9.style = "transition: opacity 0.8s; opacity: .2;";
    gosta10.style = "transition: opacity 0.8s; opacity: .2;";
    gosta8.style = "transition: opacity 0.8s; opacity: 1;";
}

function aprecia9() {
    nota_aprecia = 9;
    gosta1.style = "transition: opacity 0.8s; opacity: .2;";
    gosta2.style = "transition: opacity 0.8s; opacity: .2;";
    gosta3.style = "transition: opacity 0.8s; opacity: .2;";
    gosta4.style = "transition: opacity 0.8s; opacity: .2;";
    gosta5.style = "transition: opacity 0.8s; opacity: .2;";
    gosta6.style = "transition: opacity 0.8s; opacity: .2;";
    gosta7.style = "transition: opacity 0.8s; opacity: .2;";
    gosta8.style = "transition: opacity 0.8s; opacity: .2;";
    gosta10.style = "transition: opacity 0.8s; opacity: .2;";
    gosta9.style = "transition: opacity 0.8s; opacity: 1;";
}

function aprecia10() {
    nota_aprecia = 10;
    gosta1.style = "transition: opacity 0.8s; opacity: .2;";
    gosta2.style = "transition: opacity 0.8s; opacity: .2;";
    gosta3.style = "transition: opacity 0.8s; opacity: .2;";
    gosta4.style = "transition: opacity 0.8s; opacity: .2;";
    gosta5.style = "transition: opacity 0.8s; opacity: .2;";
    gosta6.style = "transition: opacity 0.8s; opacity: .2;";
    gosta7.style = "transition: opacity 0.8s; opacity: .2;";
    gosta8.style = "transition: opacity 0.8s; opacity: .2;";
    gosta9.style = "transition: opacity 0.8s; opacity: .2;";
    gosta10.style = "transition: opacity 0.8s; opacity: 1;";
}


var nota_dificuldade = 0;
// FUNÇÕES DIFICULDADE
function dificuldade1() {
    nota_dificuldade = 1;
    dificil10.style = "transition: opacity 0.8s; opacity: .2;";
    dificil2.style = "transition: opacity 0.8s; opacity: .2;";
    dificil3.style = "transition: opacity 0.8s; opacity: .2;";
    dificil4.style = "transition: opacity 0.8s; opacity: .2;";
    dificil5.style = "transition: opacity 0.8s; opacity: .2;";
    dificil6.style = "transition: opacity 0.8s; opacity: .2;";
    dificil7.style = "transition: opacity 0.8s; opacity: .2;";
    dificil8.style = "transition: opacity 0.8s; opacity: .2;";
    dificil9.style = "transition: opacity 0.8s; opacity: .2;";
    dificil1.style = "transition: opacity 0.8s; opacity: 1;";
}

function dificuldade2() {
    nota_dificuldade = 2;
    dificil1.style = "transition: opacity 0.8s; opacity: .2;";
    dificil3.style = "transition: opacity 0.8s; opacity: .2;";
    dificil4.style = "transition: opacity 0.8s; opacity: .2;";
    dificil5.style = "transition: opacity 0.8s; opacity: .2;";
    dificil6.style = "transition: opacity 0.8s; opacity: .2;";
    dificil7.style = "transition: opacity 0.8s; opacity: .2;";
    dificil8.style = "transition: opacity 0.8s; opacity: .2;";
    dificil9.style = "transition: opacity 0.8s; opacity: .2;";
    dificil10.style = "transition: opacity 0.8s; opacity: .2;";
    dificil2.style = "transition: opacity 0.8s; opacity: 1;";
}

function dificuldade3() {
    nota_dificuldade = 3;
    dificil1.style = "transition: opacity 0.8s; opacity: .2;";
    dificil2.style = "transition: opacity 0.8s; opacity: .2;";
    dificil4.style = "transition: opacity 0.8s; opacity: .2;";
    dificil5.style = "transition: opacity 0.8s; opacity: .2;";
    dificil6.style = "transition: opacity 0.8s; opacity: .2;";
    dificil7.style = "transition: opacity 0.8s; opacity: .2;";
    dificil8.style = "transition: opacity 0.8s; opacity: .2;";
    dificil9.style = "transition: opacity 0.8s; opacity: .2;";
    dificil10.style = "transition: opacity 0.8s; opacity: .2;";
    dificil3.style = "transition: opacity 0.8s; opacity: 1;";
}

function dificuldade4() {
    nota_dificuldade = 4;
    dificil1.style = "transition: opacity 0.8s; opacity: .2;";
    dificil2.style = "transition: opacity 0.8s; opacity: .2;";
    dificil3.style = "transition: opacity 0.8s; opacity: .2;";
    dificil5.style = "transition: opacity 0.8s; opacity: .2;";
    dificil6.style = "transition: opacity 0.8s; opacity: .2;";
    dificil7.style = "transition: opacity 0.8s; opacity: .2;";
    dificil8.style = "transition: opacity 0.8s; opacity: .2;";
    dificil9.style = "transition: opacity 0.8s; opacity: .2;";
    dificil10.style = "transition: opacity 0.8s; opacity: .2;";
    dificil4.style = "transition: opacity 0.8s; opacity: 1;";
}

function dificuldade5() {
    nota_dificuldade = 5;
    dificil1.style = "transition: opacity 0.8s; opacity: .2;";
    dificil2.style = "transition: opacity 0.8s; opacity: .2;";
    dificil3.style = "transition: opacity 0.8s; opacity: .2;";
    dificil4.style = "transition: opacity 0.8s; opacity: .2;";
    dificil6.style = "transition: opacity 0.8s; opacity: .2;";
    dificil7.style = "transition: opacity 0.8s; opacity: .2;";
    dificil8.style = "transition: opacity 0.8s; opacity: .2;";
    dificil9.style = "transition: opacity 0.8s; opacity: .2;";
    dificil10.style = "transition: opacity 0.8s; opacity: .2;";
    dificil5.style = "transition: opacity 0.8s; opacity: 1;";
}

function dificuldade6() {
    nota_dificuldade = 6;
    dificil1.style = "transition: opacity 0.8s; opacity: .2;";
    dificil2.style = "transition: opacity 0.8s; opacity: .2;";
    dificil3.style = "transition: opacity 0.8s; opacity: .2;";
    dificil4.style = "transition: opacity 0.8s; opacity: .2;";
    dificil5.style = "transition: opacity 0.8s; opacity: .2;";
    dificil7.style = "transition: opacity 0.8s; opacity: .2;";
    dificil8.style = "transition: opacity 0.8s; opacity: .2;";
    dificil9.style = "transition: opacity 0.8s; opacity: .2;";
    dificil10.style = "transition: opacity 0.8s; opacity: .2;";
    dificil6.style = "transition: opacity 0.8s; opacity: 1;";
}

function dificuldade7() {
    nota_dificuldade = 7;
    dificil1.style = "transition: opacity 0.8s; opacity: .2;";
    dificil2.style = "transition: opacity 0.8s; opacity: .2;";
    dificil3.style = "transition: opacity 0.8s; opacity: .2;";
    dificil4.style = "transition: opacity 0.8s; opacity: .2;";
    dificil5.style = "transition: opacity 0.8s; opacity: .2;";
    dificil6.style = "transition: opacity 0.8s; opacity: .2;";
    dificil8.style = "transition: opacity 0.8s; opacity: .2;";
    dificil9.style = "transition: opacity 0.8s; opacity: .2;";
    dificil10.style = "transition: opacity 0.8s; opacity: .2;";
    dificil7.style = "transition: opacity 0.8s; opacity: 1;";
}

function dificuldade8() {
    nota_dificuldade = 8;
    dificil1.style = "transition: opacity 0.8s; opacity: .2;";
    dificil2.style = "transition: opacity 0.8s; opacity: .2;";
    dificil3.style = "transition: opacity 0.8s; opacity: .2;";
    dificil4.style = "transition: opacity 0.8s; opacity: .2;";
    dificil5.style = "transition: opacity 0.8s; opacity: .2;";
    dificil6.style = "transition: opacity 0.8s; opacity: .2;";
    dificil7.style = "transition: opacity 0.8s; opacity: .2;";
    dificil9.style = "transition: opacity 0.8s; opacity: .2;";
    dificil10.style = "transition: opacity 0.8s; opacity: .2;";
    dificil8.style = "transition: opacity 0.8s; opacity: 1;";
}

function dificuldade9() {
    nota_dificuldade = 9;
    dificil1.style = "transition: opacity 0.8s; opacity: .2;";
    dificil2.style = "transition: opacity 0.8s; opacity: .2;";
    dificil3.style = "transition: opacity 0.8s; opacity: .2;";
    dificil4.style = "transition: opacity 0.8s; opacity: .2;";
    dificil5.style = "transition: opacity 0.8s; opacity: .2;";
    dificil6.style = "transition: opacity 0.8s; opacity: .2;";
    dificil7.style = "transition: opacity 0.8s; opacity: .2;";
    dificil8.style = "transition: opacity 0.8s; opacity: .2;";
    dificil10.style = "transition: opacity 0.8s; opacity: .2;";
    dificil9.style = "transition: opacity 0.8s; opacity: 1;";
}

function dificuldade10() {
    nota_dificuldade = 10;
    dificil1.style = "transition: opacity 0.8s; opacity: .2;";
    dificil2.style = "transition: opacity 0.8s; opacity: .2;";
    dificil3.style = "transition: opacity 0.8s; opacity: .2;";
    dificil4.style = "transition: opacity 0.8s; opacity: .2;";
    dificil5.style = "transition: opacity 0.8s; opacity: .2;";
    dificil6.style = "transition: opacity 0.8s; opacity: .2;";
    dificil7.style = "transition: opacity 0.8s; opacity: .2;";
    dificil8.style = "transition: opacity 0.8s; opacity: .2;";
    dificil9.style = "transition: opacity 0.8s; opacity: .2;";
    dificil10.style = "transition: opacity 0.8s; opacity: 1;";
}