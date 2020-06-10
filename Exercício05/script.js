var sel = document.getElementById("selVal")
var res = document.getElementById('res')
var values = []

function addNumber() {
    let newnumber = Number(document.getElementById("nbr").value)
    if (values.indexOf(newnumber) != -1 || newnumber.length == 0 || newnumber < 1 || newnumber > 100) {
        alert("Valor inválido ou já adicionado")
    } else {
        values.push(newnumber)
        let option = document.createElement('option')
        option.text = `Valor ${newnumber} adicionado.`
        sel.appendChild(option)
        res.innerHTML = ""
    }
    document.querySelector("input#nbr").value = ""
    document.querySelector("input#nbr").focus()
}

function operations() {
    if (sel.innerHTML == "") {
        alert("Adicione valores antes de finalizar!")
    } else {
        res.innerHTML = ""
        res.innerHTML += `<p> Ao todo temos ${values.length} números cadastrados </p>`
        res.innerHTML += `<p> O maior valor informado foi: ${maior(values)}</p>`
        res.innerHTML += `<p>O menor valor informado foi: ${menor(values)}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos: ${soma(values)}</p>`
        res.innerHTML += `<p> A média dos valores digitados é: ${media(values)}</p>`
        values = []
        sel.innerHTML = ""
    }
    
}

function maior (m) {
    let maior = 0
    for (let x in m) {
        
        if (m[x] > maior) {
            maior = m[x]
        }
    }
    return maior
}

function soma (s) {
    let soma = 0
    for (let x in s) {
        soma += s[x]
    }
    return soma
}

function media (md) {
    let s = soma(md)
    let media = s / md.length
    return media
}

function menor (mn) {
    let menor = 101
    for (let x in mn) {
        if (mn[x] < menor) {
            menor = mn[x]
        }
    }
    return menor
}
