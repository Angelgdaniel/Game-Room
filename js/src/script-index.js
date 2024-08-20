import { loader } from "../modules/preloader.js";
import { stopCopyContent, noCopyText, stopCopyImage, disableKeyKeyboard } from "../modules/security-code.js";
import { scrollFunction } from "../modules/button-up.js";

const $D = document;

// PRE-CARGADOR DEL SITIO WEB

window.addEventListener('DOMContentLoaded', ()=>{
    loader();
});

// TOOLTIPS BOOTSTRAP

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
[...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

//SEGURIDAD EN EL CODIGO

stopCopyContent();
noCopyText();
stopCopyImage();
disableKeyKeyboard();

// CAROUSEL DE IMAGENES

const setStylesCarousel = (container) =>{
    container.style.position = "relative";
    container.style.height = "470px";
}

const setStylesArrow = (arrow) => {
    arrow.style.position = "absolute";
    arrow.style.color = "cyan";
    arrow.style.top = "50%";
    arrow.style.border = "2px solid fuchsia";
    arrow.style.padding = "15px";
    arrow.style.borderRadius = "50%";
    arrow.style.cursor = "pointer";
    arrow.style.background = "radial-gradient(circle, rgba(255,0,255,0.3510539215686274) 90%, rgba(255,0,255,0.5099614845938375) 99%)";

    arrow.addEventListener("mouseover", () => {
        arrow.style.backgroundColor = "black";
    });

    arrow.addEventListener("mouseout", () => {
        arrow.style.background = "radial-gradient(circle, rgba(255,0,255,0.3510539215686274) 90%, rgba(255,0,255,0.5099614845938375) 99%)";
    });

    if (arrow === arrowLeft) {
        arrow.style.left = "5%";
    } else if (arrow === arrowRight) {
        arrow.style.right = "5%";
    }
}

const setStylesImage = (img) => {
    img.style.width = "100%";
    img.style.height = "470px";
}

const setStylesText = (text) => {
    text.style.color = "white";
    text.style.fontSize = "calc(10px + (20 - 10) * ((100vw - 400px) / (1400 - 400)));";
    text.style.fontWeight = "bolder";
    text.style.position = "absolute";
    text.style.left = "50%";
    text.style.bottom = "5%";
    text.style.transform = "translateX(-50%)";
    text.style.zIndex = "2";
    text.style.border = "2px solid cyan";
    text.style.borderRadius = "5%";
    text.style.padding = "15px";
    text.style.backgroundColor = "black";
}

let containerCarousel = $D.getElementById("carousel-container");
setStylesCarousel(containerCarousel);

let positionCurrent = 0;

let arrowLeft = $D.querySelector(".bi-arrow-left");
setStylesArrow(arrowLeft);

let arrowRight = $D.querySelector(".bi-arrow-right");
setStylesArrow(arrowRight);

let imageCurrent = $D.querySelector(".image-current");

let textCarousel = $D.querySelector(".text-carousel");
setStylesText(textCarousel);

// CREAMOS LA IMAGEN CON SUS ATRIBUTOS

const createImageElement = (src, alt) => {
    let img = $D.createElement("img");
    setStylesImage(img);
    img.setAttribute("src", src);
    img.setAttribute("alt", alt);
    return img;
};

// CREAMOS LAS VARIABLES

let imgEva = createImageElement("images/eva.jpg", "Eva in the galaxy");
let imgRobotShooter = createImageElement("images/robot-shooter.jpg", "Robot shooter");
let imgTron = createImageElement("images/tron-universe.jpg", "Tron universe");
let imgSubZero = createImageElement("images/sub-zero-legacy.jpg", "Sub zero legacy");

// GUARDAMOS ESAS VARIABLES EN UN ARRAY

const imgCollection = [imgEva, imgRobotShooter, imgTron, imgSubZero];

// FUNCION PARA ESTABLECER IMAGEN SIGUIENTE

const nextImage = () => {
    if(positionCurrent >= imgCollection.length - 1) {
        positionCurrent = 0;
    } else {
        positionCurrent++;
    }
    renderImage();
}

// FUNCION PARA ESTABLECER IMAGEN ANTERIOR

const prevImage = () => {
    if(positionCurrent <= 0) {
        positionCurrent = imgCollection.length - 1;
    } else {
        positionCurrent--;
    }
    renderImage();
}

// ASIGNAMOS EL CLICK A LAS FLECHAS

let intervalId = null;
let timeoutId = null;

const startTimer = () => {
    intervalId = setInterval(nextImage, 2000);
};

const stopTimer = () => {
    clearInterval(intervalId);
};

const resetTimer = () => {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(startTimer, 2000);
};

arrowLeft.addEventListener("click", () => {
    stopTimer();
    prevImage();
    resetTimer();
});

arrowRight.addEventListener("click", () => {
    stopTimer();
    nextImage();
    resetTimer();
});

// FUNCION PARA ACTUALIZAR LA IMAGEN DEL ELEMENTO

const renderImage = () => {
    imageCurrent.innerHTML = "";
    imageCurrent.appendChild(imgCollection[positionCurrent]);
    captureName();
}

// MOSTRAMOS EL NOMBRE DEL VIDEJUEGO

const gameNames = ["Eva in the galaxy", "Robot shooter", "Tron universe", "Sub zero legacy"];

// MOSTRAMOS EL NOMBRE DEL JUEGO

const captureName = () => {
    const currentGameName = gameNames[positionCurrent];
    textCarousel.textContent = currentGameName;
}

// ACTIVAMOS EL TEMPORIZADOR PARA LAS IMAGENES

nextImage();
startTimer();

// // BOTON QUE NOS DIRIGE HACIA ARRIBA

window.addEventListener("scroll", scrollFunction);



