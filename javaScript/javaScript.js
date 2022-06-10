// 1. Realizar un programa que muestre a través de dos variables, su nombre y su edad en una página HTML. Emplear el comando console.log para imprimir.

document.write('-------------------------------------------------------------------------------------------');
document.write(' Ejercicio 1');
document.write('<br>');
document.write('<br>');

const nombre = 'Sebastian';
let edad = 24;

// document.write("Mi nombre es", nombre, " y tengo", edad, "anios");

document.write('Mi nombre es: ',nombre,'.');
document.write("   ");
document.write('Mi edad es: ',edad);

// 2. Confeccionar un programa en JavaScript que defina e inicialice una variable de tipo cadena de caracteres donde almacenemos el nombre de un empleado y otra variable de tipo entera donde almacenar el sueldo.

document.write('<br>');
document.write('<br>');
document.write('-------------------------------------------------------------------------------------------');
document.write(' Ejercicio 2');
document.write('<br>');
document.write('<br>');

let nombre_empleado = prompt('Ingrese su nombre por favor');
let sueldo = parseInt(prompt('Ingrese su sueldo'));

document.write('Empleado: ',nombre_empleado,'.');
document.write("   ");
document.write('Sueldo: ',sueldo);

// 3. Confeccionar un programa que permita cargar el nombre de un usuario y su mail por teclado. Mostrar posteriormente los datos en la página HTML.

document.write('<br>');
document.write('<br>');
document.write('-------------------------------------------------------------------------------------------');
document.write(' Ejercicio 3');
document.write('<br>');
document.write('<br>');

let nombre_usuario = prompt('Ingrese su nombre por favor');
let email = prompt('Ingrese su email');

document.write('Usuario: ',nombre_usuario,'.');
document.write("   ");
document.write('Email: ',email);

// 4. Realizar la carga del lado de un cuadrado, mostrar por pantalla el perímetro del mismo (El perímetro de un cuadrado se calcula multiplicando el valor del lado por cuatro)

document.write('<br>');
document.write('<br>');
document.write('-------------------------------------------------------------------------------------------');
document.write(' Ejercicio 4');
document.write('<br>');
document.write('<br>');

let lado_cuadrado = parseInt(prompt('Ingrese la distancia del lado de un cuadrado: '));

let resultado = lado_cuadrado * 4

document.write('El perimetro del cuadradio es: ', resultado)

// 5. Escribir un programa en el cual se ingresen cuatro números, calcular e informar la suma de los dos primeros y el producto del tercero y el cuarto.

document.write('<br>');
document.write('<br>');
document.write('-------------------------------------------------------------------------------------------');
document.write(' Ejercicio 5');
document.write('<br>');
document.write('<br>');

let primero = parseInt(prompt('Ingrese el primer numero: '));
let segundo = parseInt(prompt('Ingrese el segundo numero: '));
let tercero = parseInt(prompt('Ingrese el tercer numero: '));
let cuarto = parseInt(prompt('Ingrese el cuarto numero: '));

let suma = primero + segundo;
let producto = tercero * cuarto;

document.write('La suma de los dos primeros numeros es: ', suma);
document.write('<br>');
document.write('El producto de los dos segundo numeros es: ', producto);


// 6. Realizar un programa que lea cuatro valores numéricos e informar su suma y producto.

document.write('<br>');
document.write('<br>');
document.write('-------------------------------------------------------------------------------------------');
document.write(' Ejercicio 6');
document.write('<br>');
document.write('<br>');

let suma_total = primero + segundo + tercero + cuarto;
let producto_total = primero * segundo * tercero * cuarto;

document.write('La suma total de los 4 numeros es: ', suma_total);
document.write('<br>');
document.write('El producto total de los 4 numeros es: ', producto_total);

// 7. Se debe desarrollar un programa que pida el ingreso del precio de un artículo y la cantidad que lleva el cliente. Mostrar lo que debe abonar el cliente (Ingresar por teclado un precio sin decimales, es decir un entero: 2, 7, 90 etc.)

document.write('<br>');
document.write('<br>');
document.write('-------------------------------------------------------------------------------------------');
document.write(' Ejercicio 7');
document.write('<br>');
document.write('<br>');

let precio = parseInt(prompt('Ingrese el precio del producto que desea llevar: '));
let cantidad = parseInt(prompt('Ingrese la cantidad del producto que desea llevar: '));

let total = precio * cantidad;

document.write('El saldo total a abonar, es: $',total);

// PARTE 2:

// 8. Se ingresan tres notas de un alumno, si el promedio es mayor o igual a siete mostrar el mensaje Promocionado. Tener en cuenta que para obtener el promedio debemos operar suma=nota1+nota2+nota3; y luego hacer promedio=suma/3;

// 9. Se ingresan tres notas de un alumno, si el promedio es mayor o igual a 4 mostrar un mensaje regular, sino reprobado.

document.write('<br>');
document.write('<br>');
document.write('-------------------------------------------------------------------------------------------');
document.write(' Ejercicio 8 y 9');
document.write('<br>');
document.write('<br>');

let nota1 = parseInt(prompt('Ingrese la primer nota del alumno: '));
let nota2 = parseInt(prompt('Ingrese la segunda nota del alumno: '));
let nota3 = parseInt(prompt('Ingrese la tercer nota del alumno: '));

let suma_notas = nota1 + nota2 + nota3;
let promedio = suma_notas / 3;

if (promedio > 7) {
    document.write('Alumno PROMOCIONADO');
}

else if (promedio <7 || promedio >4){
    document.write('Alumno REGULAR');
}

else{
    document.write('Alumno DESAPROBADO');
}


// 10. Solicitar que se ingrese dos veces una clave. Mostrar un mensaje si son iguales y otro si son distintas

document.write('<br>');
document.write('<br>');
document.write('-------------------------------------------------------------------------------------------');
document.write(' Ejercicio 10');
document.write('<br>');
document.write('<br>');

let clave1 = prompt('Ingrese su clave fiscal: ');
let clave2 = prompt('Reingrese nuevamente su clave fiscal: ');

if (clave1 == clave2){
    document.write('Las claves son iguales');
}

else{
    document.write('Las claves son distintas');
}


// 11. Se ingresa por teclado un valor entero, mostrar una leyenda que indique si el número es positivo, cero o negativo.

document.write('<br>');
document.write('<br>');
document.write('-------------------------------------------------------------------------------------------');
document.write(' Ejercicio 11');
document.write('<br>');
document.write('<br>');

let valor_entero = parseInt(prompt('Ingrese un valor entero: '));

if (valor_entero <0){
    document.write('Numero negativo');
}
else if (valor_entero == 0){
    document.write('Numero cero');
}
else{
    document.write('Numero positivo');
}


// 12. Confeccionar un programa que permita cargar un número entero positivo de hasta tres cifras y muestre un mensaje indicando si tiene 1, 2, o 3 cifras.

document.write('<br>');
document.write('<br>');
document.write('-------------------------------------------------------------------------------------------');
document.write(' Ejercicio 12');
document.write('<br>');
document.write('<br>');

let valor_int = (prompt('Ingrese un numero entero positivo de hasta 3 cifras: '));

let contador = valor_int.length

if (contador == 1){
    document.write('El numero que usted ingreso es de una cifra');
}
else if (contador == 2){
    document.write('El numero que usted ingreso es de dos cifras');
}
else if (contador == 3){
    document.write('El numero que usted ingreso es de tres cifras');
}


// 13. De un postulante a un empleo, que realizó un test de capacitación, se obtuvo la siguiente información: nombre del postulante, cantidad total de preguntas que se le realizaron y cantidad de preguntas que contestó correctamente.

// Se pide confeccionar un programa que lea los datos del postulante e informe el nivel del mismo según el porcentaje de respuestas correctas que ha obtenido, y sabiendo que:

// Nivel superior: Porcentaje =90%.
// Nivel medio: Porcentaje =75% y 90%.
// Nivel regular: Porcentaje=50% y &amp;lt;75%.
// Fuera de nivel: Porcentaje 50%.

document.write('<br>');
document.write('<br>');
document.write('-------------------------------------------------------------------------------------------');
document.write(' Ejercicio 13');
document.write('<br>');
document.write('<br>');

let nom_postulante = (prompt('Nombre del postulante: '));
let cant_preg = parseInt(prompt('Cantidad de preguntas: '));
let cant_preg_correctas = parseInt(prompt('Cantidad de preguntas respondidas correctamente: '));

let porcentaje = (cant_preg_correctas / cant_preg)

if (porcentaje >= 0.9){
    document.write('El nivel de respuestas correctas del postulante ', nom_postulante, ' , es: SUPERIOR')
}
else if (porcentaje >= 0.75 && porcentaje <0.9){
    document.write('El nivel de respuestas correctas del postulante ', nom_postulante, ' , es: MEDIO')
}
else if (porcentaje >= 0.5 && porcentaje <0.75){
    document.write('El nivel de respuestas correctas del postulante ', nom_postulante, ' , es: REGULAR')
}
else if (porcentaje < 0.5){
    document.write('El nivel de respuestas correctas del postulante ', nom_postulante, ' , es: FUERA DE NIVEL')
}


// 14. Realizar un programa que pida cargar una fecha cualquiera, luego verificar si dicha fecha corresponde a Navidad (se debe cargar por separado el dia, el mes y el año)

document.write('<br>');
document.write('<br>');
document.write('-------------------------------------------------------------------------------------------');
document.write(' Ejercicio 14');
document.write('<br>');
document.write('<br>');

// "Anyo" esta escrito de esta manera ya que en programacion no se utiliza la "ñ"

let dia = parseInt(prompt('Ingrese un dia del mes en formato numero (Ej: 10): '));
let mes = parseInt(prompt('Ingrese un numero de mes: '));
let anyo = parseInt(prompt('Ingrese un anyo: '));

if (dia == 24 && mes == 12){
    document.write('La fecha ingresada: (', dia,'/',mes,'/',anyo, '), corresponde a la fecha de las navidades')
}
else{
    document.write('La fecha ingresada: (', dia,'/',mes,'/',anyo, '), no corresponde a la fecha de las navidades')
}

('-------------------------------------------------------------------------------------------');
document.write('<br>');
document.write('<br>');