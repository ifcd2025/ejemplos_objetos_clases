import {Cuenta} from "./Cuenta.js";

const cuenta = new Cuenta("Luis García", 2000);

document.getElementById("titular").value = cuenta.titular;
document.getElementById("saldo").value = cuenta.saldo;
