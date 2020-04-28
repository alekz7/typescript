var Vehiculo = /** @class */ (function () {
    // el guion bajo al final es para indicar que es obligatorio el parametro
    function Vehiculo(marca_, fecha_creacion_, color_, puertas_, kilometraje) {
        if (kilometraje === void 0) { kilometraje = 0; }
        this.kilometraje = 0;
        this.marca = marca_;
        this.fecha_creacion = fecha_creacion_;
        this.color = color_;
        this.puertas = puertas_;
    }
    Vehiculo.prototype.avanzar = function () {
        this.kilometraje += 100;
    };
    return Vehiculo;
}());
var miVehiculo = new Vehiculo("Volkswagen", "2020", "rojo", 4, 100);
console.log(miVehiculo.kilometraje);
miVehiculo.avanzar();
console.log(miVehiculo.kilometraje);
