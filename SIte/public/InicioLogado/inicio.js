// HOME ANTES DE LOGAR
function login() {
    window.location.href = "../login.html";
}

function sobre_mim() {
    window.location.href = "../../Sobre Mim/sobre_mim.html";
}

function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var nome_usuario = document.getElementnomeById("nome_usuario");

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
                window.location.href = "../index.html";
            }
        });
    }
}