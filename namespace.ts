namespace EspacioDeTrabajo{
    export class Persona{
        public nombre:string = "nombre default";
    }
}
let miPersona: EspacioDeTrabajo.Persona = new EspacioDeTrabajo.Persona();
console.log(miPersona.nombre);
