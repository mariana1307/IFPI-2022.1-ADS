import prompt from "prompt-sync"
const input = prompt()

function main() {
    const dolar = Number(input("Informe por gentileza a cotação atual do dólar: R$ "))
    const dolar_value_is = Number(input("Digite um valor em dólar:"))
    const valor_reais = dolar_value_is * dolar
    console.log(`O valor equivalente em reais é: R$ ${valor_reais.toFixed(2)} `)

}
main()




// Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente
// em real (R$).