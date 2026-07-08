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

// Evento para el botón SÍ
yesBtn.addEventListener('click', () => {
    title.textContent = '¡Yeeeiii! ¡Sabía que dirías que sí! ❤️';
    
    // Opcional: Cambiar la imagen del gato a uno más feliz si tienes el link
    catImg.src = "https://media.tenor.com/V9_vX77g77EAAAAi/cute-cat.gif"; 
    
    // Ocultamos el botón "NO" para celebrar
    noBtn.style.display = 'none';
    yesBtn.style.transform = 'scale(1.3)';
    yesBtn.style.left = 'calc(50% - 40px)'; // Lo centramos
});