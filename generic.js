function elemento_random(lista) {
    var indiceRandom = Math.floor(Math.random() * lista.length);
    return lista[indiceRandom];
}
function elementos_random(lista) {
    return lista;
}
function cuantos_elementos(lista) {
    return lista.length;
}
var numeros = [1, 2, 3, 4, 5, 6, 7];
console.log(elemento_random(numeros));
var letras = ["uno", "dos", "tres", "cuatro", "cinco"];
console.log(elemento_random(letras));
var todos_los_numeros;
var todas_las_palabras;
todos_los_numeros = elementos_random(numeros);
todas_las_palabras = elementos_random(letras);
console.log(todas_las_palabras);
console.log(cuantos_elementos(letras));
