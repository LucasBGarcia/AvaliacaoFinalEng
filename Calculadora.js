let prompt = require('prompt-sync')

function sum() {
    let valor1 = Number(prompt("Número 1: "))
    let valor2 = Number(prompt("Número 2: "))

    if (valor1 == '' || valor2 == '') {
        console.log('Digite um número!')
    } else {
        let soma = valor1 + valor2
        console.log(`${valor1} + ${valor2} = ${soma}`)
    }
}

function sub() {
    let valor1 = Number(prompt("Número 1: "))
    let valor2 = Number(prompt("Número 2: "))

    if (valor1 == '' || valor2 == '') {
        console.log('Digite um número!')
    } else {
        let subt = valor1 - valor2
        console.log(`${valor1} - ${valor2} = ${subt}`)
    }
}

function mult() {
    let valor1 = Number(prompt("Número 1: "))
    let valor2 = Number(prompt("Número 2: "))

    if (valor1 == '' || valor2 == '') {
        console.log('Digite um número!')
    } else {
        let multi = valor1 * valor2
        console.log(`${valor1} x ${valor2} = ${multi}`)
    }
}

function div() {
    let valor1 = Number(prompt("Número 1: "))
    let valor2 = Number(prompt("Número 2: "))

    if (valor1 == '' || valor2 == '') {
        console.log('Digite um número!')
    } else {
        let divi = valor1 / valor2
        console.log(`${valor1} / ${valor2} = ${divi}`)
    }
}
