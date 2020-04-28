class Persona{
    public nombre:string;
    private edad:number;

    public constructor(nombre_:string){
        this.nombre = nombre_;
    }
    public hablar(mensaje:string):void{
        console.log(`${this.nombre} esta hablando..`);        
    }
    public aumentarEdad():void{
        this.edad += 1;
    }
    public aumentarEdadLLamaAPrivate(){
        this.aumentarEdadPrivate();
    }
    private aumentarEdadPrivate():void{
        console.log("Aumentando edad en privado");
        this.edad += 10;        
    }
}

let miPersona = new Persona("tribilin");
miPersona.hablar("Hola a tods como estan");

// los atributos y metodos privados solo pueden ser accedidos dentro de la clase
// miPersona.edad = 21; // ERROR
miPersona.aumentarEdad();
// miPersona.aumentarEdadPrivate(): // ERROR
miPersona.aumentarEdadLLamaAPrivate();
// PROTECTEC es posible de acceder desde las subclases
// PRIVATE no permite ser accedido desde las subclases