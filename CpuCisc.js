import {CpuRisc} from "./CpuRisc.js";

// Con extends creamos una clase a partir de otra
// añadiendo solo lo nuevo
// A esto se le llama herencia
export class CpuCisc extends CpuRisc {
    constructor(modelo) {
        // Debemos llamar al constructor de la clase padre usando
        // super (debe ser la primera línea del constructor)
        super(modelo);
    }

    multiplicar() {
        this.setCX(this.getAX() * this.getBX());
        return this.getCX();
    }

    dividir() {
        this.setCX(this.getAX() / this.getBX());
        return this.getCX();
    }    
} 