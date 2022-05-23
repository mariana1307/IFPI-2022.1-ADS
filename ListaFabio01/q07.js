import prompt from "prompt-sync"
const input = prompt()

function main() {
    const read_numbers = input("Insira três números, por gentileza:").split(" ").map(Number)
    const [A, B, C] = read_numbers
    const sum = A + B
    const difference = B - C
    console.log(`A soma dos dois primeiros números equivale a: ${sum} e a diferença dos dois últimos equivale a ${difference} .`)


}
main()
    // Leia 3 números,
    // calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.