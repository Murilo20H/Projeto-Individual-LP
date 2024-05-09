function abaixar() {
    window.location.href = "#parte_detalhes";
}

function sair() {
    window.location.href = "../index.html";
}

function sobre_mim() {
    window.location.href = "../Sobre Mim/sobre_mim.html";
}

function atualizacaoPeriodica() {
    JSON.parse(sessionStorage.EMAIL_USUARIO).forEach(item => {
        obterdados(item.id)
    });
    setTimeout(atualizacaoPeriodica, 5000);
}

function validarSessao() {
    // if(sessionStorage.ID_USUARIO == undefined) {
    //     Swal.fire({
    //         imageUrl: "../assets/Icons/icon_error.png",
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
    //             window.location.href = "../index.html";
    //         }
    //     });
    // }
}






function enviar() {
    if (nota_aprecia == 100 && nota_dificuldade == 100) {
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
    } else if (nota_aprecia != 100 && nota_dificuldade != 100) {
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
            }
          });
    } else if (nota_aprecia != 100 || nota_dificuldade != 100) {
        Swal.fire({
            imageUrl: "../assets/Icons/foto_check.png",
            imageHeight: 130,
            title: "Uma nota enviada",
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

function graficos() {
        let timerInterval;
        Swal.fire({
            title: "Auto close alert!",
            html: "I will close in <b></b> milliseconds.",
            timer: 5000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
}













var nota_aprecia = 100;
// FUNCÕES APRECIA
function aprecia0() {
    nota_aprecia = 0;
    gosta1.style = "transition: opacity 0.8s; opacity: .2;";
    gosta2.style = "transition: opacity 0.8s; opacity: .2;";
    gosta3.style = "transition: opacity 0.8s; opacity: .2;";
    gosta4.style = "transition: opacity 0.8s; opacity: .2;";
    gosta5.style = "transition: opacity 0.8s; opacity: .2;";
    gosta6.style = "transition: opacity 0.8s; opacity: .2;";
    gosta7.style = "transition: opacity 0.8s; opacity: .2;";
    gosta8.style = "transition: opacity 0.8s; opacity: .2;";
    gosta9.style = "transition: opacity 0.8s; opacity: .2;";
    gosta10.style = "transition: opacity 0.8s; opacity: .2;";
    gosta0.style = "transition: opacity 0.8s; opacity: 1;";
}

function aprecia1() {
    nota_aprecia = 1;
    gosta0.style = "transition: opacity 0.8s; opacity: .2;";
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
    gosta0.style = "transition: opacity 0.8s; opacity: .2;";
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
    gosta0.style = "transition: opacity 0.8s; opacity: .2;";
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
    gosta0.style = "transition: opacity 0.8s; opacity: .2;";
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
    gosta0.style = "transition: opacity 0.8s; opacity: .2;";
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
    gosta0.style = "transition: opacity 0.8s; opacity: .2;";
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
    gosta0.style = "transition: opacity 0.8s; opacity: .2;";
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
    gosta0.style = "transition: opacity 0.8s; opacity: .2;";
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
    gosta0.style = "transition: opacity 0.8s; opacity: .2;";
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
    gosta0.style = "transition: opacity 0.8s; opacity: .2;";
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


var nota_dificuldade = 100;
// FUNÇÕES DIFICULDADE
function dificuldade0() {
    nota_dificuldade = 0;
    dificil1.style = "transition: opacity 0.8s; opacity: .2;";
    dificil2.style = "transition: opacity 0.8s; opacity: .2;";
    dificil3.style = "transition: opacity 0.8s; opacity: .2;";
    dificil4.style = "transition: opacity 0.8s; opacity: .2;";
    dificil5.style = "transition: opacity 0.8s; opacity: .2;";
    dificil6.style = "transition: opacity 0.8s; opacity: .2;";
    dificil7.style = "transition: opacity 0.8s; opacity: .2;";
    dificil8.style = "transition: opacity 0.8s; opacity: .2;";
    dificil9.style = "transition: opacity 0.8s; opacity: .2;";
    dificil10.style = "transition: opacity 0.8s; opacity: .2;";
    dificil0.style = "transition: opacity 0.8s; opacity: 1;";
}

function dificuldade1() {
    nota_dificuldade = 1;
    dificil0.style = "transition: opacity 0.8s; opacity: .2;";
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
    dificil0.style = "transition: opacity 0.8s; opacity: .2;";
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
    dificil0.style = "transition: opacity 0.8s; opacity: .2;";
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
    dificil0.style = "transition: opacity 0.8s; opacity: .2;";
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
    dificil0.style = "transition: opacity 0.8s; opacity: .2;";
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
    dificil0.style = "transition: opacity 0.8s; opacity: .2;";
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
    dificil0.style = "transition: opacity 0.8s; opacity: .2;";
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
    dificil0.style = "transition: opacity 0.8s; opacity: .2;";
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
    dificil0.style = "transition: opacity 0.8s; opacity: .2;";
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
    dificil0.style = "transition: opacity 0.8s; opacity: .2;";
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