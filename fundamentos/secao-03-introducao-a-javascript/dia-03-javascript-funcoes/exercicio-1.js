let saldo = 200;

function somaSaldo(valor) {
    return valor + saldo;
};

function subtraiSaldo(valor) {
    return saldo - valor;
};

function multiplicaSaldo(valor) {
    return valor * saldo;
};

function divideSaldo(valor) {
    return saldo / valor;
};

console.log(somaSaldo(100));
console.log(subtraiSaldo(40));
console.log(multiplicaSaldo(3));
console.log(divideSaldo(2));