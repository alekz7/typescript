//_export.js
export const pi:number = 3.1416;

export function saludar():string{
    return "hola a todos estoy siendo exportado desde typescript";
}

export class Soldado<T>{
    private clase:string;
    public datos:T[];
}

export interface Animal{
    color:string;
}
