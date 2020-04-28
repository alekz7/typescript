var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(nombre_) {
        this.nombre = nombre_;
    }
    Animal.prototype.caminar = function (distancia) {
        if (distancia === void 0) { distancia = 0; }
        console.log(this.nombre + " camino " + distancia + " en metros");
    };
    return Animal;
}());
var Serpiente = /** @class */ (function (_super) {
    __extends(Serpiente, _super);
    function Serpiente(nombre, longitud_) {
        var _this = _super.call(this, nombre) || this;
        _this.longitud = longitud_;
        return _this;
    }
    Serpiente.prototype.caminar = function (distancia) {
        if (distancia === void 0) { distancia = 0; }
        console.log('Deslizando');
        _super.prototype.caminar.call(this, distancia);
    };
    return Serpiente;
}(Animal));
var Caballo = /** @class */ (function (_super) {
    __extends(Caballo, _super);
    function Caballo(nombre_) {
        return _super.call(this, nombre_) || this;
    }
    return Caballo;
}(Animal));
var miSerpiente = new Serpiente("tuki", 20);
var miCaballo = new Caballo("dumbo");
miSerpiente.caminar(40);
