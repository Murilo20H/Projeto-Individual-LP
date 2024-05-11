// HOME ANTES DE LOGAR
function voltar() {
    window.location.href = "../csharp.html";
}



function validarSessao() {
    // var email = sessionStorage.EMAIL_USUARIO;
    // var nome = sessionStorage.NOME_USUARIO;

    // var nome_usuario = document.getElementById("nome_usuario");

    // if (email != null && email != undefined && nome != null && nome != undefined) {
    //     nome_usuario.innerHTML = nome;
    // } else {
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
}








// GRAFICO
const ctxAprecia = document.getElementById('chart_aprecia');
const ctxDificuldade = document.getElementById('chart_dificuldade');

new Chart(ctxAprecia, {
    type: 'bar',
    data: {
        labels: ['Nota 1', 'Nota 2', 'Nota 3', 'Nota 4', 'Nota 5', 'Nota 6', 'Nota 7', 'Sua Nota'],
        datasets: [{
            label: 'Últimas Notas: Gosto Pessoal',
            color: 'white',
            data: [10, 7, 8, 4, 10, 9, 4, 5],
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
                ticks : {
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
            data: [10, 7, 8, 4, 10, 9, 4, 5],
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
                ticks : {
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












































// b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

//     let proximaAtualizacao;

//     window.onload = exibirAquariosDoUsuario();

//     function exibirAquariosDoUsuario() {
//         var aquarios = JSON.parse(sessionStorage.AQUARIOS);
//         aquarios.forEach(item => {
//             document.getElementById("btnAquario").innerHTML += `
//             <button class="btn-chart" onclick="exibirAquario(${item.id})" id="btnAquario${item.id}">${item.descricao}</button>
//             `

//             document.getElementById("graficos").innerHTML += `
//                 <div id="grafico${item.id}" class="display-none">
//                     <h3 class="tituloGraficos">
//                         <span id="tituloAquario${item.id}">${item.descricao}</span>
//                     </h3>
//                     <div class="graph">
//                         <canvas id="myChartCanvas${item.id}"></canvas>
//                     </div>
//                     <div class="label-captura">
//                         <p id="avisoCaptura${item.id}" style="color: white"></p>
//                     </div>
//                 </div>
//             `

//             obterDadosGrafico(item.id)
//         });

//         if (aquarios.length > 0) {
//             exibirAquario(aquarios[0].id)
//         }
//     }

//     function alterarTitulo(idAquario) {
//         var tituloAquario = document.getElementById(`tituloAquario${idAquario}`)
//         var descricao = JSON.parse(sessionStorage.AQUARIOS).find(item => item.id == idAquario).descricao;
//         tituloAquario.innerHTML = "Últimas medidas de Temperatura e Umidade do <span style='color: #e6005a'>" + descricao + "</span>"
//     }

//     function exibirAquario(idAquario) {
//         let todosOsGraficos = JSON.parse(sessionStorage.AQUARIOS);

//         for (i = 0; i < todosOsGraficos.length; i++) {
//             // exibindo - ou não - o gráfico
//             if (todosOsGraficos[i].id != idAquario) {
//                 let elementoAtual = document.getElementById(`grafico${todosOsGraficos[i].id}`)
//                 if (elementoAtual.classList.contains("display-block")) {
//                     elementoAtual.classList.remove("display-block")
//                 }
//                 elementoAtual.classList.add("display-none")

//                 // alterando estilo do botão
//                 let btnAtual = document.getElementById(`btnAquario${todosOsGraficos[i].id}`)
//                 if (btnAtual.classList.contains("btn-pink")) {
//                     btnAtual.classList.remove("btn-pink")
//                 }
//                 btnAtual.classList.add("btn-white")
//             }
//         }

//         // exibindo - ou não - o gráfico
//         let graficoExibir = document.getElementById(`grafico${idAquario}`)
//         graficoExibir.classList.remove("display-none")
//         graficoExibir.classList.add("display-block")

//         // alterando estilo do botão
//         let btnExibir = document.getElementById(`btnAquario${idAquario}`)
//         btnExibir.classList.remove("btn-white")
//         btnExibir.classList.add("btn-pink")
//     }

//     // O gráfico é construído com três funções:
//     // 1. obterDadosGrafico -> Traz dados do Banco de Dados para montar o gráfico da primeira vez
//     // 2. plotarGrafico -> Monta o gráfico com os dados trazidos e exibe em tela
//     // 3. atualizarGrafico -> Atualiza o gráfico, trazendo novamente dados do Banco

//     // Esta função *obterDadosGrafico* busca os últimos dados inseridos em tabela de medidas.
//     // para, quando carregar o gráfico da primeira vez, já trazer com vários dados.
//     // A função *obterDadosGrafico* também invoca a função *plotarGrafico*

//     //     Se quiser alterar a busca, ajuste as regras de negócio em src/controllers
//     //     Para ajustar o "select", ajuste o comando sql em src/models
//     function obterDadosGrafico(idAquario) {

//         alterarTitulo(idAquario)

//         if (proximaAtualizacao != undefined) {
//             clearTimeout(proximaAtualizacao);
//         }

//         fetch(`/medidas/ultimas/${idAquario}`, { cache: 'no-store' }).then(function (response) {
//             if (response.ok) {
//                 response.json().then(function (resposta) {
//                     console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
//                     resposta.reverse();

//                     plotarGrafico(resposta, idAquario);

//                 });
//             } else {
//                 console.error('Nenhum dado encontrado ou erro na API');
//             }
//         })
//             .catch(function (error) {
//                 console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
//             });
//     }

//     // Esta função *plotarGrafico* usa os dados capturados na função anterior para criar o gráfico
//     // Configura o gráfico (cores, tipo, etc), materializa-o na página e, 
//     // A função *plotarGrafico* também invoca a função *atualizarGrafico*
//     function plotarGrafico(resposta, idAquario) {

//         console.log('iniciando plotagem do gráfico...');

//         // Criando estrutura para plotar gráfico - labels
//         let labels = [];

//         // Criando estrutura para plotar gráfico - dados
//         let dados = {
//             labels: labels,
//             datasets: [{
//                 label: 'Umidade',
//                 data: [],
//                 fill: false,
//                 borderColor: 'rgb(75, 192, 192)',
//                 tension: 0.1
//             },
//             {
//                 label: 'Temperatura',
//                 data: [],
//                 fill: false,
//                 borderColor: 'rgb(199, 52, 52)',
//                 tension: 0.1
//             }]
//         };

//         console.log('----------------------------------------------')
//         console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
//         console.log(resposta)

//         // Inserindo valores recebidos em estrutura para plotar o gráfico
//         for (i = 0; i < resposta.length; i++) {
//             var registro = resposta[i];
//             labels.push(registro.momento_grafico);
//             dados.datasets[0].data.push(registro.umidade);
//             dados.datasets[1].data.push(registro.temperatura);
//         }

//         console.log('----------------------------------------------')
//         console.log('O gráfico será plotado com os respectivos valores:')
//         console.log('Labels:')
//         console.log(labels)
//         console.log('Dados:')
//         console.log(dados.datasets)
//         console.log('----------------------------------------------')

//         // Criando estrutura para plotar gráfico - config
//         const config = {
//             type: 'line',
//             data: dados,
//         };

//         // Adicionando gráfico criado em div na tela
//         let myChart = new Chart(
//             document.getElementById(`myChartCanvas${idAquario}`),
//             config
//         );

//         setTimeout(() => atualizarGrafico(idAquario, dados, myChart), 2000);
//     }


//     // Esta função *atualizarGrafico* atualiza o gráfico que foi renderizado na página,
//     // buscando a última medida inserida em tabela contendo as capturas, 

//     //     Se quiser alterar a busca, ajuste as regras de negócio em src/controllers
//     //     Para ajustar o "select", ajuste o comando sql em src/models
//     function atualizarGrafico(idAquario, dados, myChart) {



//         fetch(`/medidas/tempo-real/${idAquario}`, { cache: 'no-store' }).then(function (response) {
//             if (response.ok) {
//                 response.json().then(function (novoRegistro) {

//                     obterdados(idAquario);
//                     // alertar(novoRegistro, idAquario);
//                     console.log(`Dados recebidos: ${JSON.stringify(novoRegistro)}`);
//                     console.log(`Dados atuais do gráfico:`);
//                     console.log(dados);

//                     let avisoCaptura = document.getElementById(`avisoCaptura${idAquario}`)
//                     avisoCaptura.innerHTML = ""


//                     if (novoRegistro[0].momento_grafico == dados.labels[dados.labels.length - 1]) {
//                         console.log("---------------------------------------------------------------")
//                         console.log("Como não há dados novos para captura, o gráfico não atualizará.")
//                         avisoCaptura.innerHTML = "<i class='fa-solid fa-triangle-exclamation'></i> Foi trazido o dado mais atual capturado pelo sensor. <br> Como não há dados novos a exibir, o gráfico não atualizará."
//                         console.log("Horário do novo dado capturado:")
//                         console.log(novoRegistro[0].momento_grafico)
//                         console.log("Horário do último dado capturado:")
//                         console.log(dados.labels[dados.labels.length - 1])
//                         console.log("---------------------------------------------------------------")
//                     } else {
//                         // tirando e colocando valores no gráfico
//                         dados.labels.shift(); // apagar o primeiro
//                         dados.labels.push(novoRegistro[0].momento_grafico); // incluir um novo momento

//                         dados.datasets[0].data.shift();  // apagar o primeiro de umidade
//                         dados.datasets[0].data.push(novoRegistro[0].umidade); // incluir uma nova medida de umidade

//                         dados.datasets[1].data.shift();  // apagar o primeiro de temperatura
//                         dados.datasets[1].data.push(novoRegistro[0].temperatura); // incluir uma nova medida de temperatura

//                         myChart.update();
//                     }

//                     // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
//                     proximaAtualizacao = setTimeout(() => atualizarGrafico(idAquario, dados, myChart), 2000);
//                 });
//             } else {
//                 console.error('Nenhum dado encontrado ou erro na API');
//                 // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
//                 proximaAtualizacao = setTimeout(() => atualizarGrafico(idAquario, dados, myChart), 2000);
//             }
//         })
//             .catch(function (error) {
//                 console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
//             });

//     }