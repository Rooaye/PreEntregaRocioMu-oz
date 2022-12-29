let costoEnvio = 500
function menuPrincipal() {
    
    let menu

    alert("Bienvenido a Kioskito Peluquero");

    do {
        menu = prompt("1-Deseo realizar una Compra \n 2- Deseo salir")
        menu = parseInt(menu)
        switch (menu) {
            case 1:
                comprarProductos()
                break

            case 2:
                alert("Nos Vemos!")
                break
            default:
                alert("opcion invalida")
        }
    } while (menu != 2)
}

function comprarProductos() {
    let totalCompra = 0
    let shampoo = 2500
    let acondicionador = 2000
    let planchita = 3500
    let lima = 500
    let tijera = 1200
    

    let producto = prompt("Para comprar algunos de nuetros producto\nElija la opcion que desee..\n 1-Shampoo\n 2-Acondicionador\n 3-Planchita\n 4-Lima\n 5-Tijera\n (presione aceptar para seguir comprando o ingrese 'fin' para salir)")
1
    producto = parseInt(producto)

while (producto != "fin") {

    switch (producto) {
        case 1:
            totalCompra = totalCompra + shampoo;
            alert("El precio del Shampoo es $" + shampoo + ", el total de su compra es: " + totalCompra)
            break
        case 2:
            totalCompra = totalCompra + acondicionador;
            alert("El precio del Acondicionador es $" + acondicionador + ", el total de su compra es: " + totalCompra)
            break
        case 3:
            totalCompra = totalCompra + planchita;
            alert("El precio del Planchita es $" + planchita + ", el total de su compra es: " + totalCompra)
            break
        case 4:
            totalCompra = totalCompra + lima;
            alert("El precio del Lima es $" + lima + ", el total de su compra es: " + totalCompra)
            break
        case 5:
            totalCompra = totalCompra + tijera;
            alert("El precio del Tijera es $" + tijera + ", el total de su compra es: " + totalCompra)
            break

        default:
            alert("opción inválida")
            break        
    }
    

    producto = prompt("Si usted desea seguir a comprando..\n Vuelva a elegir otra opc!\n 1-Shampoo \n 2-Acondicionador \n 3-Planchita \n 4-Lima \n 5-Tijera \n(presione aceptar para seguir comprando o ingrese 'fin' para terminar la compra)")
}

if (envios() == false) {
    totalCompra = totalCompra + costoEnvio;
}
function envios() {
    if (totalCompra >= 3000) {
        alert("Al ser una compra mayor o igual que $3000,El envio es gratuito")
        return true
    }
    
    else {
        alert("Al ser una compra menor a 3000, se incluye el costo de envio ")
        return false
    }
}

alert("El total de su compra es " + totalCompra)


return totalCompra    
}
menuPrincipal()





