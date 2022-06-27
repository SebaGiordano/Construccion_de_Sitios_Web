//1- Crear una función que muestre por consola un número pasado por parámetro

function numero() {
    let numero = parseInt(prompt('Ingrese un numero: '))
    alert('El numero ingresado es: ' + numero)
}

numero()

//2- Crear una función para sumar dos números mediante la función flecha y muestre el resultado por consola

document.write('<br>');
document.write('<br>');

const sumar = (a , b) => a + b;

let num1 = parseInt(prompt('Ingrese el primer numero: '))
let num2 = parseInt(prompt('Ingrese el segundo numero: '))

document.write('La suma de los dos numeros ingresados, es: ' + sumar(num1, num2))

//3- Crear una función flecha que muestre mediante consola el nombre y apellido de una persona, pasado por parámetros

document.write('<br>');
document.write('<br>');

const identidad = () => {
    let nombre = (prompt('Ingrese su nombre: '))
    let apellido = (prompt('Ingrese su apellido: '))
    return nombre + ' ' + apellido
    }

document.write('Nombre y Apellido: ' + identidad())

//4- Crear una función flecha que muestre mediante consola si el número ingresado por parámetro es positivo o negativo

document.write('<br>');
document.write('<br>');


let numeroPosNeg = (numero) => {
    
    if (numero > 0){
        return 'El numero ingresado es positivo'
    }
    else{
        return 'El numero ingresado es negativo'  
    }}
    
let numIngresado = parseInt(prompt('Ingrese un numero: '))
    
document.write(numeroPosNeg(numIngresado))





