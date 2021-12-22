
// Ejercicio 1
const numeros =[3,5,7,1,6];                        //Declaracion del arreglo
console.log("Los numeros ingresados son "+numeros);   //Se muestra en consola los elementos de los arreglos
numeros.sort(function(x,y){                          //Se utiliza el metodo .sort para ordenar los elementos del arreglo
    return x-y;
});
var valor=numeros.length-1;                               //Declaracion de variable 
console.log("el numero mas grande es "+ numeros[valor]);  //Imprimir en consola el valor esperado

// Ejercicio 2
numeros.sort(function(x,y){                 //Metodo .sort para ordenar         
    return y-x;                             //Retorna la funcion de manera descentente
});
console.log("Los numeros descendentes son "+numeros); //Imprime en consola el valor

//Ejercicio 3
/*Escriba un programa que tome dos listas y devuelva el mayor número de las dos listas. Sugerencia: llame a la función del ejercicio de clase n. ° 1 (el ejercicio n. ° 1 debe devolver un solo número, el número más grande de la lista).*/

let dos=[10,8,6,9,7];
dos.sort(function(x,y){
    return x-y;
}) 
let valorMayorDeDos=dos.length-1;
console.log("El numero mayor es:" +valorMayorDeDos);


//Practicas de arreglos
//Ejercicio 1
var arr = ["This", "is", "a", "sentence."];
function printOutString() {
    console.log(arr[0]+" "+arr[1]+" "+arr[2]+" "+arr[3]); // 
}
printOutString();

 //Ejercicio No. 2
 /* Escribe una función que:
Toma una serie de números.
Duplica el valor de cada número de la matriz.
Imprime la nueva matriz actualizada.
Ejemplo: dada una matriz [1, 2, 4, 5]. La salida debe ser[2, 4, 8, 10]*/

let serie=[1,2,4,5];
var multiplicacion=serie.map(x => x*2); /*El map()método crea una nueva matriz poblada con los resultados de llamar a una función proporcionada en cada elemento de la matriz de llamada.*/
console.log(multiplicacion);

//Ejercicio No. 3
/*Escriba un programa para calcular la suma y el producto (multiplicación) de una matriz de números. Imprime la suma y el producto.
Ejemplo: dada una matriz [1, 2, 3, 4] La suma es 10. El producto es 24.*/
let producto = [1,2,3,4];
let  multi = producto.reduce((a,b)=>a*b); // funciones flecha
console.log(multi);
let suma= producto.reduce((a,b)=>a+b);
console.log(suma);

/*Ejercicio No. 4
var student1Courses = ['Math', 'English', 'Programming'];
var student2Courses = ['Geography', 'Spanish', 'Programming'];
Cree un programa que recorra las 2 matrices; si hay cursos comunes, imprímalos en la consola.*/

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
var repetido = student1Courses.filter(function(e) {
  return student2Courses.indexOf(e) > -1;
});
console.log(repetido);

/*Ejercicio No. 5
Para cada uno de los ejercicios a continuación, suponga que está comenzando con la siguiente matriz de personas.
var people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
Escribe un comando que imprima a todas las personas de la lista.
Escribe el comando para eliminar "Dani" de la matriz.
Escribe el comando para eliminar "Juan" de la matriz.
Escriba el comando para agregar "Luis" al frente de la matriz. 
Escriba el comando para agregar su nombre al final de la matriz.
Usando un ciclo, iterar a través de esta matriz y después de console.log-ing "Maria", salir del ciclo.
Escribe el comando que da el indexOf donde se encuentra "Maria".
Al final del ejercicio, debería haber 4 personas en la matriz.   */

var people = ["Maria", "Dani", "Luis", "Juan", "Camila"]
console.log(people);
let elimd=people.splice(1,1);
console.log(elimd);
let elimj=people.splice(2,1);
console.log(elimj);


/* Clasificación
Ejercicio 1
Escriba un programa para ordenar alfabéticamente una lista de nombres.*/
 let lnombres=["Ana", "Luis", "Carlos", "Julieta", "Fernando","Pablo", "Sandra", "Giovanna"];
 let ordena=lnombres.sort(); 
 console.log(ordena);

/*Código de corrección y refactorización de código
Ejercicio 1
function someFunction(list) {
  if (list.length === 0) {
    return 0;
  }
  
  return list.length;
}*/

/*Ejercicio 2
El resultado debe ser: Reprobado si puntuaron 6 o menos Insuficiente si puntuaron> 6 pero menos de 9. (9 incluidos) Bueno si puntuaron> 9 pero menos de 14. (14 incluidos) Excelente si puntuaron 15. Error si los participantes ingrese un número negativo o un número fuera del rango admitido (fuera de 0-15)
function gradeLabel(grade) {
    if (grade < 6 && grade > 0) {
        console.log(“Failed”);
    }
    if (grade > 6 && grade <= 9) {
        console.log(“Insufficient”);
    }
    if (grade > 9 || grade <= 14) {
        console.log(“Good”);
    }
    if (grade == 15) {
        console.log(“Good”);
    }
    
    if (grade < 0 || grade > 15) {
        console.log("Error, outside of bounds");
    }
}*/

/*Ejercicios adicionales
Matrices
var values1= ['Apple', 1, false];
var values2 = ['Fries', 2 ,true];
var values3 = ['Mars', 9, 'Apple'];
Cree una función que compare las 3 matrices y encuentre elementos comunes. Imprime los elementos comunes.
var values1= ['Apple', 1, false];
var values2 = ['Fries', 2 ,true];
var values3 = ['Mars', 9, 'Apple'];*/
