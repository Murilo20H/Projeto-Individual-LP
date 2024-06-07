function voltar() {
    window.location.href = "../inicio.html";
}

var id = sessionStorage.ID_USUARIO;

function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    if (email != null && nome != null) {
        pegarDados();
    } else {
        Swal.fire({
            imageUrl: "../assets/Icons/icon_error.png",
            imageHeight: 130,
            title: "Erro no login",
            text: "Por favor tente entrar novamente",
            width: 400,
            color: "black",
            willClose: () => {
                window.location.href = "../index.html";
            }
        });
    }
}

var senha_usuario;

function pegarDados() {
    fetch(`/usuarios/pegarDados/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    }).then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            resposta.json().then((json) => {
                senha_usuario = json.senha;
                document.getElementById("nome_antigo").innerHTML = json.nome;
                document.getElementById("sobrenome_antigo").innerHTML = json.sobrenome;
                document.getElementById("email_antigo").innerHTML = json.email;
            });
        } else {
            throw "Houve um erro ao tentar pegar os dados do usuario!";
        }
    });
}




// ABRIR
function abrir_nome() {
    document.getElementById("div_nome").style.display = "flex";
    document.getElementById("div_sobrenome").style.display = "none";
    document.getElementById("div_email").style.display = "none";
    document.getElementById("div_senha").style.display = "none";
    input_nome.style = "border: 0.2vw solid white;";
    input_sobrenome.style = "border: 0.2vw solid white;";
    input_email.style = "border: 0.2vw solid white;";
    input_senha_antiga.style = "border: 0.2vw solid white;";
    input_senha.style = "border: 0.2vw solid white;";
    input_confirmar_senha.style = "border: 0.2vw solid white;";
    mensagem_erro.innerHTML = '';
}

function abrir_sobrenome() {
    document.getElementById("div_nome").style.display = "none";
    document.getElementById("div_sobrenome").style.display = "flex";
    document.getElementById("div_email").style.display = "none";
    document.getElementById("div_senha").style.display = "none";
    input_nome.style = "border: 0.2vw solid white;";
    input_sobrenome.style = "border: 0.2vw solid white;";
    input_email.style = "border: 0.2vw solid white;";
    input_senha_antiga.style = "border: 0.2vw solid white;";
    input_senha.style = "border: 0.2vw solid white;";
    input_confirmar_senha.style = "border: 0.2vw solid white;";
    mensagem_erro.innerHTML = '';
}

function abrir_email() {
    document.getElementById("div_nome").style.display = "none";
    document.getElementById("div_sobrenome").style.display = "none";
    document.getElementById("div_email").style.display = "flex";
    document.getElementById("div_senha").style.display = "none";
    input_nome.style = "border: 0.2vw solid white;";
    input_sobrenome.style = "border: 0.2vw solid white;";
    input_email.style = "border: 0.2vw solid white;";
    input_senha_antiga.style = "border: 0.2vw solid white;";
    input_senha.style = "border: 0.2vw solid white;";
    input_confirmar_senha.style = "border: 0.2vw solid white;";
    mensagem_erro.innerHTML = '';
}

function abrir_senha() {
    document.getElementById("div_nome").style.display = "none";
    document.getElementById("div_sobrenome").style.display = "none";
    document.getElementById("div_email").style.display = "none";
    document.getElementById("div_senha").style.display = "flex";
    input_nome.style = "border: 0.2vw solid white;";
    input_sobrenome.style = "border: 0.2vw solid white;";
    input_email.style = "border: 0.2vw solid white;";
    input_senha_antiga.style = "border: 0.2vw solid white;";
    input_senha.style = "border: 0.2vw solid white;";
    input_confirmar_senha.style = "border: 0.2vw solid white;";
    mensagem_erro.innerHTML = '';
}






function alterar_nome() {
    var nome_novo = input_nome.value;
    if (nome_novo.length < 3) {
        input_nome.style = "border: 0.2vw solid red";
        mensagem_erro.innerHTML = "O nome precisa ter pelo menos 3 letras";
    } else {
        alterar_campo('nome', nome_novo);
    }
}

function alterar_sobrenome() {
    var sobrenome_novo = input_sobrenome.value;
    if (sobrenome_novo.length < 3) {
        input_sobrenome.style = "border: 0.2vw solid red";
        mensagem_erro.innerHTML = "O sobrenome precisa ter pelo menos 3 letras";
    } else {
        alterar_campo('sobrenome', sobrenome_novo);
    }
}

function alterar_email() {
    var email_novo = input_email.value;
    if (email_novo.length < 10) {
        input_email.style = "border: 0.2vw solid red";
        mensagem_erro.innerHTML = "O email precisa ter pelo menos 10 letras";
        validado = false;
    } else if (email_novo.indexOf("@") < 0 || email_novo.indexOf(".") < 0 || email_novo.indexOf('@') > email_novo.lastIndexOf('.')) {
        input_email.style = "border: 0.2vw solid red;";
        mensagem_erro.innerHTML = 'O email digitado é inválido';
        validado = false;
    } else {
        alterar_campo('email', email_novo);
    }
}

var tentativas = 2;
function alterar_senha() {
    var senha_novo = input_senha.value;
    var confirmar_senha = input_confirmar_senha.value;
    var senha_antiga = input_senha_antiga.value;
    var email_antigo = sessionStorage.EMAIL_USUARIO;

    if (tentativas == 0) {
        input_senha.style = "border: 0.2vw solid red";
        mensagem_erro.innerHTML = "Limite de tentativas ecedido";
    } else if (senha_novo.length < 6) {
        input_senha.style = "border: 0.2vw solid red";
        input_confirmar_senha.style = "border: 0.2vw solid red";
        mensagem_erro.innerHTML = "A senha precisa ter pelo menos 6 caracteres";
    } else if (senha_novo != confirmar_senha) {
        input_senha.style = "border: 0.2vw solid red";
        input_confirmar_senha.style = "border: 0.2vw solid red";
        mensagem_erro.innerHTML = "As senhas precisam ser identicas";
    } else {
        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: email_antigo,
                senhaServer: senha_antiga
            })
        }).then(function (resposta) {

            if (resposta.ok) {
                console.log(resposta);
                resposta.json().then(json => {
                    console.log(JSON.stringify(json));
                    alterar_campo('senha', senha_novo);
                });
            } else {
                console.log("Houve um erro ao tentar realizar o login!");

                resposta.text().then(texto => {
                    console.error(texto);
                    if (tentativas == 2) {
                        Swal.fire({
                            imageUrl: "../../assets/Icons/icon_error.png",
                            imageHeight: 130,
                            title: "Senha inválida",
                            text: "Você só tem mais uma tentativa",
                            width: 400,
                            color: "black",
                            willClose: () => {
                                input_senha_antiga.style = "border: 0.2vw solid red";
                            }
                        });
                    } else {
                        Swal.fire({
                            imageUrl: "../../assets/Icons/icon_error.png",
                            imageHeight: 130,
                            title: "Senha inválida",
                            text: "Última tentativa",
                            width: 400,
                            color: "black",
                            willClose: () => {
                                input_senha_antiga.style = "border: 0.2vw solid red";
                            }
                        });
                    }
                    tentativas--;
                });
            }
        });
    }

}

function alterar_campo(campo_alteracao, novo_campo) {
    fetch(`/usuarios/atualizarCampo/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            campo: campo_alteracao,
            novo: novo_campo
        }),
    }).then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            Swal.fire({
                imageUrl: "../../assets/Icons/foto_check.png",
                imageHeight: 130,
                title: `Campo  alterado com sucesso`,
                text: `O campo ${campo_alteracao} foi alterado para ${novo_campo}`,
                width: 400,
                color: "black"
            });
            pegarDados();
        } else {
            throw "Houve um erro ao tentar atualizar os dados do usuario!";
        }
    });
}