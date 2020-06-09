let num = [5, 2, 4, 7, 9]

console.log(num)

console.log(`O vetor possui ${num.length} posições.`)

console.log(`O valor na posição 4 é ${num[4]}`)

console.log(`Os valores ordenados são: ${num}`)

num.push(8) // Adicionar valor a ultima posição

num.sort() // Ordenar os valores

console.log(`Agora os valores são: ${num}`)

// Mostrar todos os valores no vetor
// for (let pos = 0; pos < num.length; pos++) {
//     console.log(num[pos])
// }

// Ou

for(let pos in num) {
    console.log(num[pos])
}

console.log(`O valor 5 está na posição: ${num.indexOf(5)}`) //Pesquisar posição do valor(5)

if (num.indexOf(6) < 0) { //Este valor não está dentro do array, então retornará -1 e então a condição será verdadeira
    console.log("O valor 6 não foi definido") 
}