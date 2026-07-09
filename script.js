const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const title = document.getElementById('title');
const catImg = document.getElementById('cat-img');

// Función para hacer que el botón NO escape
function dodge() {
    // Calculamos posiciones aleatorias dentro del ancho y alto de la ventana del navegador
    const randomX = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth - 20));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight - 20));

    // Cambiamos el comportamiento a absolute respecto al body para que se mueva por toda la pantalla
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

// Eventos para el botón NO (al pasar el mouse y al tocar en celulares)
noBtn.addEventListener('mouseenter', dodge);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Evita clics accidentales en móvil
    dodge();
});

// Busca esta sección en tu script.js y reemplázala:
yesBtn.addEventListener('click', () => {
    title.textContent = '¡Yippeee! ¡Sabía que dirías que sí! ❤️';
    
    // Cambiamos la imagen del gato a uno más feliz
    catImg.src = "https://media.tenor.com/V9_vX77g77EAAAAi/cute-cat.gif"; 
    
    /* --- AQUÍ ESTÁ EL CAMBIO --- */
    // En lugar de .style.display, le agregamos la clase que creamos en CSS
    noBtn.classList.add('ocultar'); 
    /* ---------------------------- */

    // Centramos el botón SÍ para que se vea bonito el final
    yesBtn.style.position = 'relative';
    yesBtn.style.left = '0';
    yesBtn.style.top = '0';
    yesBtn.style.transform = 'scale(1.3)';
    
    // Opcional: si metiste los botones en un contenedor, esto ayuda a centrarlo
    document.querySelector('.buttons').style.justifyContent = 'center';
});
