//1- Crea un Array que contenga 4 objetos con nombre y su precio: dos de ellos menos a 1000, otro de 600 y otro de 1500

let herramientas = [

    {name: 'taladro', precio: 900},
    {name: 'lijadora', precio: 700},
    {name: 'destornillador', precio: 600},
    {name: 'compresor', precio: 1500}   

];

console.log(herramientas);

//2- Recorre el array y busca el primer elemento cuyo precio es 600

let precio600 = herramientas.find(function(valor){
    return valor.precio === 600
});

console.log(precio600);

//3- Busca todos los elementos cuyo precio sea menor que 1000

let precioMenor1000 = herramientas.filter(valor => valor.precio <= 1000);

console.log(precioMenor1000);

//4- Crea una copia del array anterior pero que contenga solo los precios de los productos

let newCopiaObjetos = herramientas.map(function(herramienta){
    return 'Precio: ' + herramienta.precio
});

console.log(newCopiaObjetos);

//5- Crea una copia del array anterior que contenga el nombre de los productos y los precios aumentados en un 50%

let newCopia2Objetos = herramientas.map(function(herramienta){
    return 'Nombre: ' + herramienta.name + ' ' + 'Precio: ' + ((herramienta.precio) + (herramienta.precio * 0.5))
});

console.log(newCopia2Objetos);