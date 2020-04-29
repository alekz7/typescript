class Unificador<T=boolean> {
    valor:T;
    pila: T[];
    sumar: (valor1:T, valor2:T) => T;
}

// EJEMPLO PARA EL TIPO ENTERO
let miUnificador:Unificador<number>;
miUnificador = new Unificador<number>();
// REALIZANDO LAS DEFINICIONES DE LA CLASE PARA EL TIPO ENTERO
miUnificador.valor = 20;
miUnificador.sumar = function sumar(numero1:number, numero2:number){return numero1 + numero2}
console.log(miUnificador.sumar(2,3));

// EJEMPLO PARA EL TIPO STRING
let miSumaString:Unificador<string>;
miSumaString = new Unificador;
miSumaString.valor = "clase de strings"
miSumaString.sumar = (cadena1:string, cadena2:string)=>{ return `${cadena1} de ${cadena2}`}
console.log(miSumaString.sumar("caminos","de michoacan"));
