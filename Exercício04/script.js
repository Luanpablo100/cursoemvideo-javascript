/* function tabuada () {
    res.innerHTML = ""
    let n = document.getElementById('nmr').value
    res = document.getElementById('res')
    if (n == 0) {
        res.innerHTML = "Não é possível multiplicar!"
    } else {
        for (let c = 1; c <= 10; c++) {
            let x = n * c
            res.innerHTML += (`${n} x ${c} = ${x} <br>`) 
        }
    }
}
*/

function tabuada() {
    let number = document.getElementById('nmr')
    let sel = document.getElementById("selTab")
    sel.innerHTML = ""
    if (number.value.length == 0) {
        window.alert("Por favor, digite um número!")
    } else {
        for (let c = 1;c <= 10; c++) {
            let n = Number(number.value)
            let x = n * c
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${x}`
            sel.appendChild(item)
        }
    }
}