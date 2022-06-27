
//1- Crear una clase para un conjunto de productos cuyas propiedades son: nombre, precio y stock
//2- Crear un método que permita en los objetos de esta clase disminuir el stock cuando el usuario realiza una compra
//3- Crear un objeto a partir de dicha clase a la cual apliques el método creado
//4- Crear un método que permita en los objetos de esta clase disminuir el stock cuando el usuario realiza la compra de 3 productos del stock disponible

class Productos{
    constructor(nombre, precio, stock){
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
    
    disminuir(cantidad){
        this.stock = this.stock - cantidad
    }
}

const producto1 = new Productos('agua', 50, 300)
const producto2 = new Productos('lavandina', 100, 200)



