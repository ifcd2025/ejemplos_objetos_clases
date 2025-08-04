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

//
class Cuenta2 {
    // No se puede poner let ni const, pues siempre son let
    titular; // O más claro: titular = "";
    saldo; // O más claro: saldo = 0;
    // El resto idéntico (constructor incluido)
}

// Si no queremos que se pueda acceder desde fuera al atributo saldo
// podemos definirlo como privado, con lo que solo se podrá usar dentro de la clase
class Cuenta3 {
    titular;
    #saldo; // con la almohadilla lo hacemos privado
    // El resto igual, aunque hay que ir poniendo this.#saldo en lugar de this.saldo
    // Aunque, como no podrán acceder al saldo desde fuera, suele crearse un método
    // que lo devuelva (se suele llamar getAtributo)
    getSaldo() {
        return this.#saldo;
    }
    // Y si queremos que lo puedan cambiar, un método llamado setAtributo
    setSaldo(saldo) {
        this.#saldo = saldo;
    }

}