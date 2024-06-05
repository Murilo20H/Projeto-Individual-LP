function voltar() {
    window.location.href = "../csharp.html";
}

function ranking() {
    window.location.href = "../../Ranking/ranking.html"
}

const linguagem_atual = 'desafioCsharp';
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
        document.getElementById("respostas").style.display = "none";
        document.getElementById("botao_responder").style.display = "none";
        document.getElementById("questao").style = "color: green; font-size: 3.5vw";
        document.getElementById("questao").innerHTML = "Parabéns, você venceu o desafio de CSharp!";
    }
}






function limpar_resposta() {
    resposta_escolhida = 0;
    document.getElementById("resposta1").style.border = "0.2vw solid black"
    document.getElementById("resposta2").style.border = "0.2vw solid black"
    document.getElementById("resposta3").style.border = "0.2vw solid black"
    document.getElementById("resposta4").style.border = "0.2vw solid black"
}

function resposta1() {
    resposta_escolhida = 1;
    document.getElementById("resposta1").style.border = "0.4vw solid green"
    document.getElementById("resposta2").style.border = "0.2vw solid black"
    document.getElementById("resposta3").style.border = "0.2vw solid black"
    document.getElementById("resposta4").style.border = "0.2vw solid black"
}

function resposta2() {
    resposta_escolhida = 2;
    document.getElementById("resposta2").style.border = "0.4vw solid green"
    document.getElementById("resposta1").style.border = "0.2vw solid black"
    document.getElementById("resposta3").style.border = "0.2vw solid black"
    document.getElementById("resposta4").style.border = "0.2vw solid black"
}

function resposta3() {
    resposta_escolhida = 3;
    document.getElementById("resposta3").style.border = "0.4vw solid green"
    document.getElementById("resposta1").style.border = "0.2vw solid black"
    document.getElementById("resposta2").style.border = "0.2vw solid black"
    document.getElementById("resposta4").style.border = "0.2vw solid black"
}

function resposta4() {
    resposta_escolhida = 4;
    document.getElementById("resposta4").style.border = "0.4vw solid green"
    document.getElementById("resposta1").style.border = "0.2vw solid black"
    document.getElementById("resposta2").style.border = "0.2vw solid black"
    document.getElementById("resposta3").style.border = "0.2vw solid black"
}

var resposta_escolhida = 0;
var fase = 1;

function responder() {
    if (fase == 1) {
        if (resposta_escolhida == 3) {


            fase++;
            Swal.fire({
                imageUrl: "../../assets/Icons/foto_check.png",
                imageHeight: 130,
                title: "Correto",
                text: `Fase ${fase} ...`,
                width: 400,
                color: "black"
            });
            limpar_resposta();
            document.getElementById("questao").innerHTML = "Questão 2: como criar um vetor de strings e colocar 3 nomes dentro dele";
            document.getElementById("resposta1").innerHTML = '<span>string[] nomes = <br>new string[]{"Ana", "João", "Maria"};</span>';
            document.getElementById("resposta2").innerHTML = '<span>string[] nomes = <br>{"Ana", "João", "Maria"};</span>';
            document.getElementById("resposta3").innerHTML = '<span>string[] nomes = <br>new[]{"Ana", "João", "Maria"};</span>';
            document.getElementById("resposta4").innerHTML = '<span>array nomes = <br>new array{"Ana", "João", "Maria"};</span>';
            document.getElementById("resposta1").style = 'height: 35%';
            document.getElementById("resposta2").style = 'height: 35%';
            document.getElementById("resposta3").style = 'height: 35%';
            document.getElementById("resposta4").style = 'height: 35%';
        } else {
            errou();
        }


    } else if (fase == 2) {


        if (resposta_escolhida == 2) {
            fase++;
            Swal.fire({
                imageUrl: "../../assets/Icons/foto_check.png",
                imageHeight: 130,
                title: "Correto",
                text: `Fase ${fase} ...`,
                width: 400,
                color: "black"
            });
            limpar_resposta();
            document.getElementById("questao").innerHTML = "Questão 3: qual laço de repetição não contém nenhum erro";
            document.getElementById("resposta1").innerHTML = '<span>int[] array = {1, 2, 3};<br>for (int i = 0; i <= array.Length; i++)<br>{<br>&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(array[i]);<br>}</span>';
            document.getElementById("resposta2").innerHTML = '<span>int[] array = {1, 2, 3};<br>for (int i = 0; i > array.Length; i++)<br>{<br>&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(array[i]);<br>}</span>';
            document.getElementById("resposta3").innerHTML = '<span>int[] array = {1, 2, 3};<br>for (int i = 0; i < array.Length; i++)<br>{<br>&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(array[i]);<br></br>}</span>';
            document.getElementById("resposta4").innerHTML = '<span>int[] array = {1, 2, 3};<br>for (double i = 0; i < array.Length; i++)<br>{<br>&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(array[i]);<br></br>}</span>';
            document.getElementById("resposta1").style = 'height: 45%';
            document.getElementById("resposta2").style = 'height: 45%';
            document.getElementById("resposta3").style = 'height: 45%';
            document.getElementById("resposta4").style = 'height: 45%';
        } else {
            errou();
        }


    } else if (fase == 3) {


        if (resposta_escolhida == 3) {
            fase++;
            Swal.fire({
                imageUrl: "../../assets/Icons/foto_check.png",
                imageHeight: 130,
                title: "Parabéns",
                text: "Você finalizou o desafio de CSharp!!",
                width: 400,
                color: "black",
                willClose: () => {
                    finalizou();
                }
            });
            document.getElementById("respostas").style.display = "none";
            document.getElementById("botao_responder").style.display = "none";
            document.getElementById("questao").style = "color: green; font-size: 3.5vw";
            document.getElementById("pergunta").innerHTML = "Parabéns, você venceu o desafio de CSharp!";
        } else {
            errou();
        }


    }
}


function errou () {
    Swal.fire({
        imageUrl: "../../assets/Icons/icon_error.png",
        imageHeight: 130,
        title: "Errado",
        text: `Infelizmente o desafio será resetado`,
        width: 400,
        color: "black"
    });
    limpar_resposta();
    fase = 1;
    document.getElementById("questao").innerHTML = 'Seu desafio contém 5 questões de múltiplas escolhas, de códigos feitos em CSharp:<br><br>Questão 1: qual destes comandos exibe "Hello World" na tela';
    document.getElementById("resposta1").innerHTML = '<span>class Program<br>{<br>&nbsp;&nbsp;&nbsp;&nbsp;static void Main(string[] args)<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.print("Hello World");<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}</span>';
    document.getElementById("resposta2").innerHTML = '<span>class Program<br>{<br>&nbsp;&nbsp;&nbsp;&nbsp;static void main(string[] args)<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine("Hello World");<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}</span>';
    document.getElementById("resposta3").innerHTML = '<span>class Program<br>{<br>&nbsp;&nbsp;&nbsp;&nbsp;static void Main(string[] args)<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine("Hello World");<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}</span>';
    document.getElementById("resposta4").innerHTML = '<span>class Program<br>{<br>&nbsp;&nbsp;&nbsp;&nbsp;static void main(string[] args)<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Hello World");<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}</span>';
    document.getElementById("resposta1").style = 'height: 65%';
    document.getElementById("resposta2").style = 'height: 65%';
    document.getElementById("resposta3").style = 'height: 65%';
    document.getElementById("resposta4").style = 'height: 65%';
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
}