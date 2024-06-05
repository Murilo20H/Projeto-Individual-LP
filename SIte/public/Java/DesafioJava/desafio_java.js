function voltar() {
    window.location.href = "../java.html";
}

function ranking() {
    window.location.href = "../../Ranking/ranking.html"
}

const linguagem_atual = 'desafioJava';
var idUsuario = sessionStorage.ID_USUARIO;

async function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    if (email == null || email == 'undefined' || nome == null || nome == 'undefined') {
        Swal.fire({
            imageUrl: "../../assets/Icons/icon_error.png",
            imageHeight: 130,
            title: "Erro no login",
            text: "Por favor tente entrar novamente",
            width: 400,
            color: "black",
            willClose: () => {
                window.location.href = "../../index.html";
            }
        });
    } else {
        await procurar()
    }
}



async function procurar() {
    var dados;
    try {
        const response = await fetch(`/desafios/verDadosUsuario/${linguagem_atual}/${idUsuario}`, { cache: 'no-store' });

        if (response && response.ok) {
            const json = await response.json();
            dados = JSON.stringify(json);
        }
    } catch (error) {
        console.error(`Erro na obtenção dos dados do desafio: ${error.message}`);
    }

    if (dados[dados.length - 3] == "1") {
        document.getElementById("input_codigo").style.display = "none";
        document.getElementById("botao_verificar").style.display = "none";
        document.getElementById("pergunta").style = "color: green; font-size: 3.5vw";
        document.getElementById("pergunta").innerHTML = "Parabéns, você venceu o desafio de Java!";
    }
}






var perdeu;

function verificar() {
    perdeu = false;
    var erro;

    const palavra_public = "public";
    var contador_public1 = 0;
    var eh_public1 = true;

    const palavra_class = "class";
    var contador_class = 0;
    var eh_class = true;

    const palavra_Main = "Main";
    var contador_Main = 0;
    var eh_Main = true;

    const chave1 = "{";
    var eh_chave1 = true;

    var contador_public2 = 0;
    var eh_public2 = true;

    const palavra_static = "static";
    var contador_static = 0;
    var eh_static = true;

    const palavra_void = "void";
    var contador_void = 0;
    var eh_void = true;

    const palavra_main = "main";
    var contador_main = 0;
    var eh_main = true;

    const parenteses1 = "(";
    var eh_parenteses1 = true;

    const palavra_String = "String";
    var contador_String = 0;
    var eh_String = true;

    const colchetes = "[]";
    var contador_colchetes = 0;
    var eh_colchetes = true;

    const palavra_args = "args";
    var contador_args = 0;
    var eh_args = true;

    const parenteses2 = ")";
    var eh_parenteses2 = true;

    const chave2 = "{";
    var eh_chave2 = true;

    const palavra_System = "System.";
    var contador_System = 0;
    var eh_System = true;

    const palavra_out = "out.";
    var contador_out = 0;
    var eh_out = true;

    const palavra_print = "print";
    var contador_print = 0;
    var eh_print = true;
    
    const texto = '("Ola Mundo");';
    var contador_texto = 0;
    var eh_texto = true;

    const chaves = "}}";
    var contador_chaves = 0;
    var eh_chaves = true;
    
    var codigo = input_codigo.value;

    for (var contador = 0; contador < codigo.length; contador++) {
        if (perdeu) {
            break;
        } else if (!eh_print && contador_texto < texto.length) {
            if (codigo[contador] == texto[contador_texto]) {
                contador_texto++;
                if (contador_texto == texto.length) {
                    eh_texto = false;
                }
            } else {
                erro = "Ola Mundo";
                perdeu = true;
            }
        } else if (codigo[contador] != " " && codigo[contador] != "\n") {
            
            
            if (eh_public1) {
                if (codigo[contador] == palavra_public[contador_public1]) {
                    contador_public1++;
                    if (contador_public1 == palavra_public.length) {
                        eh_public1 = false;
                    }
                } else {
                    erro = "public";
                    perdeu = true;
                }
            } else if (eh_class) {
                if (codigo[contador] == palavra_class[contador_class]) {
                    contador_class++;
                    if (contador_class == palavra_class.length) {
                        eh_class = false;
                    }
                } else {
                    erro = "class";
                    perdeu = true;
                }
            } else if (eh_Main) {
                if (codigo[contador] == palavra_Main[contador_Main]) {
                    contador_Main++;
                    if (contador_Main == palavra_Main.length) {
                        eh_Main = false;
                    }
                } else {
                    erro = "Main";
                    perdeu = true;
                }
            } else if (eh_chave1) {
                // PRIMEIRA CHAVE
                if (codigo[contador] == chave1[0]) {
                    eh_chave1 = false;
                } else {
                    erro = "Main";
                    perdeu = true;
                }
                
                
                
            } else if (eh_public2) {
                if (codigo[contador] == palavra_public[contador_public2]) {
                    contador_public2++;
                    if (contador_public2 == palavra_public.length) {
                        eh_public2 = false;
                    }
                } else {
                    erro = "public";
                    perdeu = true;
                }
            } else if (eh_static) {
                if (codigo[contador] == palavra_static[contador_static]) {
                    contador_static++;
                    if (contador_static == palavra_static.length) {
                        eh_static = false;
                    }
                } else {
                    erro = "static";
                    perdeu = true;
                }
            } else if (eh_void) {
                if (codigo[contador] == palavra_void[contador_void]) {
                    contador_void++;
                    if (contador_void == palavra_void.length) {
                        eh_void = false;
                    }
                } else {
                    erro = "void";
                    perdeu = true;
                }
            } else if (eh_main) {
                if (codigo[contador] == palavra_main[contador_main]) {
                    contador_main++;
                    if (contador_main == palavra_main.length) {
                        eh_main = false;
                    }
                } else {
                    erro = "main";
                    perdeu = true;
                }
                
                
                
            } else if (eh_parenteses1) {
                // PRIMEIRO PARENTESES
                if (codigo[contador] == parenteses1[0]) {
                    eh_parenteses1 = false;
                } else {
                    erro = "main";
                    perdeu = true;
                }
            } else if (eh_String) {
                if (codigo[contador] == palavra_String[contador_String]) {
                    contador_String++;
                    if (contador_String == palavra_String.length) {
                        eh_String = false;
                    }
                } else {
                    erro = "String";
                    perdeu = true;
                }
            } else if (eh_colchetes) {
                // COLCHETES
                if (codigo[contador] == colchetes[contador_colchetes]) {
                    contador_colchetes++;
                    if (contador_colchetes == colchetes.length) {
                        eh_colchetes = false;
                    }
                } else {
                    erro = "String";
                    perdeu = true;
                }
            } else if (eh_args) {
                if (codigo[contador] == palavra_args[contador_args]) {
                    contador_args++;
                    if (contador_args == palavra_args.length) {
                        eh_args = false;
                    }
                } else {
                    erro = "args";
                    perdeu = true;
                }
            } else if (eh_parenteses2) {
                // SEGUNDO PARENTESES
                if (codigo[contador] == parenteses2[0]) {
                    eh_parenteses2 = false;
                } else {
                    erro = "main";
                    perdeu = true;
                }
                
                
                
            } else if (eh_chave2) {
                // SEGUNDA CHAVE
                if (codigo[contador] == chave2[0]) {
                    eh_chave2 = false;
                } else {
                    erro = "chave";
                    perdeu = true;
                }
                
                
                
            }
            else if (eh_System) {
                if (codigo[contador] == palavra_System[contador_System]) {
                    contador_System++;
                    if (contador_System == palavra_System.length) {
                        eh_System = false;
                    }
                } else {
                    erro = "System";
                    perdeu = true;
                }
            } else if (eh_out) {
                if (codigo[contador] == palavra_out[contador_out]) {
                    contador_out++;
                    if (contador_out == palavra_out.length) {
                        eh_out = false;
                    }
                } else {
                    erro = "out";
                    perdeu = true;
                }
            } else if (eh_print) {
                if (codigo[contador] == palavra_print[contador_print]) {
                    contador_print++;
                    if (contador_print == palavra_print.length) {
                        eh_print = false;
                        if (codigo[contador + 1] == "l" && codigo[contador + 2] == "n") {
                            contador += 2;
                        }
                    }
                } else {
                    erro = "print ou println";
                    perdeu = true;
                }
            } else if (eh_chaves) {
                // CHAVES FINAIS
                if (codigo[contador] == chaves[contador_chaves]) {
                    contador_chaves++;
                    if (contador_chaves == chaves.length) {
                        eh_chaves = false;
                    }
                } else {
                    erro = "chaves";
                    perdeu = true;
                }
            } else {
                perdeu = true;
            }
            
        }
    }

    if (!eh_chaves && !perdeu) {
        ganhou();
    } else {
        if (erro == undefined) {
            erro = "espaçamento ou falta palavras";
        }
        errou(erro);
    }

}


function ganhou() {
    Swal.fire({
        imageUrl: "../../assets/Icons/foto_check.png",
        imageHeight: 130,
        title: "Parabéns",
        text: "Você finalizou o desafio de Java!!",
        width: 400,
        color: "black",
        willClose: () => {
            finalizou();
        }
    });
}

function errou(erro) {
    Swal.fire({
        imageUrl: "../../assets/Icons/icon_error.png",
        imageHeight: 130,
        title: "Infelizmente você perdeu",
        text: "Mas calma, você pode tentar novamente!",
        width: 400,
        color: "black"
    });

    ajuda.style.display = "flex";
    ajuda_erro.innerHTML = `Você errou <b style="color: red; font-weight: 900">${erro}</b>, tente novamente`
}


async function finalizou() {
    try {
        const response = await fetch("/desafios/atualizar", { method: "PUT",  headers: {  "Content-Type": "application/json"  }, body: JSON.stringify({ linguagem: linguagem_atual,  idUsuario: idUsuario }) });
        console.log(response);

        if (response.ok) {
            const json = response.json();
            console.log(JSON.stringify(json));
        } else {
            console.error(`Erro na atualização dos dados do desafio: ${response.status} - ${response.statusText}`);
        }
    } catch (error) {
        console.error(`Erro na atualização dos dados do desafio: ${error.message}`);
    }
    document.getElementById("input_codigo").style.display = "none";
    document.getElementById("botao_verificar").style.display = "none";
    document.getElementById("pergunta").style = "color: green; font-size: 3.5vw";
    document.getElementById("pergunta").innerHTML = "Parabéns, você venceu o desafio de Java!";
}