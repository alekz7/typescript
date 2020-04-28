var Persona = /** @class */ (function () {
    function Persona(nombre_) {
        this.nombre = nombre_;
    }
    Persona.prototype.hablar = function (mensaje) {
        console.log(this.nombre + " esta hablando..");
    };
    Persona.prototype.aumentarEdad = function () {
        this.edad += 1;
    };
    Persona.prototype.aumentarEdadLLamaAPrivate = function () {
        this.aumentarEdadPrivate();
    };
    Persona.prototype.aumentarEdadPrivate = function () {
        console.log("Aumentando edad en privado");
        this.edad += 10;
    };
    return Persona;
}());
var miPersona = new Persona("tribilin");
miPersona.hablar("Hola a tods como estan");
// los atributos y metodos privados solo pueden ser accedidos dentro de la clase
// miPersona.edad = 21; // ERROR
miPersona.aumentarEdad();
// miPersona.aumentarEdadPrivate(): // ERROR
miPersona.aumentarEdadLLamaAPrivate();
