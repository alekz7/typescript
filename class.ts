class Vehiculo{
    //atributos
    marca:string;
    fecha_creacion:string;
    color:string;
    puertas:number;
    kilometraje:number = 0;

    // el guion bajo al final es para indicar que es obligatorio el parametro
    constructor(marca_:string, fecha_creacion_:string, color_:string, puertas_:number, kilometraje:number = 0){
        this.marca = marca_
        this.fecha_creacion = fecha_creacion_
        this.color = color_
        this.puertas = puertas_        
    }
    avanzar():void{
        this.kilometraje += 100;
    }
}
let miVehiculo = new Vehiculo("Volkswagen","2020","rojo",4,100);
console.log(miVehiculo.kilometraje);
miVehiculo.avanzar();
console.log(miVehiculo.kilometraje);
