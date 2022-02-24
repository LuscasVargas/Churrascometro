// Carne - 250 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml
// linguiça- 100gr por pessoa + de 6 horas - 180
// frango- 100gr por pessoa + de 6 horas - 180
// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;


    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalFrango = frangoPP(duracao) * adultos + (frangoPP(duracao) / 2 * criancas);
    let qdtTotalLinguica = linguicaPP(duracao) * adultos + (linguicaPP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);


    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${qdtTotalFrango / 1000} Kg de Frango</p>`
    resultado.innerHTML += `<p>${qdtTotalLinguica / 1000} Kg de Linguiça</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 350)} Latas de Cerveja de 350ml</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Pet's 2l de Bebidas</p>`


}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 450;
    } else {
        return 250;
    }
}
function linguicaPP(duracao) {
    if (duracao >= 6) {
        return 180;
    } else {
        return 100;
    }
}
function frangoPP(duracao) {
    if (duracao >= 6) {
        return 180;
    } else {
        return 100;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}
function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}