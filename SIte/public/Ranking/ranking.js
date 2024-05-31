function voltar() {
    window.location.href = "../InicioLogado/inicio.html";
}

function graficos_gerais() {
    window.location.href = "../GraficosGerais/graficos_gerais.html";
}

var idUsuario = sessionStorage.ID_USUARIO;

function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    if (email == null || email == 'undefined' || nome == null || nome == 'undefined') {
        Swal.fire({
            imageUrl: "../assets/Icons/icon_error.png",
            imageHeight: 130,
            title: "Erro no login",
            text: "Por favor tente entrar novamente",
            width: 400,
            color: "black",
            willClose: () => {
                window.location.href = "../../index.html";
            }
        });
    }

    AtualizarTabela();
}




async function AtualizarTabela() {
    var dados1 = await buscarRanking();
    await gravarRanking(dados1);
 
    criarTabela();
}






async function buscarRanking() {
    var dados;

    try {
        const response = await fetch(`/desafios/ranking`, { cache: 'no-store' });
    
        if (response.ok) {
            const data = await response.json();
            console.log(`Dados recebidos: ${JSON.stringify(data)}`);
            dados = data;
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    } catch (error) {
        console.error(`Erro na obtenção dos dados para o gráfico: ${error.message}`);
    }

    return dados;
}








var lista_nome = [];
var lista_pontuacao = [];
async function gravarRanking(dados) {

    console.log(dados)

    if (!dados[9]) {
        lista_nome[9] = "---";
        lista_pontuacao[9] = 0;
        if (!dados[8]) {
            lista_nome[8] = "---";
            lista_pontuacao[8] = 0;
            if (!dados[7]) {
                lista_nome[7] = "---";
                lista_pontuacao[7] = 0;
                if (!dados[6]) {
                    lista_nome[6] = "---";
                    lista_pontuacao[6] = 0;
                    if (!dados[5]) {
                        lista_nome[5] = "---";
                        lista_pontuacao[5] = 0;
                        if (!dados[4]) {
                            lista_nome[4] = "---";
                            lista_pontuacao[4] = 0;
                            if (!dados[3]) {
                                lista_nome[3] = "---";
                                lista_pontuacao[3] = 0;
                                if (!dados[2]) {
                                    lista_nome[2] = "---";
                                    lista_pontuacao[2] = 0;
                                    if (!dados[1]) {
                                        lista_nome[1] = "---";
                                        lista_pontuacao[1] = 0;
                                        if (!dados[0]) {
                                            lista_nome[0] = "---";
                                            lista_pontuacao[0] = 0;
                                        } else {
                                            lista_nome[0] = dados[0].nome;
                                            
                                            lista_pontuacao[0] = dados[0].pontuacao;
                                        }
                                    } else {
                                        lista_nome[0] = dados[0].nome;
                                        lista_nome[1] = dados[1].nome;
                                        
                                        lista_pontuacao[0] = dados[0].pontuacao;
                                        lista_pontuacao[1] = dados[1].pontuacao;
                                    }
                                } else {
                                    lista_nome[0] = dados[0].nome;
                                    lista_nome[1] = dados[1].nome;
                                    lista_nome[2] = dados[2].nome;
                                    
                                    lista_pontuacao[0] = dados[0].pontuacao;
                                    lista_pontuacao[1] = dados[1].pontuacao;
                                    lista_pontuacao[2] = dados[2].pontuacao;
                                }
                            } else {
                                lista_nome[0] = dados[0].nome;
                                lista_nome[1] = dados[1].nome;
                                lista_nome[2] = dados[2].nome;
                                lista_nome[3] = dados[3].nome;
                                
                                lista_pontuacao[0] = dados[0].pontuacao;
                                lista_pontuacao[1] = dados[1].pontuacao;
                                lista_pontuacao[2] = dados[2].pontuacao;
                                lista_pontuacao[3] = dados[3].pontuacao;
                            }
                        } else {
                            lista_nome[0] = dados[0].nome;
                            lista_nome[1] = dados[1].nome;
                            lista_nome[2] = dados[2].nome;
                            lista_nome[3] = dados[3].nome;
                            lista_nome[4] = dados[4].nome;
                            
                            lista_pontuacao[0] = dados[0].pontuacao;
                            lista_pontuacao[1] = dados[1].pontuacao;
                            lista_pontuacao[2] = dados[2].pontuacao;
                            lista_pontuacao[3] = dados[3].pontuacao;
                            lista_pontuacao[4] = dados[4].pontuacao;
                        }
                    } else {
                        lista_nome[0] = dados[0].nome;
                        lista_nome[1] = dados[1].nome;
                        lista_nome[2] = dados[2].nome;
                        lista_nome[3] = dados[3].nome;
                        lista_nome[4] = dados[4].nome;
                        lista_nome[5] = dados[5].nome;
                        
                        lista_pontuacao[0] = dados[0].pontuacao;
                        lista_pontuacao[1] = dados[1].pontuacao;
                        lista_pontuacao[2] = dados[2].pontuacao;
                        lista_pontuacao[3] = dados[3].pontuacao;
                        lista_pontuacao[4] = dados[4].pontuacao;
                        lista_pontuacao[5] = dados[5].pontuacao;
                    }
                } else {
                    lista_nome[0] = dados[0].nome;
                    lista_nome[1] = dados[1].nome;
                    lista_nome[2] = dados[2].nome;
                    lista_nome[3] = dados[3].nome;
                    lista_nome[4] = dados[4].nome;
                    lista_nome[5] = dados[5].nome;
                    lista_nome[6] = dados[6].nome;
                    
                    lista_pontuacao[0] = dados[0].pontuacao;
                    lista_pontuacao[1] = dados[1].pontuacao;
                    lista_pontuacao[2] = dados[2].pontuacao;
                    lista_pontuacao[3] = dados[3].pontuacao;
                    lista_pontuacao[4] = dados[4].pontuacao;
                    lista_pontuacao[5] = dados[5].pontuacao;
                    lista_pontuacao[6] = dados[6].pontuacao;
                }
            } else {
                lista_nome[0] = dados[0].nome;
                lista_nome[1] = dados[1].nome;
                lista_nome[2] = dados[2].nome;
                lista_nome[3] = dados[3].nome;
                lista_nome[4] = dados[4].nome;
                lista_nome[5] = dados[5].nome;
                lista_nome[6] = dados[6].nome;
                lista_nome[7] = dados[7].nome;
                
                lista_pontuacao[0] = dados[0].pontuacao;
                lista_pontuacao[1] = dados[1].pontuacao;
                lista_pontuacao[2] = dados[2].pontuacao;
                lista_pontuacao[3] = dados[3].pontuacao;
                lista_pontuacao[4] = dados[4].pontuacao;
                lista_pontuacao[5] = dados[5].pontuacao;
                lista_pontuacao[6] = dados[6].pontuacao;
                lista_pontuacao[7] = dados[7].pontuacao;
            }
        } else {
            lista_nome[0] = dados[0].nome;
            lista_nome[1] = dados[1].nome;
            lista_nome[2] = dados[2].nome;
            lista_nome[3] = dados[3].nome;
            lista_nome[4] = dados[4].nome;
            lista_nome[5] = dados[5].nome;
            lista_nome[6] = dados[6].nome;
            lista_nome[7] = dados[7].nome;
            lista_nome[8] = dados[8].nome;
            
            lista_pontuacao[0] = dados[0].pontuacao;
            lista_pontuacao[1] = dados[1].pontuacao;
            lista_pontuacao[2] = dados[2].pontuacao;
            lista_pontuacao[3] = dados[3].pontuacao;
            lista_pontuacao[4] = dados[4].pontuacao;
            lista_pontuacao[5] = dados[5].pontuacao;
            lista_pontuacao[6] = dados[6].pontuacao;
            lista_pontuacao[7] = dados[7].pontuacao;
            lista_pontuacao[8] = dados[8].pontuacao;
        }
    } else {
        lista_nome[0] = dados[0].nome;
        lista_nome[1] = dados[1].nome;
        lista_nome[2] = dados[2].nome;
        lista_nome[3] = dados[3].nome;
        lista_nome[4] = dados[4].nome;
        lista_nome[5] = dados[5].nome;
        lista_nome[6] = dados[6].nome;
        lista_nome[7] = dados[7].nome;
        lista_nome[8] = dados[8].nome;
        lista_nome[9] = dados[9].nome;
        
        lista_pontuacao[0] = dados[0].pontuacao;
        lista_pontuacao[1] = dados[1].pontuacao;
        lista_pontuacao[2] = dados[2].pontuacao;
        lista_pontuacao[3] = dados[3].pontuacao;
        lista_pontuacao[4] = dados[4].pontuacao;
        lista_pontuacao[5] = dados[5].pontuacao;
        lista_pontuacao[6] = dados[6].pontuacao;
        lista_pontuacao[7] = dados[7].pontuacao;
        lista_pontuacao[8] = dados[8].pontuacao;
        lista_pontuacao[9] = dados[9].pontuacao;
    }

}










// TABELA
function criarTabela() {
    document.getElementById("nome1").innerHTML = lista_nome[0];
    document.getElementById("nome2").innerHTML = lista_nome[1];
    document.getElementById("nome3").innerHTML = lista_nome[2];
    document.getElementById("nome4").innerHTML = lista_nome[3];
    document.getElementById("nome5").innerHTML = lista_nome[4];
    document.getElementById("nome6").innerHTML = lista_nome[5];
    document.getElementById("nome7").innerHTML = lista_nome[6];
    document.getElementById("nome8").innerHTML = lista_nome[7];
    document.getElementById("nome9").innerHTML = lista_nome[8];
    document.getElementById("nome10").innerHTML = lista_nome[9];
    
    for (var i = 0; i < lista_pontuacao.length; i++) {
        if (Number(lista_pontuacao[i]) == 1) {
            document.getElementById("pontuacao" + (i + 1)).innerHTML = "&#x2B50";
        } else if (Number(lista_pontuacao[i]) == 2) {
            document.getElementById("pontuacao" + (i + 1)).innerHTML = "&#x2B50&#x2B50";
        } else if (Number(lista_pontuacao[i]) == 3) {
            document.getElementById("pontuacao" + (i + 1)).innerHTML = "&#x2B50&#x2B50&#x2B50";
        } else if (Number(lista_pontuacao[i]) == 4) {
            document.getElementById("pontuacao" + (i + 1)).innerHTML = "&#x2B50&#x2B50&#x2B50&#x2B50";
        } else if (Number(lista_pontuacao[i]) == 5) {
            document.getElementById("pontuacao" + (i + 1)).innerHTML = "&#x2B50&#x2B50&#x2B50&#x2B50&#x2B50";
        } else if (Number(lista_pontuacao[i]) == 6) {
            document.getElementById("pontuacao" + (i + 1)).innerHTML = "&#x2B50&#x2B50&#x2B50&#x2B50&#x2B50&#x2B50";
        } else {
            document.getElementById("pontuacao" + (i + 1)).innerHTML = "";
        }

    }
}