Investigación de pruebas unitarias
En la biblioteca Jest la función expect() sirve para declarar un valor obtenido  y después encadenar un matcher que exprese qué se espera de ese valor. 
Se ve de la siguiente forma:
expect(valorReal).matcher(valorEsperado);
expect() --> lo que la función está devolviendo
.matcher() --> comparar lo que espero

Los matchers son métodos como .toBe(), .toEqual(), toBeTruthy(), toBeFalsy(), .toBeNull(), .toBeUndefined(), .toThrow(), .toStrictEqual()

.toEqual
Funciona como una "deep equiality", a diferencia del toBe(), cuando se trata de obejtos o arreglos, revisa todas sus propiedades y verifica que el contennido coincida. 
Es recomendable usarlo cuando se requeire comparar obejetos/arreglos por contenido, no por referencia, cuando se quiere verificar qur el resultado tenga cierta estructura, cuanod no se necesita que sea exactamente la misma instancia, cuando se necesita comparar valores complejos de forma legible. 

.toBeTruthy
Verifica que un valor sea "truthy" en JS. El test pasa si el "valorReal", en booleano se comporta como "true". Se usa para comprobar que algo existe o se cumple.
Es útil cuando solo importa que "haya lago", no qué exactamente, verificar qu euna condición lógica sea verdadera, validaciones simples y tests donde el valor exacto puede cambiar, pero no puede ser nulo (tests felxibles).

.toBeFalsy
Verifica que un valor sea "falsy" en JS. 
Los valores falsy en JS son: false, 0, "", null, undefined, NaN.
Se usa cuando solo se quiere saber que una condición no se cumple o cuando quieres seguir la misma lógica que un if(!valor){..}

.toBeNull
Verifica que el valor sea exactamente null. El test solo pasa si valor===null.
Casos típicos: búsquedas sin reusltado, campos opcionales y estados iniciales.
Es recomendable usarlo cuando en el diseño se desea que "sin valor" se represente con un null, no cualquier valor falsy.

.toBeUndefined
Verifica que el valor sea exactamente undefined. El test solo pasa si valor===undefined.
Comprueba que algo no tiene valor definido como variables no inicializadas, propiedades que no existen o funciones sin return.
Es recomendable usarlo cuando el diseño distengue entre "no definido aún" (undefined) y "vacío intencionalmente" (null).

.toThrow
Comprueba que una función lanza un error cuando se ejecuta.
A expect se le pasa la fucnión, no el resultado.
Forma:
expect(() => funcionQueFalla()).toThrow();
Formas de uso:
1. Cualquier error
expect(()=> hacerAlgoPeligroso()).toThrow();
2. Error con mensaje
expect(()=>dividir(2,0)).toThrow("No se puede dividir entre cero");
3. Tipo de error (según el caso)
expect(() => JSON.parse("no es json")).toThrow(SyntaxError);
Es recomendable usarlo para validaciones, es decir, cuando la función debe rechazar argumentos inválidos.

.toStrictEqual
Hace una comparación más estricta que .toEqual
La diferencia es que toma en cuenta si hay propiedades extra o faltantes, distingue entre objeto literal e instancia de clase. 
Es recomendable usarlo para tests más rigurosos sobre la forma exacta del objeto.