import prompt from "prompt-sync"
const input = prompt()

function main() {
    const [A, B] = input("Digite dois números:").split(" ").map(Number)
    console.log(B, A)


}
main()
    // Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).