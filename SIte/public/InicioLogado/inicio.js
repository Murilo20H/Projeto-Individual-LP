function sair() {
    window.location.href = "../index.html";
}

function csharp() {
    window.location.href = "../CSharp/csharp.html";
}

function java() {
    window.location.href = "../Java/java.html";
}

function javascript() {
    window.location.href = "../Javascript/javascript.html";
}

function html() {
    window.location.href = "../LinguagemHTML/html.html";
}

function css() {
    window.location.href = "../LinguagemCSS/css.html";
}

function sql() {
    window.location.href = "../SQL/sql.html";
}

function sobre_mim() {
    window.location.href = "../Sobre Mim/sobre_mim.html";
}

function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var nome_usuario = document.getElementById("nome_usuario");

    if (email != null && nome != null) {
        nome_usuario.innerHTML = nome;
    } else {
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
}