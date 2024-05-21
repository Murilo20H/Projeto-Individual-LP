function voltar() {
    window.location.href = "../html.html";
}

function graficos_gerais() {
    window.location.href = "../../GraficosGerais/graficos_gerais.html"
}

const linguagem_atual = 'html';
var idUsuario = sessionStorage.ID_USUARIO;

function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var nome_usuario = document.getElementById("nome_usuario");

    if (email != null && email != 'undefined' && nome != null && nome != 'undefined') {
        nome_usuario.innerHTML = nome;
    } else {
        Swal.fire({
            imageUrl: "../../assets/Icons/icon_error.png",
            imageHeight: 130,
            title: "Erro no login",
            text: "Por favor tente entrar novamente",
            width: 400,
            color: "black",
            willClose: () => {
                // window.location.href = "../../index.html";
            }
        });
    }
}

var lista_tags = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'menu',
    'meta',
    'meter',
    'nav',
    'noframes',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'template',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr'
];

var lista_tags_usadas = [];
var contador_tags = 0;
var tag_atual = "";

document.getElementById("tempo_faltando").innerHTML = "50";
document.getElementById("pontuacao_contador").innerHTML = "0";

function comecar() {
    var botao = document.getElementById("button_comecar");
    input_codigo.focus();
    proxima_palavra();
    botao.style.display = "none";
    iniciarCronometro();
}

function verificar() {
    var codigo = document.getElementById("input_codigo");
    
    if (tag_atual == codigo.value) {
        contador_tags++;
        document.getElementById("pontuacao_contador").innerHTML = contador_tags;
        if (contador_tags >= 25) {
            venceu();
        } else {
            proxima_palavra();
        }
    }
}

function colocarTag() {
    var numero_aleatorio = Math.floor(Math.random() * (lista_tags.length - 1));
    if (lista_tags_usadas.indexOf(lista_tags[numero_aleatorio]) < 0) {
        tag_atual = lista_tags[numero_aleatorio];
        lista_tags_usadas.push(lista_tags[numero_aleatorio]);
    } else {
        colocarTag();
    }
}

function proxima_palavra() {
    var codigo = document.getElementById("input_codigo");
    var tags = document.getElementById("tags");
    colocarTag();
    tags.innerHTML += `<span>${tag_atual}</span>`;
    codigo.value = "";
}


// TEMPORIZADOR
function iniciarCronometro() {
    tempo_total = 50;
    document.getElementById('tempo_faltando').innerHTML = tempo_total;
    cronometro = setInterval(function() {
        if (tempo_total <= 0) {
            if (contador_tags >= 25) {
                ganhou();
            } else {
                perdeu();
            }
        }
        tempo_total -= 1; 
        document.getElementById('tempo_faltando').innerHTML = tempo_total;
    }, 1000);
}

function pausarCronometro() {
    clearInterval(cronometro);
}

function perdeu() {
    pausarCronometro();
    document.getElementById("tags").innerHTML = "";
    document.getElementById("tempo_faltando").innerHTML = "50";
    contador_tags = 0;
    lista_tags_usadas = [];
    Swal.fire({
        imageUrl: "../../assets/Icons/icon_error.png",
        imageHeight: 130,
        title: "Infelizmente você perdeu",
        text: "Mas calma, você pode tentar novamente!",
        width: 400,
        color: "black",
        willClose: () => {
            // finalizou();
        }
    });
    document.getElementById("button_comecar").style.display = "flex";
}

function venceu() {
    pausarCronometro();
    document.getElementById("tags").innerHTML = "<span>Você venceu o desafio de HTML!</span>";
    tempo_total++;
    contador_tags = 0;
    lista_tags_usadas = [];
    Swal.fire({
        imageUrl: "../../assets/Icons/foto_check.png",
        imageHeight: 130,
        title: "Parabéns",
        text: "Você finalizou o desafio de HTML!!",
        width: 400,
        color: "black",
        willClose: () => {
            // finalizou();
        }
    });
}