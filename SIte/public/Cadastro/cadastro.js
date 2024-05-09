function login() {
    window.location.href = "login.html";
}

function home() {
    window.location.href = "index.html";
}

window.onload = function () {
    parte_beneficios.style.left = 0;
};

function cadastrar() {
    var nomeVar = input_nome.value;
    var sobrenomeVar = input_sobrenome.value;
    var emailVar = input_email.value;
    var senhaVar = input_senha.value;

    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nomeServer: nomeVar,
            sobrenomeServer: sobrenomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                let timerInterval;
                Swal.fire({
                    title: "Cadastro realizado com sucesso!",
                    html: "Redirecionado para a página de login",
                    timer: 3000,
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
                    if (result.dismiss === Swal.DismissReason.timer) {
                        window.location.href = "../login.html"
                    }
                });

            } else {
                tela_cobrir.style = "display: none;";
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        });

    return false;
}






// VALIDACOES
function validar() {
    var nomeVar = input_nome.value;
    var sobrenomeVar = input_sobrenome.value;
    var emailVar = input_email.value;
    var senhaVar = input_senha.value;
    var confirmarSenhaVar = input_confirmar_senha.value;
    var mensagem = "";
    var validado = true;

    if (
        nomeVar == "" ||
        sobrenomeVar == "" ||
        emailVar == "" ||
        senhaVar == "" ||
        confirmarSenhaVar == ""
    ) {
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
            }
        });
    } else {
        Swal.fire({
            title: "Verificando campos!",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                tela_cobrir.style = "display: flex;";
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);


                if (nomeVar.length < 3) {
                    input_nome.style = "border: 0.2vw solid red";
                    validacao_nome.innerHTML = "O nome precisa ter pelo menos 3 letras";
                    validado = false;
                }

                if (sobrenomeVar.length < 3) {
                    input_sobrenome.style = "border: 0.2vw solid red";
                    validacao_sobrenome.innerHTML = "O sobrenome precisa ter pelo menos 3 letras";
                    validado = false;
                }

                if (emailVar.length < 10) {
                    input_email.style = "border: 0.2vw solid red";
                    validacao_email.innerHTML = "O email precisa ter pelo menos 10 letras";
                    validacao_email.style = "margin-right: 19.6vw;";
                    validado = false;
                } else if (emailVar.indexOf("@") < 0 || emailVar.indexOf(".") < 0 || emailVar.indexOf('@') > emailVar.lastIndexOf('.')) {
                    input_email.style = "border: 0.2vw solid red;";
                    validacao_email.innerHTML = 'O email digitado é inválido';
                    validacao_email.style = "margin-right: 23.1vw;";
                    validado = false;
                }

                if (senhaVar != confirmarSenhaVar) {
                    input_senha.style = "border: 0.2vw solid red";
                    validacao_senha.innerHTML = "As senhas precisam ser identicas";
                    input_confirmar_senha.style = "border: 0.2vw solid red";
                    validacao_confirmar_senha.innerHTML = "As senhas precisam ser identicas";
                    validacao_senha.style = "margin-right: 21.5vw;";
                    validacao_confirmar_senha.style = "margin-right: 21.5vw;";
                    validado = false;
                }

                if (senhaVar.length < 6) {
                    input_senha.style = "border: 0.2vw solid red";
                    validacao_senha.innerHTML = "A senha precisa ter pelo menos 6 caracteres";
                    validacao_senha.style = "margin-right: 18.7vw;";
                    validado = false;
                }

                if (confirmarSenhaVar.length < 6) {
                    input_confirmar_senha.style = "border: 0.2vw solid red";
                    validacao_confirmar_senha.innerHTML = "A senha precisa ter pelo menos 6 caracteres";
                    validacao_confirmar_senha.style = "margin-right: 18.7vw;";
                    validado = false;
                }
            },
            willClose: () => {
                tela_cobrir.style = "display: none;";
                clearInterval(timerInterval);
                if (!validado) {
                    Swal.fire({
                        imageUrl: "assets/Icons/icon_error.png",
                        imageHeight: 130,
                        title: "Campos inválidos",
                        text: "Por favor, preencha os campos novamente",
                        width: 400,
                        color: "black",
                        didOpen: () => {
                            tela_cobrir.style = "display: flex;";
                        },
                        willClose: () => {
                            tela_cobrir.style = "display: none;";
                        }
                    });
                } else {
                    cadastrar();
                }
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });



    }



}