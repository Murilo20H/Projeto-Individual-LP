function cadastro() {
    window.location.href = "cadastro.html";
}

function home() {
    window.location.href = "index.html";
}

window.onload = function () {
    parte_imagem.style.left = 0;
}

function tirar_olho() {
    img_olho_aberto.style = "width: 0vw; height: 0vw;";
    img_olho_fechado.style = "width: 0vw; height: 0vw;";
}

function aparecer_olho() {
    img_olho_aberto.style = "width: 2.2vw; height: 2.2vw;";
    img_olho_fechado.style = "width: 2.2vw; height: 2.2vw;";
}

function alterar_olho() {
    if (img_olho_aberto.style.display == "none") {
        img_olho_fechado.style.display = "none";
        img_olho_aberto.style.display = "block";
        input_senha.type = "password";
    } else {
        img_olho_aberto.style.display = "none";
        img_olho_fechado.style.display = "block";
        input_senha.type = "text";
    }
}

function entrar() {
    var emailVar = input_email.value;
    var senhaVar = input_senha.value;

    if (emailVar == "" || senhaVar == "") {
        Swal.fire({
            imageUrl: "assets/Icons/icon_error.png",
            imageHeight: 130,
            title: "Campos inválidos",
            text: "Por favor, preencha todos os campos",
            width: 400,
            color: "black",
            didOpen: () => {
                tela_cobrir.style = "display: flex;";
            },
            willClose: () => {
                tela_cobrir.style = "display: none;";
                input_email.style = "border: 0.2vw solid red";
                input_senha.style = "border: 0.2vw solid red";
            }
        });
        return false;
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    let timerInterval;
    Swal.fire({
        title: "Verificando campos!",
        timer: 400,
        timerProgressBar: true,
        didOpen: () => {
            tela_cobrir.style = "display: flex;";
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            tela_cobrir.style = "display: none;";
            clearInterval(timerInterval);
        }
    }).then((result) => {
        tela_cobrir.style = "display: none;";

        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: emailVar,
                senhaServer: senhaVar
            })
        }).then(function (resposta) {

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(JSON.stringify(json));
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.ID_USUARIO = json.id;
                    let timerInterval;
                    tela_cobrir.style = "width: 100vw; height: 100vh;";

                    Swal.fire({
                        title: "Login realizado com sucesso!",
                        html: "Redirecionado para a página de linguagens",
                        imageUrl: "assets/Icons/foto_check.png",
                        imageHeight: 130,
                        timer: 1800,
                        timerProgressBar: true,
                        didOpen: () => {
                            tela_cobrir.style = "display: flex;";
                            Swal.showLoading();
                            const timer = Swal.getPopup().querySelector("b");
                            timerInterval = setInterval(() => {
                                timer.textContent = `${Swal.getTimerLeft()}`;
                            }, 100);
                        },
                        willClose: () => {
                            clearInterval(timerInterval);
                            tela_cobrir.style = "display: none";
                        }
                    }).then((result) => {
                        tela_cobrir.style = "display: none;";

                        if (result.dismiss === Swal.DismissReason.timer) {
                            window.location.href = "../InicioLogado/inicio.html"
                        }
                    });

                });

            } else {

                console.log("Houve um erro ao tentar realizar o login!");


                resposta.text().then(texto => {
                    console.error(texto);
                    Swal.fire({
                        imageUrl: "assets/Icons/icon_error.png",
                        imageHeight: 130,
                        title: "Usuário inválido",
                        text: "Digite novamente",
                        width: 400,
                        color: "black",
                        didOpen: () => {
                            tela_cobrir.style = "display: flex;";
                        },
                        willClose: () => {
                            tela_cobrir.style = "display: none";
                            input_email.style = "border: 0.2vw solid red";
                            input_senha.style = "border: 0.2vw solid red";

                        }
                    });

                });
            }
        });

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;

}
