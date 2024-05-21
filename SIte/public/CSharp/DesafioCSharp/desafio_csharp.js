function voltar() {
    window.location.href = "../csharp.html";
}

const linguagem_atual = 'csharp';
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






function limpar_resposta() {
    resposta_escolhida = 0;
    document.getElementById("resposta1").style = "border: 0.2vw solid black;"
    document.getElementById("resposta2").style = "border: 0.2vw solid black;"
    document.getElementById("resposta3").style = "border: 0.2vw solid black;"
    document.getElementById("resposta4").style = "border: 0.2vw solid black;"
}

function resposta1() {
    resposta_escolhida = 1;
    document.getElementById("resposta1").style = "border: 0.4vw solid green;"
    document.getElementById("resposta2").style = "border: 0.2vw solid black;"
    document.getElementById("resposta3").style = "border: 0.2vw solid black;"
    document.getElementById("resposta4").style = "border: 0.2vw solid black;"
}

function resposta2() {
    resposta_escolhida = 2;
    document.getElementById("resposta2").style = "border: 0.4vw solid green;"
    document.getElementById("resposta1").style = "border: 0.2vw solid black;"
    document.getElementById("resposta3").style = "border: 0.2vw solid black;"
    document.getElementById("resposta4").style = "border: 0.2vw solid black;"
}

function resposta3() {
    resposta_escolhida = 3;
    document.getElementById("resposta3").style = "border: 0.4vw solid green;"
    document.getElementById("resposta1").style = "border: 0.2vw solid black;"
    document.getElementById("resposta2").style = "border: 0.2vw solid black;"
    document.getElementById("resposta4").style = "border: 0.2vw solid black;"
}

function resposta4() {
    resposta_escolhida = 4;
    document.getElementById("resposta4").style = "border: 0.4vw solid green;"
    document.getElementById("resposta1").style = "border: 0.2vw solid black;"
    document.getElementById("resposta2").style = "border: 0.2vw solid black;"
    document.getElementById("resposta3").style = "border: 0.2vw solid black;"
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
        } else {
            errou();
        }


    } else if (fase == 3) {


        if (resposta_escolhida == 0) {
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
            document.getElementById("questao").innerHTML = "Questão 3: ";
            document.getElementById("resposta1").innerHTML = '<span></span>';
            document.getElementById("resposta2").innerHTML = '<span></span>';
            document.getElementById("resposta3").innerHTML = '<span></span>';
            document.getElementById("resposta4").innerHTML = '<span></span>';
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
}