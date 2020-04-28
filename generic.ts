function elemento_random<T>(lista: T[] ): T {
    let indiceRandom = Math.floor(Math.random()*lista.length);
    return lista[indiceRandom];
}

function elementos_random<T>(lista: T[]): T[]{
    return lista;
}

function cuantos_elementos<T>(lista: T[]): number{
    return lista.length;
}

let numeros:number[] = [1,2,3,4,5,6,7];
console.log(elemento_random(numeros));
let letras:string[] = ["uno","dos","tres","cuatro","cinco"];
console.log(elemento_random(letras));

let todos_los_numeros: number[];
let todas_las_palabras: string[];

todos_los_numeros = elementos_random(numeros);
todas_las_palabras = elementos_random(letras);
console.log(todas_las_palabras);
console.log(cuantos_elementos(letras));
