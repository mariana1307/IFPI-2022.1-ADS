import prompt from "prompt-sync"
const input = prompt()

function main() {
    const [A, B] = input("Digite dois números inteiros:").split(" ").map(Number)
    const quotient = A / B
    const rest_division = A % B
    console.log(`O resto da divisão de ${A} por ${B} equivale a ${quotient.toFixed(3)} e resto ${rest_division}`)


}
main()
    // Leia 2 números inteiros,
    // calcule e escreva o quociente e o resto da divisão do 1o pelo 2o.