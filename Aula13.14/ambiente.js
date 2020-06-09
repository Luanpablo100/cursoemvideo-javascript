//ESTRUTURAS DE REPETIÇÃO

var c = 1

while (c <= 10) {
    console.log(`While ${c}`)
    c++
}

// O while (enquanto) é uma estrutura de repetição com teste lógico no início

c = 1

do {
    console.log(`Do ${c}`)
    c++
} while (c <= 10)

// já o do (faça) executa primeiro o bloco e depois faz o teste lógico

//ESTRUTURA DE REPETIÇÃO COM VARIÁVEL DE CONTROLE - Inicialização, teste lógico e incremento. 
// O for é um junção das funções que foram definidas anteriormente para o funcionamento das repetições.

for (var c = 1; c <=10 ; c++) {
    console.log(`For ${c}`)
}