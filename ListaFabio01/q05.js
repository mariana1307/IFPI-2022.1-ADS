import prompt from "prompt-sync"
const input = prompt()

function main() {

    let integer_number = input("Digite um número inteiro com três dígitos: ").split("").map(Number)
    const [C, D, U] = integer_number
    const sum = C + D + U
    console.log(` A soma dos elementos do número inteiro de três dígitos equivale a: ${sum}`)


}
main()

// Leia um número inteiro (3 dígitos),
// calcule e escreva a soma de seus elementos (C + D + U).