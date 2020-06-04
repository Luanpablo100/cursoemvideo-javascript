function contar() {
    var s = document.getElementById('start').value;
    var e = document.getElementById('end').value;
    var pass = document.getElementById('pass').value;
    var res = document.getElementById('res');

    if(s.length == 0 || e.length == 0 || pass.length == 0) {
        res.innerHTML = "Impossivel contar!"
    } else {
        let i = Number(s)
        let f = Number(e)
        let p = Number(pass)
        
        if (pass <=0) {
            alert('O passo a ser considerado será 1!')
            p = 1
        }

        res.innerHTML = "Contando: <br>"
        if (i < f) { // Contagem progressiva
            for (let c = i; c <= f; c+= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else { // Contagem regressiva
            for (let c = i; c >= f; c-= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
