import { loader } from "../modules/preloader.js";
import { stopCopyContent, noCopyText, stopCopyImage, disableKeyKeyboard } from "../modules/security-code.js";

// PRE-CARGADOR DEL SITIO WEB

window.addEventListener('DOMContentLoaded', ()=>{
    loader();
});

// SEGURIDAD EN EL CODIGO

stopCopyContent();
noCopyText();
stopCopyImage();
disableKeyKeyboard();

