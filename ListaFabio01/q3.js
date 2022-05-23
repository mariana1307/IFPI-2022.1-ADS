import prompt from "prompt-sync"
const input = prompt()

function main() {
    const valor_minutos = Number(input(" Digite um valor em minutos: "))
    const horas = Math.trunc(valor_minutos / 60)
    const minutos = valor_minutos % 60
    console.log(` O valor em horas e minutos equivale a ${horas} horas e ${minutos} minutos. `)

}
main()
    // Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.