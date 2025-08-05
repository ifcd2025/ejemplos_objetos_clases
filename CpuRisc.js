export class CpuRisc {
    #AX = 0; // # para que sea privada y solo se pueda usar dentro de la clase
    #BX = 0;
    #CX = 0;
    #modelo = "";

    constructor(modelo) {
        this.#modelo = modelo;
    }
    sumar() {
        this.#CX = this.#AX + this.#BX;
        return this.#CX;
    }

    restar() {
        this.#CX = this.#AX - this.#BX;
        return this.#CX;
    }

    incrementar() {
        this.#CX++;
        return this.#CX;
        // return ++this.#CX; En una sola línea las 2 anteriores
    }

    decrementar() {
        this.#CX--;
        return this.#CX;
        // return --this.#CX; En una sola línea las 2 anteriores
    }

    toString() {
        return "Modelo: " + this.#modelo + "\n"
            + "--------------------\n"
            + "AX: " + this.#AX + "\n"
            + "BX: " + this.#BX + "\n"
            + "CX: " + this.#CX + "\n";
    }

    getAX() {
        return this.#AX;
    }

    getBX() {
        return this.#BX;
    }

    getCX() {
        return this.#CX;
    }   

    setAX(valor) {
        this.#AX = valor;
    }

    setBX(valor) {
        this.#BX = valor;
    }

    // Para que en el ejercicio de la CpuCisc se pueda modificar
    // CX al multiplicar y dividir
    setCX(valor) {
        this.#CX = valor;
    }
    

}