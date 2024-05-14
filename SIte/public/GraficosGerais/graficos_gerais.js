function graficos_csharp() {
    window.location.href = "../CSharp/GraficoCsharp/grafico_csharp.html"
}

function graficos_java() {
    window.location.href = "../Java/GraficoJava/grafico_java.html"
}

function graficos_javascript() {
    window.location.href = "../Javascript/GraficoJavascript/grafico_javascript.html"
}

function graficos_html() {
    window.location.href = "../LinguagemHTML/GraficoHTML/grafico_html.html"
}

function graficos_css() {
    window.location.href = "../LinguagemCSS/GraficoCSS/grafico_css.html"
}

function graficos_sql() {
    window.location.href = "../SQL/GraficoSQL/grafico_sql.html"
}


var csharp_gosta;
var java_gosta;
var javascript_gosta;
var html_gosta;
var css_gosta;
var sql_gosta;

var csharp_dificil;
var java_dificil;
var javascript_dificil;
var html_dificil;
var css_dificil;
var sql_dificil;


function buscarMediaDados(linguagem) {
    var dados;

    fetch(`/dados/media/${linguagem}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                dados = resposta;
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    }).catch(function (error) {
        console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
    
    gravarMediaDados(dados);
}

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
    atualizarGraficos();
}




async function atualizarGraficos() {
    var csharp = await buscarMediaDados('csharp');
    csharp_gosta = csharp[0].nota_aprecia;
    csharp_dificil = csharp[0].nota_dificil;

    var java = await buscarMediaDados('java');
    java_gosta = java[0].nota_aprecia;
    java_dificil = java[0].nota_dificil;

    var javascript = await buscarMediaDados('javascript');
    javascript_gosta = javascript[0].nota_aprecia;
    javascript_dificil = javascript[0].nota_dificil;

    var html = await buscarMediaDados('html');
    html_gosta = html[0].nota_aprecia;
    html_dificil = html[0].nota_dificil;

    var css = await buscarMediaDados('css');
    css_gosta = css[0].nota_aprecia;
    css_dificil = css[0].nota_dificil;

    var sql = await buscarMediaDados('sql');
    sql_gosta = sql[0].nota_aprecia;
    sql_dificil = sql[0].nota_dificil;

    criarGraficos();
}









// GRAFICO
function criarGraficos() {

    const ctxAprecia = document.getElementById('chart_aprecia');
    const ctxDificuldade = document.getElementById('chart_dificuldade');

    new Chart(ctxAprecia, {
        type: 'bar',
        data: {
            labels: ['CSharp', 'Java', 'JavaScript', 'HTML', 'CSS', 'SQL'],
            datasets: [{
                label: 'Médias das Notas: Gosto Pessoal',
                color: 'white',
                data: [csharp_gosta, java_gosta, javascript_gosta, html_gosta, css_gosta, sql_gosta],
                borderWidth: 3,
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
            labels: ['CSharp', 'Java', 'JavaScript', 'HTML', 'CSS', 'SQL'],
            datasets: [{
                label: 'Médias das Notas: Dificuldade',
                color: 'white',
                data: [csharp_dificil, java_dificil, javascript_dificil, html_dificil, css_dificil, sql_dificil],
                borderWidth: 3,
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