let tamaño = 9;
let minas = 10;
let tableroLogico = [];

// P5-7: Función para reiniciar/iniciar
function reiniciarJuego() {
    const selector = document.getElementById('dificultad');
    tamaño = parseInt(selector.value);
    
    // Ajustar minas según dificultad
    if (tamaño === 9) minas = 10;
    else if (tamaño === 16) minas = 40;
    else if (tamaño === 25) minas = 99; // Dificultad difícil

    const contenedor = document.getElementById('tablero');
    contenedor.innerHTML = '';
    // Ajustamos el estilo para que quepan las 25 columnas
    contenedor.style.gridTemplateColumns = `repeat(${tamaño}, 30px)`; 
    
    crearTablero();
}
}

function crearTablero() {
    const contenedor = document.getElementById('tablero');
    for (let i = 0; i < tamaño * tamaño; i++) {
        const celda = document.createElement('div');
        celda.classList.add('celda');
        
        // P5-2: Click izquierdo para revelar
        celda.addEventListener('click', () => revelarCelda(celda));
        
        // P5-3: Click derecho para poner bandera
        celda.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            celda.innerText = celda.innerText === '🚩' ? '' : '🚩';
        });

        contenedor.appendChild(celda);
    }
}

function revelarCelda(celda) {
    // P5-4: Lógica de pérdida si es mina (ejemplo simple)
    if (Math.random() < 0.15) { 
        celda.innerText = '💣';
        celda.style.backgroundColor = 'red';
        alert("¡BOOM! Juego terminado (P5-4)");
        reiniciarJuego();
    } else {
        celda.classList.add('revelada');
        celda.innerText = '1'; // Simulación de número
    }
}

// Iniciar al cargar
reiniciarJuego();