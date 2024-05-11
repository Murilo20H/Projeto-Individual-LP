var csharp_gosta;
var java_gosta;
var javascript_gosta;
var html_gosta;
var css_gosta;
var sql_gosta;



function buscarMediaDados(linguagem) {

    fetch(`/dados/media/${linguagem}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                gravarMediaDados(resposta);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    }).catch(function (error) {
        console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });

}



function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var id = sessionStorage.ID_USUARIO
    
    var nome_usuario = document.getElementById("nome_usuario");
    
    if (email != null && email != 'undefined' && nome != null && nome != 'undefined') {
        nome_usuario.innerHTML = nome;
    }
    // else {
        //     Swal.fire({
            //         imageUrl: "../../assets/Icons/icon_error.png",
            //         imageHeight: 130,
            //         title: "Erro no login",
            //         text: "Por favor tente entrar novamente",
            //         width: 400,
            //         color: "black",
            //         didOpen: () => {
                //             tela_cobrir.style = "display: flex;";
                //         },
                //         willClose: () => {
                    //             tela_cobrir.style = "display: none";
                    //             window.location.href = "../../index.html";
                    //         }
                    //     });
                    // }
    atualizarGraficos(id);
}
                
                
                
                
function atualizarGraficos(id) {
    var csharp = buscarMediaDados('csharp');
    csharp_gosta = csharp[0].nota_aprecia;
    csharp_dificil = csharp[0].nota_dificil;

    var java = buscarMediaDados('java');
    java_gosta = java[0].nota_aprecia;
    java_dificil = java[0].nota_dificil;

    var javascript = buscarMediaDados('javascript');
    javascript_gosta = javascript[0].nota_aprecia;
    javascript_dificil = javascript[0].nota_dificil;

    var html = buscarMediaDados('html');
    html_gosta = html[0].nota_aprecia;
    html_dificil = html[0].nota_dificil;

    var css = buscarMediaDados('css');
    css_gosta = css[0].nota_aprecia;
    css_dificil = css[0].nota_dificil;

    var sql = buscarMediaDados('sql');
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