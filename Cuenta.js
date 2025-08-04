export class Cuenta {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    ingresar(importe) {
        if(importe <= 0) {
            throw new Error("El importe debe ser mayor que cero");
        } else {
            this.saldo += importe;
        }
    }

    // Puede ser una buena opción devolver el saldo que quede
    // Lo mismo se podría hacer en retirar
    ingresar2(importe) {
        if(importe <= 0) {
            throw new Error("El importe debe ser mayor que cero");
        } else {
            this.saldo += importe;
        }
        return this.saldo;
    }

    retirar(importe) {
        if(this.saldo - importe < 0) {
            throw new Error("No hay saldo suficiente");
        } else {
            this.saldo -= importe;
        }
    }
}