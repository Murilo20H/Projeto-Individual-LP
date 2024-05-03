var pagina = 0;
function alternar() {
    if (pagina == 1) {
        div_caixas.style = "transition: 0.5s; left: 100vw"
        botao_seta.style = "display: none";
        pagina = 0;
    } else if (pagina == 2) {
        div_caixas.style = "transition: 0.5s; left: 0vw"
        botao_seta2.style = "display: flex";
        pagina = 1;
    }
}

function alternar2() {
    if (pagina == 0) {
        div_caixas.style = "transition: 0.5s; left: 0vw"
        botao_seta.style = "display: flex";
        pagina = 1;
    } else if (pagina == 1) {
        div_caixas.style = "transition: 0.5s; left: -100vw"
        botao_seta2.style = "display: none";
        pagina = 2
    }
}