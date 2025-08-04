import {Cuenta} from "./Cuenta.js";

const cuenta = new Cuenta("Luis García", 2000);

document.getElementById("titular").value = cuenta.titular;
document.getElementById("saldo").value = cuenta.saldo;

document.getElementById("ingresar").addEventListener("click", ingresar);
document.getElementById("retirar").addEventListener("click", retirar);

function ingresar() {
    const importe = document.getElementById("importe").value;
    // Si queremos evitar que el código falle cuando hay un error 
    // producido con throw, usaremos un try catch
    try {
        // instrucciones que pueden fallar
        cuenta.ingresar(parseInt(importe));
        // Si hay un error, se salta al catch y estas instrucciones ya no se ejecutan
        document.getElementById("saldo").value = cuenta.saldo;
        // Usando ingresar2, lo anterior puede ser una sola instrucción
        // document.getElementById("saldo").value = cuenta.ingresar2(parseInt(importe));
        // Si uso Cuenta3 y quiero mostrar el saldo, debería usar:
        //document.getElementById("saldo").value = cuenta.getSaldo();
        document.getElementById("mensaje").textContent = "Dinero ingresado";
    } catch(error) {
        // instrucciones en caso de error
        document.getElementById("mensaje").textContent = "El importe es incorrecto";
        //document.getElementById("mensaje").textContent = error;
    }
}

function retirar() {
    const importe = document.getElementById("importe").value;
    try{
        cuenta.retirar(importe);
        document.getElementById("saldo").value = cuenta.saldo;
        document.getElementById("mensaje").textContent = "Dinero retirado";
    } catch(error) {
        document.getElementById("mensaje")
            .textContent = "No hay saldo suficiente o el importe no es correcto";
        //document.getElementById("mensaje").textContent = error;
    }
}