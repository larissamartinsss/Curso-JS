let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
console.log(valores)

/* for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

} */

for( let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) 
} /* funciona para arrays e objetos! "Como ler: 
Para cada posição dentro da variavel eu vou mostrar(o resultado)" */



