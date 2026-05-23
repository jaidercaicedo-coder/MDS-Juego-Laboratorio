let tamaño = 9;
let minas = 10;

function reiniciarJuego() {
    const selector = document.getElementById('dificultad');
    if (!selector) return; // Seguridad por si no encuentra el elemento
    
    tamaño = parseInt(selector.value);
    
    // Ajustar minas según dificultad
    if (tamaño === 9) minas = 10;
    else if (tamaño === 16) minas = 40;
    else if (tamaño === 25) minas = 99;

    const contenedor = document.getElementById('tablero');
    contenedor.innerHTML = '';
    contenedor.style.gridTemplateColumns = `repeat(${tamaño}, 30px)`; 
    
    crearTablero(); // Nombre corregido
}

function crearTablero() { // Nombre corregido
    const contenedor = document.getElementById('tablero');
    for (let i = 0; i < tamaño * tamaño; i++) {
        const celda = document.createElement('div');
        celda.classList.add('celda');
        
        celda.addEventListener('click', () => revelarCelda(celda));
        
        celda.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            celda.innerText = celda.innerText === '🚩' ? '' : '🚩';
        });

        contenedor.appendChild(celda);
    }
}

function revelarCelda(celda) {
    if (Math.random() < 0.15) { 
        celda.innerText = '💣';
        celda.style.backgroundColor = 'red';
        alert("¡BOOM! Juego terminado (P5-4)");
        reiniciarJuego();
    } else {
        celda.classList.add('revelada');
        celda.innerText = '1';
    }
}

// Solo una forma de iniciar, usemos window.onload para estar seguros
window.onload = function() {
    reiniciarJuego();
};