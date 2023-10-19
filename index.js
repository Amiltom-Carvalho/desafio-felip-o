let NomeHeroi = "Meliodas"
let XpHeroi = 1000
let NivelHeroi

let NivelFerro = 1000
let NivelBronze = 2000
let NivelPrata = 5000
let NivelOuro = 7000
let NivelPlatina = 8000
let NivelAscendente = 9000
let NivelImortal = 10000
let NivelRadiante = 10001

if (XpHeroi <= NivelFerro) {
  NivelHeroi = "Ferro"
}
if ((XpHeroi > NivelFerro) && (XpHeroi <= NivelBronze)) {
  NivelHeroi = "Bronze"
}
if ((XpHeroi > NivelBronze) && (XpHeroi <= NivelPrata)) {
  NivelHeroi = "Prata"
}
if ((XpHeroi > NivelPrata) && (XpHeroi <= NivelOuro)) {
  NivelHeroi = "Ouro"
}
if ((XpHeroi > NivelOuro) && (XpHeroi <= NivelPlatina)) {
  NivelHeroi = "Platina"
}
if ((XpHeroi > NivelPlatina) && (XpHeroi <= NivelAscendente)) {
  NivelHeroi = "Ascendente"
}
if ((XpHeroi > NivelAscendente) && (XpHeroi <= NivelImortal)) {
  NivelHeroi = "Imortal"
}
if (XpHeroi > NivelImortal) {
  NivelHeroi = "Radiante"
}

console.log("O Herói " + NomeHeroi + (" está no nivel de ") + NivelHeroi)