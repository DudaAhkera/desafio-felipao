//let nomeHeroi = "Duda"
//let xpHeroi = 2010

let heroi = ["Duda", "2010"]

if (heroi[1] <= 1000) {
    console.log("O Herói " + heroi[0] + " está no nível Ferro com " + heroi[1] + " pontos.")

}else if ( heroi[1] >= 1001 && heroi[1] <= 2000) {
    console.log("O Herói " + heroi[0] + " está no nível Bronze com " + heroi[1] + " pontos.")

}else if (heroi[1] >= 2001 && heroi[1] <= 5000) {
    console.log("O Herói " + heroi[0] + " está no nível Prata com " + heroi[1] + " pontos.")

}else if (heroi[1] >= 5001 && heroi[1] <= 7000) {
    console.log("O Herói " + heroi[0] + " está no nível Ouro com " + heroi[1] + " pontos.")

}else if (heroi[1] >= 7001 && heroi[1] <= 8000) {
    console.log("O Herói " + heroi[0] + " está no nível Platina com " + heroi[1] + " pontos.")

}else if (heroi[1] >= 8001 && heroi[1] <= 9000) {
    console.log("O Herói " + heroi[0] + " está no nível Ascendente com " + heroi[1] + " pontos.")

}else if (heroi[1] >= 9001 && heroi[1] <= 10000) {
    console.log("O Herói " + heroi[0] + " está no nível Imortal) com " + heroi[1] + " pontos.")

}else {
    console.log("O Herói " + heroi[0] + " está no nível Radiante com " + heroi[1] + " pontos.")

}


