function voltar() {
    window.location.href = "../html.html";
}

function ranking() {
    window.location.href = "../../Ranking/ranking.html"
}

var primeira_vez = false;
const linguagem_atual = 'desafioHtml';
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
        document.getElementById("texto_venceu").style.display = "flex";
        primeira_vez = false;
    } else {
        primeira_vez = true;
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
        color: "black"
    });
    document.getElementById("button_comecar").style.display = "flex";
}

function venceu() {
    pausarCronometro();
    document.getElementById("tags").innerHTML = "";
    document.getElementById("tempo_faltando").innerHTML = "50";
    contador_tags = 0;
    lista_tags_usadas = [];
    if (primeira_vez) {
        Swal.fire({
            imageUrl: "../../assets/Icons/foto_check.png",
            imageHeight: 130,
            title: "Parabéns",
            text: "Você finalizou o desafio de HTML!!",
            width: 400,
            color: "black",
            willClose: () => {
                finalizou();
            }
        });
    } else {
        Swal.fire({
            imageUrl: "../../assets/Icons/foto_check.png",
            imageHeight: 130,
            title: "Parabéns",
            text: `Você terminou em ${50 - tempo_total} segundos!`,
            width: 400,
            color: "black"
        });
    }
    document.getElementById("button_comecar").style.display = "flex";
    tempo_total++;
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
    document.getElementById("texto_venceu").style.display = "flex";
}