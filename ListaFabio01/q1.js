import prompt from 'prompt-sync'
const input = prompt({ sigint: false })

function main() {
    const velocidade_ms = Number(input(" Digite uma velocidade em m/s: "))
    const velocidade_km = velocidade_ms * 3.6
    console.log(` A velocidade em km/h equivale a : ${velocidade_km.toFixed(2)} km/h.`)
}
main()