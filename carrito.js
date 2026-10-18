
/* CaféNova SmartFlow - Carrito de compras */

// Obtener los productos guardados
function obtenerCarrito() {
    try {
        return JSON.parse(
            localStorage.getItem("cafenova_carrito")
        ) || [];
    } catch (error) {
        return [];
    }
}

// Agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
    let carrito = obtenerCarrito();

    let producto = carrito.find(
        item => item.nombre === nombre
    );

    if (producto) {
        producto.cantidad++;
    } else {
        carrito.push({
            nombre: nombre,
            precio: precio,
            cantidad: 1
        });
    }

    localStorage.setItem(
        "cafenova_carrito",
        JSON.stringify(carrito)
    );

    alert("✅ " + nombre + " agregado al pedido.");
}

// Calcular el total del carrito
function calcularTotal() {
    let carrito = obtenerCarrito();

    return carrito.reduce(
        (total, producto) =>
            total + producto.precio * producto.cantidad,
        0
    );
}

// Mostrar los productos guardados en el carrito
function mostrarCarrito() {
    const contenedor = document.getElementById("lista-carrito");

    if (!contenedor) return;

    const carrito = obtenerCarrito();
    contenedor.innerHTML = "";

    if (carrito.length === 0) {
        contenedor.textContent = "🛒 Tu carrito está vacío.";
    } else {
        carrito.forEach((producto, indice) => {
            const tarjeta = document.createElement("div");
            tarjeta.className = "producto producto-carrito";

            const nombre = document.createElement("h3");
            nombre.textContent = producto.nombre;

            const detalle = document.createElement("p");
            detalle.textContent =
                "Cantidad: " + producto.cantidad +
                " | Precio: S/ " + Number(producto.precio).toFixed(2) +
                " | Subtotal: S/ " +
                (producto.precio * producto.cantidad).toFixed(2);

            const boton = document.createElement("button");
            boton.type = "button";
            boton.className = "boton-agregar";
            boton.textContent = "🗑️ Eliminar";
            boton.addEventListener("click", () => {
                const actualizado = obtenerCarrito();
                actualizado.splice(indice, 1);
                localStorage.setItem(
                    "cafenova_carrito",
                    JSON.stringify(actualizado)
                );
                mostrarCarrito();
            });

            tarjeta.append(nombre, detalle, boton);
            contenedor.appendChild(tarjeta);
        });
    }

    document.getElementById("total-carrito").textContent =
        "💰 Total: S/ " + calcularTotal().toFixed(2);
}

// Mostrar el carrito al abrir la página de Pedidos
document.addEventListener("DOMContentLoaded", mostrarCarrito);

// Ir a la página de pago
document.addEventListener("DOMContentLoaded", () => {
    const botonFinalizar =
        document.getElementById("boton-finalizar");

    if (botonFinalizar) {
        botonFinalizar.addEventListener("click", () => {
            if (obtenerCarrito().length === 0) {
                alert("🛒 Primero agrega productos al carrito.");
                return;
            }

            window.location.href = "pago.html";
        });
    }
});
