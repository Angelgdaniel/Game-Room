const $D = document;

// ANULAMOS EL CLICK DERECHO DEL MOUSSE

export const stopCopyContent = () => {
    $D.body.addEventListener('contextmenu', e => {
        e.preventDefault();
    });
}

// UTILIZAMOS EL METODO CLIBOARDDATA PARA RESTRINGIR LA COPIA DE TEXTO

export const noCopyText = () =>{
    $D.addEventListener('copy', e => {
        e.preventDefault();
        e.clipboardData.setData('text/plain', 'Prohibido copiar contenido del sitio web game room');
    });
}

// EVITAMOS QUE SE COPIEN LAS IMAGENES

export const stopCopyImage = () => {
    $D.querySelectorAll("img").forEach(img => {
    img.style.userSelect = "none";
    img.style.pointerEvents = "none";
    });
}

// ANULAMOS LAS TECLAS F12, CTRL+S Y CTRL+U

export const disableKeyKeyboard = () => {
    $D.addEventListener("keydown", (e) => {
        if (e.ctrlKey && (e.key === "u" || e.key === "s")) {
            console.log("1era condicion activada");
            e.preventDefault();
            e.stopPropagation();
        } else if (e.key === "F12") {
            console.log("2da condicion activada");
            e.preventDefault();
        }
    });
}