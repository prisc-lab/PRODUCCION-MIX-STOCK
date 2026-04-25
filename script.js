// --- 1. FUNCIÓN DEL RELOJ (Se ejecuta sola) ---
function actualizarReloj() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    
    // Esto busca el "id" que pusimos en el HTML
    const elementoReloj = document.getElementById('reloj-vivo');
    if(elementoReloj) {
        elementoReloj.innerText = `${horas}:${minutos}:${segundos}`;
    }
}

// Hace que el reloj se mueva cada segundo
setInterval(actualizarReloj, 1000);
actualizarReloj();

// Muestra la fecha (esto ya lo tenías)
document.addEventListener("DOMContentLoaded", () => {
    const fechaElt = document.getElementById('fecha-actual');
    if(fechaElt) {
        fechaElt.innerText = new Date().toLocaleDateString('es-AR', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });
    }
});


// --- 2. FUNCIÓN DE CÁLCULO (Se ejecuta al tocar el botón) ---
function calcular() {
    const total = document.getElementById('inputAutos').value;
    
    // Leemos los porcentajes de la pantalla
    const pDrive = document.getElementById('pDrive').value / 100;
    const pDesign = document.getElementById('pDesign').value / 100;
    const pMarron = document.getElementById('pMarron').value / 100;
    const pGris = document.getElementById('pGris').value / 100;

    const resultadosDiv = document.getElementById('resultados');
    
    if(!total || total <= 0) return alert("Por favor, ingrese el total de unidades.");

    const productos = [
        { nombre: "Modelo Drive", porc: pDrive },
        { nombre: "Modelo Design", porc: pDesign },
        { nombre: "Pack Cuero Marrón", porc: pMarron },
        { nombre: "Pack Cuero Gris", porc: pGris }
    ];

    resultadosDiv.innerHTML = "<h3 style='text-align:center; margin-top:20px;'>Resultados del Mix</h3>"; 

    productos.forEach(auto => {
        const cantidad = Math.round(total * auto.porc);
        resultadosDiv.innerHTML += `
            <div class="card">
                <span class="modelo-nombre">${auto.nombre}</span>
                <span class="cantidad-numero">${cantidad} u.</span>
            </div>`;
    });
}

function limpiar() {
    document.getElementById('inputAutos').value = "";
    document.getElementById('resultados').innerHTML = "";
}