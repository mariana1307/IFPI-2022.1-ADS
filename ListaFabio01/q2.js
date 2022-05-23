import prompt from "prompt-sync"
const input = prompt()

function main() {
    const valor_horas = Number(input(" Digite um valor em horas: "))
    let valor_minutos = Number(input(" Digite um valor em minutos: "))
    valor_minutos += valor_horas * 60
    console.log(` O valor em horas e minutos equivale a ${valor_minutos} em minutos.`)

}
main()

// Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.