export class Botella {
    constructor(litrosMaximos) {
        this.litrosActuales = 0;
        this.litrosMaximos = litrosMaximos;
    }
    vaciar() {
        this.litrosActuales = 0;
    }
    llenar() {
        this.litrosActuales = this.litrosMaximos;
    }
    introducir(litros) {
        if(this.litrosActuales + litros > this.litrosMaximos) {
            this.litrosActuales = this.litrosMaximos;
        } else {
            this.litrosActuales += litros;
        }
    }
    extraer(litros) {
        if(this.litrosActuales - litros < 0) {
            this.litrosActuales = 0;
        } else {
            this.litrosActuales -= litros;
        }
    }
}
