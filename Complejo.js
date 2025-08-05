// Un número complejo está formado por una parte real y una imagnaria
// Se representa como: parteReal + parteImagnariai
// Ejemplo: 3 + 2i
export class Complejo {
    constructor(parteReal, parteImaginaria) {
        this.parteReal = parteReal;
        this.parteImaginaria = parteImaginaria;
    }

    // Vamos a devolver un nuevo Complejo con la suma de ambos
    sumar(otro) {
        const pr = this.parteReal + otro.parteReal;
        const pi = this.parteImaginaria + otro.parteImaginaria;
        return new Complejo(pr, pi);
    }

    // Vamos a devolver un nuevo Complejo con la resta de ambos
    restar(otro) {
        const pr = this.parteReal - otro.parteReal;
        const pi = this.parteImaginaria - otro.parteImaginaria;
        return new Complejo(pr, pi);
    }

    toString() {
        return this.parteReal + "+" + this.parteImaginaria + "i";
    }

}
