
// CAFÉNOVA SMARTFLOW
// Sistema de inventario y reposición

const CLAVE_STOCK = "cafenova_inventario";
const CLAVE_REPOSICIONES = "cafenova_reposiciones";
const CLAVE_CONSUMOS = "cafenova_consumos";

// Ingredientes y cantidades iniciales de ejemplo
// Formato: nombre, unidad, cantidad inicial, mínimo
const ingredientesIniciales = {
    cafe: ["Café molido", "g", 2500, 500],
    leche: ["Leche", "ml", 10000, 2000],
    agua: ["Agua", "ml", 20000, 3000],
    azucar: ["Azúcar", "g", 3000, 500],
    chocolate: ["Chocolate", "g", 2000, 400],
    vainilla: ["Esencia de vainilla", "ml", 1000, 150],
    caramelo: ["Salsa de caramelo", "ml", 1200, 200],
    hielo: ["Hielo", "g", 10000, 2000],
    te: ["Té", "g", 500, 80],
    durazno: ["Durazno", "g", 2000, 300],
    limon: ["Limón", "und", 70, 15],
    fresa: ["Fresa", "g", 3500, 500],
    mango: ["Mango", "g", 3000, 500],
    helado: ["Helado", "g", 4000, 700],
    naranja: ["Naranja", "und", 70, 15],
    harina: ["Harina", "g", 7000, 1000],
    mantequilla: ["Mantequilla", "g", 3000, 500],
    huevo: ["Huevos", "und", 70, 12],
    queso: ["Queso", "g", 3000, 500],
    manjar: ["Manjar blanco", "g", 1500, 200],
    pollo: ["Pollo preparado", "g", 5000, 800],
    jamon: ["Jamón", "g", 2500, 400],
    pan: ["Pan", "und", 80, 15],
    palta: ["Palta", "g", 3000, 500],
    crema: ["Crema", "ml", 3000, 500],
    lecheCondensada: ["Leche condensada", "ml", 1500, 250]
};

// Recetas de demostración.
// Cada número indica lo usado para UNA unidad del producto.
const recetas = {

    // 15 CAFÉS CALIENTES

    "Café americano": {
        cafe: 18, agua: 180
    },

    "Capuchino": {
        cafe: 18, leche: 150
    },

    "Espresso": {
        cafe: 18, agua: 40
    },

    "Latte": {
        cafe: 18, leche: 220
    },

    "Mocaccino": {
        cafe: 18, leche: 180, chocolate: 25
    },

    "Flat White": {
        cafe: 20, leche: 150
    },

    "Macchiato": {
        cafe: 18, leche: 40
    },

    "Cortado": {
        cafe: 18, leche: 60
    },

    "Ristretto": {
        cafe: 18, agua: 25
    },

    "Lungo": {
        cafe: 18, agua: 110
    },

    "Caramel Macchiato": {
        cafe: 18, leche: 200,
        vainilla: 10, caramelo: 25
    },

    "Latte de vainilla": {
        cafe: 18, leche: 220, vainilla: 15
    },

    "Affogato": {
        cafe: 18, helado: 100
    },

    "Café bombón": {
        cafe: 18, lecheCondensada: 60
    },

    "Doppio": {
        cafe: 36, agua: 80
    },

    // 15 BEBIDAS FRÍAS

    "Frappé de café": {
        cafe: 18, leche: 180,
        hielo: 180, azucar: 15
    },

    "Frappé de chocolate": {
        chocolate: 35, leche: 200,
        hielo: 180, azucar: 15
    },

    "Frappé de vainilla": {
        vainilla: 20, leche: 200,
        hielo: 180, azucar: 15
    },

    "Frappé de caramelo": {
        caramelo: 35, leche: 200,
        hielo: 180
    },

    "Café americano helado": {
        cafe: 18, agua: 180, hielo: 120
    },

    "Latte helado": {
        cafe: 18, leche: 220, hielo: 120
    },

    "Mocaccino helado": {
        cafe: 18, leche: 200,
        chocolate: 30, hielo: 120
    },

    "Té helado de durazno": {
        te: 5, durazno: 80,
        agua: 230, hielo: 100
    },

    "Limonada clásica": {
        limon: 3, agua: 250,
        azucar: 20, hielo: 100
    },

    "Limonada de fresa": {
        limon: 2, fresa: 100,
        agua: 200, azucar: 20, hielo: 100
    },

    "Smoothie de fresa": {
        fresa: 180, leche: 180, hielo: 100
    },

    "Smoothie de mango": {
        mango: 180, leche: 180, hielo: 100
    },

    "Milkshake de chocolate": {
        helado: 150, leche: 180,
        chocolate: 30
    },

    "Milkshake de vainilla": {
        helado: 150, leche: 180,
        vainilla: 15
    },

    "Jugo de naranja": {
        naranja: 4, hielo: 80
    },

    // 6 POSTRES
    // Porciones e ingredientes simulados

    "Torta de chocolate": {
        harina: 70, huevo: 1,
        chocolate: 50, azucar: 30,
        mantequilla: 20
    },

    "Cheesecake de fresa": {
        queso: 80, fresa: 60,
        azucar: 20, crema: 50
    },

    "Brownie de chocolate": {
        harina: 40, chocolate: 45,
        huevo: 1, mantequilla: 25,
        azucar: 25
    },

    "Tiramisú": {
        cafe: 10, queso: 60,
        crema: 50, chocolate: 10,
        azucar: 15
    },

    "Alfajor": {
        harina: 40, mantequilla: 20,
        manjar: 35, azucar: 10
    },

    "Pie de limón": {
        harina: 60, mantequilla: 20,
        limon: 2, huevo: 1,
        azucar: 25
    },

    // 6 ACOMPAÑAMIENTOS

    "Croissant de mantequilla": {
        harina: 90, mantequilla: 35
    },

    "Croissant de jamón y queso": {
        harina: 90, mantequilla: 30,
        jamon: 50, queso: 50
    },

    "Sándwich mixto": {
        pan: 2, jamon: 60, queso: 60
    },

    "Empanada de pollo": {
        harina: 100, pollo: 100,
        mantequilla: 20
    },

    "Pan con pollo": {
        pan: 1, pollo: 130
    },

    "Tostadas con palta": {
        pan: 2, palta: 130
    }
};


// Crear inventario al primer uso
function obtenerInventario() {
    let guardado = null;

    try {
        guardado = JSON.parse(
            localStorage.getItem(CLAVE_STOCK)
        );
    } catch (error) {
        guardado = null;
    }

    if (!guardado || typeof guardado !== "object" ||
        Array.isArray(guardado)) {
        guardado = {};
    }

    // Agregar ingredientes iniciales si no existen
    for (const [id, datos] of Object.entries(
        ingredientesIniciales
    )) {
        if (!guardado[id]) {
            guardado[id] = {
                nombre: datos[0],
                unidad: datos[1],
                cantidad: datos[2],
                minimo: datos[3]
            };
        }
    }

    localStorage.setItem(
        CLAVE_STOCK,
        JSON.stringify(guardado)
    );

    return guardado;
}


// Leer una lista guardada
function leerLista(clave) {
    try {
        const resultado = JSON.parse(
            localStorage.getItem(clave) || "[]"
        );
        return Array.isArray(resultado) ? resultado : [];
    } catch (error) {
        return [];
    }
}


// Calcular ingredientes necesarios para un pedido
function calcularIngredientesPedido(productos) {
    const necesarios = {};

    for (const producto of productos) {
        const receta = recetas[producto.nombre];

        if (!receta) {
            throw new Error(
                "No existe receta para: " + producto.nombre
            );
        }

        const cantidad = Number(producto.cantidad);

        if (!Number.isInteger(cantidad) || cantidad <= 0) {
            throw new Error(
                "Cantidad no válida de: " + producto.nombre
            );
        }

        for (const [ingrediente, consumo] of Object.entries(
            receta
        )) {
            necesarios[ingrediente] =
                (necesarios[ingrediente] || 0) +
                consumo * cantidad;
        }
    }

    return necesarios;
}


// Revisar si alcanza el stock y descontarlo
// Retorna {ok:true} o {ok:false, mensaje:"..."}
function registrarConsumoInventario(pedido) {
    if (!pedido || !pedido.id ||
        !Array.isArray(pedido.productos) ||
        pedido.productos.length === 0) {
        return {
            ok: false,
            mensaje: "El pedido no es válido."
        };
    }

    const consumos = leerLista(CLAVE_CONSUMOS);

    // Evitar descontar el mismo pedido dos veces
    if (consumos.some(c => c.pedidoId === pedido.id)) {
        return {
            ok: false,
            mensaje: "Este pedido ya descontó inventario."
        };
    }

    let necesarios;

    try {
        necesarios = calcularIngredientesPedido(
            pedido.productos
        );
    } catch (error) {
        return {
            ok: false,
            mensaje: error.message
        };
    }

    const inventario = obtenerInventario();
    const faltantes = [];

    for (const [id, cantidad] of Object.entries(
        necesarios
    )) {
        const ingrediente = inventario[id];

        if (!ingrediente || ingrediente.cantidad < cantidad) {
            const nombre = ingrediente
                ? ingrediente.nombre
                : id;

            const disponible = ingrediente
                ? ingrediente.cantidad
                : 0;

            const unidad = ingrediente
                ? ingrediente.unidad
                : "";

            faltantes.push(
                nombre + ": necesitas " + cantidad +
                " " + unidad + ", tienes " +
                disponible + " " + unidad
            );
        }
    }

    if (faltantes.length > 0) {
        return {
            ok: false,
            mensaje: "Ingredientes insuficientes:\n\n" +
                faltantes.join("\n")
        };
    }

    // Solo descontamos si TODOS los ingredientes alcanzan
    for (const [id, cantidad] of Object.entries(
        necesarios
    )) {
        inventario[id].cantidad -= cantidad;
    }

    consumos.push({
        pedidoId: pedido.id,
        fecha: new Date().toISOString(),
        ingredientes: necesarios
    });

    localStorage.setItem(
        CLAVE_STOCK,
        JSON.stringify(inventario)
    );

    localStorage.setItem(
        CLAVE_CONSUMOS,
        JSON.stringify(consumos)
    );

    return {
        ok: true,
        mensaje: "Ingredientes descontados correctamente."
    };
}


// Comprobar el estado de un ingrediente
function estadoIngrediente(item) {
    if (item.cantidad <= 0) {
        return {
            texto: "Agotado",
            clase: "stock-agotado"
        };
    }

    if (item.cantidad <= item.minimo) {
        return {
            texto: "Stock bajo",
            clase: "stock-bajo"
        };
    }

    return {
        texto: "Disponible",
        clase: "stock-normal"
    };
}


// Mostrar tabla y alertas
function mostrarInventario() {
    const tabla = document.getElementById("tabla-stock");
    const alertas = document.getElementById("alertas-stock");

    if (!tabla || !alertas) return;

    const inventario = obtenerInventario();

    tabla.replaceChildren();
    alertas.replaceChildren();

    let disponibles = 0;
    let bajos = 0;
    let agotados = 0;

    for (const item of Object.values(inventario)) {
        const estado = estadoIngrediente(item);

        if (estado.texto === "Disponible") disponibles++;
        if (estado.texto === "Stock bajo") bajos++;
        if (estado.texto === "Agotado") agotados++;

        const fila = document.createElement("tr");

        const valores = [
            item.nombre,
            String(item.cantidad),
            item.unidad,
            String(item.minimo)
        ];

        valores.forEach(valor => {
            const celda = document.createElement("td");
            celda.textContent = valor;
            fila.appendChild(celda);
        });

        const celdaEstado = document.createElement("td");
        celdaEstado.textContent = estado.texto;
        celdaEstado.className = estado.clase;

        fila.appendChild(celdaEstado);
        tabla.appendChild(fila);

        if (estado.texto !== "Disponible") {
            const aviso = document.createElement("div");
            aviso.className = "alerta-inventario";

            aviso.textContent =
                "⚠️ " + item.nombre +
                " — Quedan " + item.cantidad +
                " " + item.unidad +
                ". Mínimo: " + item.minimo +
                " " + item.unidad + ".";

            alertas.appendChild(aviso);
        }
    }

    if (bajos === 0 && agotados === 0) {
        const mensaje = document.createElement("p");
        mensaje.className = "stock-normal";
        mensaje.textContent =
            "✅ Todos los ingredientes tienen stock suficiente.";
        alertas.appendChild(mensaje);
    }

    document.getElementById(
        "total-ingredientes"
    ).textContent = Object.keys(inventario).length;

    document.getElementById(
        "total-disponibles"
    ).textContent = disponibles;

    document.getElementById(
        "total-bajos"
    ).textContent = bajos;

    document.getElementById(
        "total-agotados"
    ).textContent = agotados;
}


// Preparar lista de ingredientes en el formulario
function cargarSelectorIngredientes() {
    const selector = document.getElementById(
        "ingrediente-reponer"
    );

    if (!selector) return;

    selector.replaceChildren();

    const inventario = obtenerInventario();

    for (const [id, item] of Object.entries(inventario)) {
        const opcion = document.createElement("option");
        opcion.value = id;
        opcion.textContent =
            item.nombre + " (" + item.unidad + ")";

        selector.appendChild(opcion);
    }
}


// Registrar solicitud de reposición
function solicitarReposicion(evento) {
    evento.preventDefault();

    const id = document.getElementById(
        "ingrediente-reponer"
    ).value;

    const cantidad = Number(
        document.getElementById("cantidad-reponer").value
    );

    const inventario = obtenerInventario();

    if (!inventario[id] ||
        !Number.isSafeInteger(cantidad) ||
        cantidad <= 0) {
        alert("Ingresa una cantidad válida mayor que cero.");
        return;
    }

    const reposiciones = leerLista(CLAVE_REPOSICIONES);

    reposiciones.push({
        id: "REP-" + Date.now(),
        ingredienteId: id,
        nombre: inventario[id].nombre,
        unidad: inventario[id].unidad,
        cantidad: cantidad,
        estado: "Pendiente",
        fecha: new Date().toISOString()
    });

    localStorage.setItem(
        CLAVE_REPOSICIONES,
        JSON.stringify(reposiciones)
    );

    document.getElementById(
        "cantidad-reponer"
    ).value = "";

    alert(
        "🚚 Solicitud registrada.\n" +
        cantidad + " " + inventario[id].unidad +
        " de " + inventario[id].nombre +
        ".\n\nPendiente de recepción."
    );

    mostrarReposiciones();
}


// Recibir ingredientes y aumentar el stock
function recibirReposicion(idReposicion) {
    const reposiciones = leerLista(CLAVE_REPOSICIONES);

    const solicitud = reposiciones.find(
        r => r.id === idReposicion
    );

    if (!solicitud || solicitud.estado !== "Pendiente") {
        return;
    }

    const inventario = obtenerInventario();

    if (!inventario[solicitud.ingredienteId]) {
        alert("No se encontró el ingrediente.");
        return;
    }

    const confirmado = confirm(
        "¿Confirmas que recibiste " +
        solicitud.cantidad + " " +
        solicitud.unidad + " de " +
        solicitud.nombre + "?"
    );

    if (!confirmado) return;

    inventario[solicitud.ingredienteId].cantidad +=
        solicitud.cantidad;

    solicitud.estado = "Recibido";
    solicitud.fechaRecepcion =
        new Date().toISOString();

    localStorage.setItem(
        CLAVE_STOCK,
        JSON.stringify(inventario)
    );

    localStorage.setItem(
        CLAVE_REPOSICIONES,
        JSON.stringify(reposiciones)
    );

    mostrarInventario();
    mostrarReposiciones();

    alert("✅ Ingredientes recibidos. Stock actualizado.");
}


// Cancelar una solicitud no recibida
function cancelarReposicion(idReposicion) {
    const reposiciones = leerLista(CLAVE_REPOSICIONES);

    const solicitud = reposiciones.find(
        r => r.id === idReposicion
    );

    if (!solicitud || solicitud.estado !== "Pendiente") {
        return;
    }

    if (!confirm("¿Cancelar esta solicitud?")) {
        return;
    }

    solicitud.estado = "Cancelado";

    localStorage.setItem(
        CLAVE_REPOSICIONES,
        JSON.stringify(reposiciones)
    );

    mostrarReposiciones();
}


// Mostrar solicitudes hechas
function mostrarReposiciones() {
    const contenedor = document.getElementById(
        "lista-reposiciones"
    );

    if (!contenedor) return;

    contenedor.replaceChildren();

    const reposiciones = leerLista(
        CLAVE_REPOSICIONES
    );

    if (reposiciones.length === 0) {
        const mensaje = document.createElement("p");
        mensaje.className = "mensaje-vacio";
        mensaje.textContent =
            "Todavía no se han solicitado ingredientes.";
        contenedor.appendChild(mensaje);
        return;
    }

    // Las solicitudes más recientes primero
    [...reposiciones].reverse().forEach(solicitud => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "pedido-proveedor";

        const titulo = document.createElement("h3");
        titulo.textContent =
            "📦 " + solicitud.nombre;

        const cantidad = document.createElement("p");
        cantidad.textContent =
            "Cantidad solicitada: " +
            solicitud.cantidad + " " +
            solicitud.unidad;

        const estado = document.createElement("p");
        estado.textContent =
            "Estado: " + solicitud.estado;

        tarjeta.append(titulo, cantidad, estado);

        if (solicitud.estado === "Pendiente") {
            const recibir = document.createElement("button");
            recibir.type = "button";
            recibir.className =
                "boton-inventario boton-recibir";
            recibir.textContent = "✅ Recibir ingredientes";

            recibir.addEventListener("click", () => {
                recibirReposicion(solicitud.id);
            });

            const cancelar = document.createElement("button");
            cancelar.type = "button";
            cancelar.className = "boton-inventario";
            cancelar.textContent = "❌ Cancelar";

            cancelar.addEventListener("click", () => {
                cancelarReposicion(solicitud.id);
            });

            tarjeta.append(recibir, cancelar);
        }

        contenedor.appendChild(tarjeta);
    });
}


// Inicializar interfaz de inventario
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById(
        "formulario-reposicion"
    );

    if (!formulario) return;

    cargarSelectorIngredientes();
    mostrarInventario();
    mostrarReposiciones();

    formulario.addEventListener(
        "submit",
        solicitarReposicion
    );

    // Actualizar al volver a la pestaña
    window.addEventListener("focus", () => {
        mostrarInventario();
        mostrarReposiciones();
    });
});
