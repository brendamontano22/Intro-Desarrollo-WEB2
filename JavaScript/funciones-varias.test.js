const {esPositivo, primerElemento, residuo, obtenerElemento, obtenerProp, raiz, conjuntoUnico} = require("./funciones-varias.js");
test (`esPositivo debe regresar "Es positivo" para n > 0`, () => {
    expect(esPositivo(3)).toEqual("Es positivo");
});

test("es Positivo debe regresar 'Es negativo' para n < 0", () => {
    expect(esPositivo(-2)).toEqual("Es negativo");
});

test("primerElemento es truthy cuando el arreglo tiene al menos un elemento",() => {
    expect(primerElemento([1,2,3])).toBeTruthy();
});

test("residuo devuelve 0 cuando a es múltiplo de b", () => {
    expect(residuo(10,5)).toBeFalsy();
});

test("obtenerElemento regresa null si el índice está fuera de rango", () => {
    expect(obtenerElemento([1,2],5)).toBeNull();
});

test("obetenerProp regresa undefined si la propiedad no existe", () => {
    expect(obtenerProp({  a : 1 }, "b")).toBeUndefined();
});

test("raiz lanza error para números negativos", () => {
    expect(() => (raiz(-16))).toThrow("No se puede calcular la raíz de números negativos");
});

test("raíz devuelve el reusltado correcto para números positivos", () => {
    expect(raiz(16)).toBe(4);
});

test("conjuntoUnico devuelve uun Set específico (toStrictEqual)", () => {
    const esperado = new Set([1,2,3,4,5]);
    expect(conjuntoUnico()).toStrictEqual(esperado);
});