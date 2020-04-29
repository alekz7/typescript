var Unificador = /** @class */ (function () {
    function Unificador() {
    }
    return Unificador;
}());
// EJEMPLO PARA EL TIPO ENTERO
var miUnificador;
miUnificador = new Unificador();
// REALIZANDO LAS DEFINICIONES DE LA CLASE PARA EL TIPO ENTERO
miUnificador.valor = 20;
miUnificador.sumar = function sumar(numero1, numero2) { return numero1 + numero2; };
console.log(miUnificador.sumar(2, 3));
// EJEMPLO PARA EL TIPO STRING
var miSumaString;
miSumaString = new Unificador;
miSumaString.valor = "clase de strings";
miSumaString.sumar = function (cadena1, cadena2) { return cadena1 + " de " + cadena2; };
console.log(miSumaString.sumar("caminos", "de michoacan"));
