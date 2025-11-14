const { sumar, restar, multiplicar, dividir, operar, modulo } = require("./operaciones-aritmeticas");

test("Debe sumar dos números correctamente", () => {
    expect(sumar(2, 3)).toBe(5);
});

test("Debes restar dos números correctamente", () => {
    expect(restar(2,3)).toBe(-1);
    expect(restar(10,7)).toBe(3);
});

test("Debe multiplicar dos números correctamente", () => {
    expect(multiplicar(8,7)).toBe(56);
});

test("Debe calcualr el módulo crrectamente", () => {
    expect(modulo(20,6)).toBe(2);
});

test("Debe lanzar un error al dividir entre cero", () => {
    try{
        dividir(10,0);
    } catch (e) {
        expect(e.message).toBe("Error, no se puede dividir entre cero");
    }
});

test("Debe dividir dos números correctamente", () => {
    expect(dividir(10,2)).toBe(5);
});

test("Debe dividir dos números correctamente con decimales", () => {
    expect(dividir(7,2)).toBe(3.5);
});


test("Debe realizar la suma usando la función operar", () => {
    expect(operar(4, 5, "sumar")).toBe(9);
});

test("Debe realziar la resta usando la función operar", () => {
    expect(operar(10,6, "restar")).toBe(4);
});

test("Debe realizar la división usando la función operar", () => {
    expect(operar(20,4, "dividir")).toBe(5);
});

test("Deebe lanzar un error al dividir entre cero usando la función operar", () => {
    try{
        operar(10,0, "dividir");

    }catch (e){
        expect(e.message).toBe("Error, no se puede dividir entre cero");
    }
});

test("Debe realizar el modulo usando la función operar", () => {
    expect(operar(10,3, "modulo")).toBe(1);
});

test("Debe realizar la multiplicación usando la función operar", () => {
    expect(operar(4,5, "multiplicar")).toBe(20);
});

test("Debe lanzar un error al dividir entre cero", () => {
    expect(() => (dividir(2,0))).toThrow("Error, no se puede dividir entre cero");
});