function voltar() {
    window.location.href = "../html.html";
}

function graficos_gerais() {
    window.location.href = "../../GraficosGerais/graficos_gerais.html"
}

const linguagem_atual = 'html';
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
            didOpen: () => {
                tela_cobrir.style = "display: flex;";
            },
            willClose: () => {
                tela_cobrir.style = "display: none";
                window.location.href = "../../index.html";
            }
        });
    }

    AtualizarGraficos();
}




async function AtualizarGraficos() {
    var dados1 = await buscarUltimosDados();
    await gravarUltimosDados(dados1);
    
    var dados2 = await buscarDadosDoUsuario()
    await gravarDadosDoUsuario(dados2);
 
    criarGraficos();
}






async function buscarUltimosDados() {
    var dados;

    try {
        const response = await fetch(`/dados/ultimos/${idUsuario}/${linguagem_atual}`, { cache: 'no-store' });
    
        if (response.ok) {
            const data = await response.json();
            console.log(`Dados recebidos: ${JSON.stringify(data)}`);
    data.reverse();
            dados = data;
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    } catch (error) {
        console.error(`Erro na obtenção dos dados para o gráfico: ${error.message}`);
    }

    return dados;
}

async function buscarDadosDoUsuario() {
    var dados;

    try {
        const response = await fetch(`/dados/usuario/${idUsuario}/${linguagem_atual}`, { cache: 'no-store' });
    
        if (response.ok) {
            const data = await response.json();
            console.log(`Dados recebidos: ${JSON.stringify(data)}`);
            data.reverse();
            dados = data;
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    } catch (error) {
        console.error(`Erro na obtenção dos dados para o gráfico: ${error.message}`);
    }

    return dados;
}








var lista_gosta = [];
var lista_dificil = [];
async function gravarUltimosDados(dados) {

    if (!dados[6]) {
        lista_gosta[6] = 0;
        lista_dificil[6] = 0;
        if (!dados[5]) {
            lista_gosta[5] = 0;
            lista_dificil[5] = 0;
            if (!dados[4]) {
                lista_gosta[4] = 0;
                lista_dificil[4] = 0;
                if (!dados[3]) {
                    lista_gosta[3] = 0;
                    lista_dificil[3] = 0;
                    if (!dados[2]) {
                        lista_gosta[2] = 0;
                        lista_dificil[2] = 0;
                        if (!dados[1]) {
                            lista_gosta[1] = 0;
                            lista_dificil[1] = 0;
                            if (!dados[0]) {
                                lista_gosta[0] = 0;
                                lista_dificil[0] = 0;
                            } else {
                                lista_gosta[0] = dados[0].nota_aprecia;
                                
                                lista_dificil[0] = dados[0].nota_dificuldade;
                            }
                        } else {
                            lista_gosta[0] = dados[0].nota_aprecia;
                            lista_gosta[1] = dados[1].nota_aprecia;
                            
                            lista_dificil[0] = dados[0].nota_dificuldade;
                            lista_dificil[1] = dados[1].nota_dificuldade;
                        }
                    } else {
                        lista_gosta[0] = dados[0].nota_aprecia;
                        lista_gosta[1] = dados[1].nota_aprecia;
                        lista_gosta[2] = dados[2].nota_aprecia;
                        
                        lista_dificil[0] = dados[0].nota_dificuldade;
                        lista_dificil[1] = dados[1].nota_dificuldade;
                        lista_dificil[2] = dados[2].nota_dificuldade;
                    }
                } else {
                    lista_gosta[0] = dados[0].nota_aprecia;
                    lista_gosta[1] = dados[1].nota_aprecia;
                    lista_gosta[2] = dados[2].nota_aprecia;
                    lista_gosta[3] = dados[3].nota_aprecia;
                    
                    lista_dificil[0] = dados[0].nota_dificuldade;
                    lista_dificil[1] = dados[1].nota_dificuldade;
                    lista_dificil[2] = dados[2].nota_dificuldade;
                    lista_dificil[3] = dados[3].nota_dificuldade;
                }
            } else {
                lista_gosta[0] = dados[0].nota_aprecia;
                lista_gosta[1] = dados[1].nota_aprecia;
                lista_gosta[2] = dados[2].nota_aprecia;
                lista_gosta[3] = dados[3].nota_aprecia;
                lista_gosta[4] = dados[4].nota_aprecia;
                
                lista_dificil[0] = dados[0].nota_dificuldade;
                lista_dificil[1] = dados[1].nota_dificuldade;
                lista_dificil[2] = dados[2].nota_dificuldade;
                lista_dificil[3] = dados[3].nota_dificuldade;
                lista_dificil[4] = dados[4].nota_dificuldade;
            }
        } else {
            lista_gosta[0] = dados[0].nota_aprecia;
            lista_gosta[1] = dados[1].nota_aprecia;
            lista_gosta[2] = dados[2].nota_aprecia;
            lista_gosta[3] = dados[3].nota_aprecia;
            lista_gosta[4] = dados[4].nota_aprecia;
            lista_gosta[5] = dados[5].nota_aprecia;
            
            lista_dificil[0] = dados[0].nota_dificuldade;
            lista_dificil[1] = dados[1].nota_dificuldade;
            lista_dificil[2] = dados[2].nota_dificuldade;
            lista_dificil[3] = dados[3].nota_dificuldade;
            lista_dificil[4] = dados[4].nota_dificuldade;
            lista_dificil[5] = dados[5].nota_dificuldade;
        }
    } else {
        document.getElementById("explicacao_0").innerHTML = "";
        lista_gosta[0] = dados[0].nota_aprecia;
        lista_gosta[1] = dados[1].nota_aprecia;
        lista_gosta[2] = dados[2].nota_aprecia;
        lista_gosta[3] = dados[3].nota_aprecia;
        lista_gosta[4] = dados[4].nota_aprecia;
        lista_gosta[5] = dados[5].nota_aprecia;
        lista_gosta[6] = dados[6].nota_aprecia;
        
        lista_dificil[0] = dados[0].nota_dificuldade;
        lista_dificil[1] = dados[1].nota_dificuldade;
        lista_dificil[2] = dados[2].nota_dificuldade;
        lista_dificil[3] = dados[3].nota_dificuldade;
        lista_dificil[4] = dados[4].nota_dificuldade;
        lista_dificil[5] = dados[5].nota_dificuldade;
        lista_dificil[6] = dados[6].nota_dificuldade;
    }

}


var gosta = 0;
var dificil = 0;
function gravarDadosDoUsuario(dados) {
    gosta = dados[0].nota_aprecia;
    dificil = dados[0].nota_dificuldade;
}










// GRAFICO
function criarGraficos() {

    const ctxAprecia = document.getElementById('chart_aprecia');
    const ctxDificuldade = document.getElementById('chart_dificuldade');

    new Chart(ctxAprecia, {
        type: 'bar',
        data: {
            labels: ['Nota 1', 'Nota 2', 'Nota 3', 'Nota 4', 'Nota 5', 'Nota 6', 'Nota 7', 'Sua Nota'],
            datasets: [{
                label: 'Últimas Notas: Gosto Pessoal',
                color: 'white',
                data: [lista_gosta[0], lista_gosta[1], lista_gosta[2], lista_gosta[3], lista_gosta[4], lista_gosta[5], lista_gosta[6], gosta],
                borderWidth: [3, 3, 3, 3, 3, 3, 3, 6],
                borderColor: '#B2A59F',
                backgroundColor: '#002C2F',
                hoverBackgroundColor: '#B2A59F',
                hoverBorderWidth: 0
            }]
        },
        options: {
            scales: {
                y: {
                    suggestedMin: 0,
                    suggestedMax: 10,
                    ticks: {
                        color: 'white',
                        font: {
                            size: 15
                        }
                    },
                    grid: {
                        color: '#075fa1'
                    }
                },
                x: {
                    ticks: {
                        color: 'white',
                        font: {
                            size: 15
                        }
                    },
                    grid: {
                        color: 'transparent'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'white',
                        font: {
                            size: 22
                        }
                    }
                }
            }
        }
    });

    new Chart(ctxDificuldade, {
        type: 'bar',
        data: {
            labels: ['Nota 1', 'Nota 2', 'Nota 3', 'Nota 4', 'Nota 5', 'Nota 6', 'Nota 7', 'Sua Nota'],
            datasets: [{
                label: 'Últimas Notas: Dificuldade',
                color: 'white',
                data: [lista_dificil[0], lista_dificil[1], lista_dificil[2], lista_dificil[3], lista_dificil[4], lista_dificil[5], lista_dificil[6], dificil],
                borderWidth: [3, 3, 3, 3, 3, 3, 3, 6],
                borderColor: '#B2A59F',
                backgroundColor: '#002C2F',
                hoverBackgroundColor: '#B2A59F',
                hoverBorderWidth: 0
            }]
        },
        options: {
            scales: {
                y: {
                    suggestedMin: 0,
                    suggestedMax: 10,
                    ticks: {
                        color: 'white',
                        font: {
                            size: 15
                        }
                    },
                    grid: {
                        color: '#075fa1'
                    }
                },
                x: {
                    ticks: {
                        color: 'white',
                        font: {
                            size: 15
                        }
                    },
                    grid: {
                        color: 'transparent'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'white',
                        font: {
                            size: 22
                        }
                    }
                }
            }
        }
    });

}