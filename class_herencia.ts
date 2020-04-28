class Animal{
    caminar(distancia:number):void {
        console.log(`Se mueve ${distancia} metros cada vez`);        
    }
}

class Gato extends Animal{
    maullar():void{
        console.log("Miauuu");        
    }
}

let miGatito = new Gato();
miGatito.caminar(20)
miGatito.maullar()