import prompt from "prompt-sync"
const input = prompt()

function main() {
    let aleatory_number = input("Digite um número de três dígitos:").split("");

    aleatory_number = aleatory_number.reverse().join("")
    console.log(aleatory_number)

}
main()

// Leia um número inteiro (3 dígitos)
// e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)