var EspacioDeTrabajo;
(function (EspacioDeTrabajo) {
    var Persona = /** @class */ (function () {
        function Persona() {
            this.nombre = "nombre default";
        }
        return Persona;
    }());
    EspacioDeTrabajo.Persona = Persona;
})(EspacioDeTrabajo || (EspacioDeTrabajo = {}));
var miPersona = new EspacioDeTrabajo.Persona();
console.log(miPersona.nombre);
