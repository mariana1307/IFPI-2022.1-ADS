import prompt from "prompt-sync"
const input = prompt()

function main() {
    const aleatory_numbers = input("Digite dois números:").split(" ").map(Number)
    const [A, B] = aleatory_numbers
    const result = (A + B) / (A - B)
    console.log(`O resultado da divisão da soma pela subtração dos números supramencionados equivale a ${result} `)


}
main()
    // Leia 2 números,
    // calcule e escreva a divisão da soma pela subtração dos números lidos.