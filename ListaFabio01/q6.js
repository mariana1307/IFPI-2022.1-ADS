import prompt from "prompt-sync"
const input = prompt()


function main() {
    const velocidade_km = Number(input('Digite uma velocidade em km/h : '))
    const velocidade_ms = velocidade_km / 3.6
    console.log(` A velocidade em km/h equivale a ${velocidade_ms.toFixed(2)} em m/s. `)

}
main()