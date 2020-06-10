let amigo = { // Objetos = Arrays com atributos
    nome:"Luan",
    idade: 17,
    sexo: "M",
    peso: 57.8,
    engordar(p) {
        console.log("Engordou")
        this.peso += p
    }
}

console.log(amigo.idade)
amigo.engordar(3)
console.log(amigo.peso)

