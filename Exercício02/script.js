function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fAno.value == 0 || fAno.value > ano) {
        window.alert("Verifique os dados e tente novamente")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = "homem"
            if (idade >= 0 && idade <= 10) { //Criança
                img.setAttribute('src', 'kidboy.png')
            } else if (idade < 21) { // Jovem
                img.setAttribute('src', 'yhomem.png')
            } else if (idade < 50) { //Adulto
                img.setAttribute('src', 'ahomem.png')
            } else { //Idoso
                img.setAttribute('src', 'shomem.png')
            }
        } else if (fsex) {
            genero = "mulher"
            if (idade >= 0 && idade <= 10) { //Criança
                img.setAttribute('src', 'kidgirl.png')
            } else if (idade < 21) { // Jovem
                img.setAttribute('src', 'ymulher.png')
            } else if (idade < 50) { //Adulto
                img.setAttribute('src', 'amulher.png')
            } else { //Idoso
                img.setAttribute('src', 'smulher.png')
            }
        }
    }
    res.style.textAlign = "center"
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}