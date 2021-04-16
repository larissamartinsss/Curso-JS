// Aprendendo conditions! 
var idade = 21
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade >= 70) {
    console.log('Portanto, o seu voto é opcional.')
} else {
    console.log('Portanto, o seu voto é obrigatório.')
}

