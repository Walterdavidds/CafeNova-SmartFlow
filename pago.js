
// CaféNova SmartFlow - Pago simulado

document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario-pago");
    const totalPago = document.getElementById("total-pago");

    const carrito = obtenerCarrito();

    totalPago.textContent =
        "Total: S/ " + calcularTotal().toFixed(2);

    if (carrito.length === 0) {
        formulario.innerHTML =
            "<p>Tu carrito está vacío. Agrega productos antes de pagar.</p>";
        return;
    }

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const carritoActual = obtenerCarrito();

        if (carritoActual.length === 0) {
            alert("Tu carrito está vacío.");
            return;
        }

        const tipoTarjeta = document.querySelector(
            'input[name="tipo-tarjeta"]:checked'
        ).value;

        const pedido = {
            id: "CN-" + Date.now(),
            productos: carritoActual,
            total: calcularTotal(),
            metodoPago: "Tarjeta de " + tipoTarjeta,
            estado: "Pendiente",
            fecha: new Date().toISOString(),
            tiempoEstimado: 15
        };

// Revisar ingredientes antes de confirmar el pedido
const resultadoInventario =
    registrarConsumoInventario(pedido);

if (!resultadoInventario.ok) {
    alert(
        "⚠️ No se puede confirmar el pedido.\n\n" +
        resultadoInventario.mensaje +
        "\n\nEs necesario reponer ingredientes."
    );
    return;
}

        const pedidos = JSON.parse(
            localStorage.getItem("cafenova_pedidos") || "[]"
        );

        pedidos.push(pedido);

        localStorage.setItem(
            "cafenova_pedidos",
            JSON.stringify(pedidos)
        );

        localStorage.setItem(
            "cafenova_ultimo_pedido",
            pedido.id
        );

        localStorage.removeItem("cafenova_carrito");

        alert(
            "☕ ¡Muchas gracias por tu compra!\n\n" +
            "✅ Pago de prueba confirmado.\n" +
            "👨‍🍳 Tu pedido ha sido enviado a Cocina.\n\n" +
            "Podrás consultar el tiempo estimado de espera."
        );

        window.location.href = "cocina.html";
    });
});
