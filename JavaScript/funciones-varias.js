function esPositivo (n) {
    if (n > 0) {
        return "Es positivo";
    }else if (n < 0) {
        return "Es negativo";
    }
}

function primerElemento (arre) {
    return arre[0];
}

function residuo(a, b){
    return a % b;
}

function obtenerElemento (arre, i){
    if(!Array.isArray(arre)) return null;
    return(i >= 0 && i < arre.length) ? arre[i] : null;
}

function obtenerProp(obj, clave){
    return obj ? obj[clave] : undefined;
}

function raiz(n) {
    if (n < 0) throw new Error("No se puede calcular la raíz de números negativos");
    return Math.sqrt(n);
}

function conjuntoUnico() {
    return new Set([1, 2, 3, 4, 5]);
}

module.exports = {esPositivo, primerElemento, residuo, obtenerElemento, obtenerProp, raiz, conjuntoUnico};