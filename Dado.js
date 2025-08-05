export class Dado {
    constructor(numeroCaras) {
        if(numeroCaras > 6) {
            this.numeroCaras = 6;
        } else {
            this.numeroCaras = numeroCaras;
        }
        //this.numeroCaras = numeroCaras > 6 ? 6 : numeroCaras; 
    }
    tirar() {
        return Math.floor(Math.random() * this.numeroCaras + 1);
    }
}