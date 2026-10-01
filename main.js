'use strict'

const botaoCalcular = document.getElementById('calcular')

function calcularIdade () {
    const anoNasc = document.getElementById('ano-nascimento')
    const caixaResultado = document.getElementById('resultado')
    const anoAtual = 2026

    const idade = anoAtual - anoNasc.value

    caixaResultado.textContent = `Resultado: ${idade} anos`

}


botaoCalcular.addEventListener('click', calcularIdade)