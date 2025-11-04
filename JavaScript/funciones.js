//Convertir fucniones de Python a JavaScript
//En vex de def, se usa function

//Saludar a un usuario
function saludo(nombre){
    console.log("Hola, " + nombre + ". ¡Bienvdenido!");
}
//En vez de print(), se usa console.log()

//Repetir una cadena n veces con espacios
function repetirTexto(texto, n){
    return(texto + " ").repeat(n);
}
//Se usa método .repeat()

//Invertir una palabra 
function invertirPalabra(palabra){
    return palabra.split("").reverse().join("");
}
// En JS no existe slicing, pero seguimos el camino de: dividir, invertir y unir.

//Contar cuantas vocales hay en un texto
function contarVocales(texto){
    let i=0;
    for(const letra of texto.toLowerCase()){
        if("aeiou".includes(letra)){
            i+=1;
        }
    }
    return i;
}

//Mayúsculas y minúsculas
function mayusculas_y_minusculas(texto){
    return{
        mayusculas: texto.toUpperCase(),
        minusculas: texto.toLowerCase()
    };
}
/*
Para llamar esta función:
const res = mayusculas_y_minusculas("Ejemplo");
console.log(res.mayusculas); // "EJEMPLO"
console.log(res.minusulas); // "ejemplo"
*/

//Calcular el promedio de una lista de números
function promedio(numeros){
    if(numeros.length === 0){
        return 0;
    }
    const suma = numeros.reduce((acum, numAct) => acum + numAct, 0);
    return suma/numeros.length;
}
// Para sumar los números del arreglo se usa .reduce(), la funcion .length() para la longitud del arreglo

//Máximo y mínimo de una lista de números
function maximo_y_minimo(numeros){
    return [Math.max(...numeros), Math.min(...numeros)];
}
/*
Para llamar esta función:
const[max,min] = maximo_y_minimo([2,5,7,9,11,2,3]);
console.log("Máximo: ", max); // "Máximo: 11"
console.log("Mínimo: ", min); // "Mínimo: 2"
*/

//Filtrar números pares de una lista de números
function filtrarPares(numeros){
    return numeros.filter(num => num % 2 === 0);
}
// Esta función te devueve un arreglo con los números pares

//Unir elementos de texto
function sumar_elementos_texto(lista){
    return lista.join(" ");
}
//La función .join() existe tanto en Python como en JavaScript

//Verificar is un elemento está en una lista
function buscar_elemento(lista, elemento){
    return lista.includes(elemento);
}

//Contar palabras en una frase
function contar_palabras(frase){
    const palabras = frase.trim().split(/\s+/);
    return palabras.length;
}
// se usa "/\s+/" para separar por uno o más espacios

//Duplicar cada número de una lista
function duplicar_elementos(numeros){
    return numeros.map(num => num * 2);
}

// Capitalizar palabras
function capitalizar_palabras(frase){
    const palabras = frase.split(" ");
    for(let i = 0; 
        i < palabras.length;
        i++){
            palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1).toLowerCase();
        }
    return palabras.join(" ");
}

//Combinar dos listas alternando sus elementos 
function mezclar_listas(lista1, lista2){
    const combinada = [];
    const nmax = Math.max(lista1.length, lista2.length);
    for(let i = 0; i < nmax;i++){
        if(i < lista1.legth){
            combinada.push(lista1[i]);
        }
        if(i < lista2.legth){
            combinada.push(lista2[i]);
        }

        }
    return combinada;
}
// El método .push() añade elementos al final del arreglo.

// Devolver un diccionario con la frecuencia de cada elemento
function contar_frecuencia(lista){
    const frecuencia = {};
    for(const elemento of lista){
        frecuencia[elemento] = (frecuencia[elemento] ?? 0) + 1;
    }
    return frecuencia;
}
// El operador ?? es el operador de fusión nula de JS. Devuelve el primer elemento que no sea null o undefined.