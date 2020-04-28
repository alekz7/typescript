class Animal{
    nombre:string;
    constructor(nombre_:string){
        this.nombre = nombre_;
    }
    caminar(distancia:number = 0):void{
        console.log(`${this.nombre} camino ${distancia} en metros`);
    }
}

class Serpiente extends Animal{
    longitud:number;
    constructor(nombre:string, longitud_:number){
        super(nombre);
        this.longitud = longitud_;
    }
    caminar(distancia:number = 0):void{
        console.log('Deslizando');
        super.caminar(distancia);
    }
}

class Caballo extends Animal{
    constructor(nombre_:string){
        super(nombre_);
    }
}
let miSerpiente = new Serpiente("tuki",20);
let miCaballo =  new Caballo("dumbo");
miSerpiente.caminar(40);