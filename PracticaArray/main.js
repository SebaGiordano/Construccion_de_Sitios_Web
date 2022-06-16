// 1- Crea un array con 5 estudiantes y luego mostrarlos en el documento html

let estudiantes = [' Juan',' Pedro',' Maria', ' Nicolas', ' Martin']
document.write("Los estudiante son: ", estudiantes)

//2- Acceder al array y mostrar en la consola el estudiante que está en el último lugar

document.write('<br>');
document.write('<br>');

document.write("El ultimo estudiante de la lista es: ", estudiantes[4])

//3- El preceptor se confundió de un nombre por lo que debes cambiarle el nombre al tercer estudiante

document.write('<br>');
document.write('<br>');

estudiantes [2] = ' Martina'
document.write("Los estudiante son: ", estudiantes)

//4- Se sumo un nuevo integrante al grupo llamado Alberto, debes añadirlo a la lista y mostrarlo mediante un alert

document.write('<br>');
document.write('<br>');

alert((estudiantes[5] = ' Alberto'), 'Se ha unido')
document.write(estudiantes)

//5- Ahora, escribe el método que te permita quitar el último ingresante

document.write('<br>');
document.write('<br>');

estudiantes.pop()
document.write(estudiantes)

//6- Vuelvelo a poner pero al inicio de la lista

document.write('<br>');
document.write('<br>');

estudiantes.unshift(' Alberto')
document.write(estudiantes)

//7- Finalmente se cambia de sección por lo que se lo debe quitar del inicio de la lista

document.write('<br>');
document.write('<br>');

estudiantes.shift()
document.write(estudiantes)

//8- Crea un nuevo array llamado ingresantes2023 que contenga 3 nombres nuevos Une el primer array con el segundo, en uno nuevo llamado nuevoAño. Recurriendo a .concat()

document.write('<br>');
document.write('<br>');

let ingresantes2023 = [' Sebastian', ' Lucho', ' Estefano']
let nuevoAño = estudiantes.concat(ingresantes2023)
document.write(nuevoAño)

//9- Ordena a través de un método, alfabéticamente el array nuevoAño

document.write('<br>');
document.write('<br>');

nuevoAño.sort()
document.write('Lista ordenada alfabeticamente: ', nuevoAño)

//10- Crear una lista de artículos para el supermercado de 5 ítems. Con el método prompt pedir al usuario que ingrese un artículo para agregar a la lista. Si el artículo ya está en la lista (método array.includes()) avisarle al usuario que el artículo ya está Si no agregar el artículo a la lista y mostrarle al usuario la lista de todo lo que tiene que comprar.

document.write('<br>');
document.write('<br>');

let articulos = ['Lavandina', ' Alcohol', ' Coca-Cola', ' Agua', ' Pan']

let agregar_articulo = (prompt('Ingrese un articulo: '));

if (articulos.includes(agregar_articulo)){
    document.write('El articulo ya existe en la lista')
}

else {
    articulos.push(agregar_articulo)
}

document.write('<br>');

document.write(articulos)





