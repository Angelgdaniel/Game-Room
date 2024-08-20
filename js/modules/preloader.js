// PRE CARGADOR

const $D = document;

const setStylesLoader = (p) => {
    p.className = "container-fluid preloader d-flex align-items-center justify-content-center";
    p.style.backgroundColor = "black";
    p.style.position = "fixed";
    p.style.top = "0";
    p.style.left = "0";
    p.style.width = "100%";
    p.style.height = "100vh";
    p.style.zIndex = "999";
    p.style.transition = "all 1.5s";
}

const setStylesImg = (p) => {
    p.src = "images/logo-chico-control.jpg";
    p.alt = "Icono precarga del sitio web";
    p.className = "mb-3";
    p.style.boxShadow ="0 3px 50px 0 cyan inset,0 3px 50px 0 cyan, 0 3px 50px 0 cyan inset";
    p.style.borderRadius ="50%";
    p.style.objectFit = "cover";
    p.style.padding = "3%";
    p.style.width = "45%";
    p.style.animationName = "loader";
    p.style.animationDuration = "1.5s";
    p.style.animationDirection = "linear";
    p.style.animationDelay = "0s";
    p.style.animationIterationCount = "infinite";
}

const setStylesParagraph = (p) =>{
    p.textContent = "Cargando...";
    p.style.color = "white";
    p.style.fontFamily = "sharetechmonoregular";
    p.style.fontSize = "calc(20px + (30 - 20) * ((100vw - 400px) / (1400 - 400)))";
    p.style.letterSpacing = "5px";
    p.style.position = "relative";
    p.style.left = "20px";
}

export const loader = () =>{

    // Creamos el precargador

    let containerLoader = $D.createElement("div");
    let divLoader = $D.createElement("div");
    divLoader.className = "text-center";
    setStylesLoader(containerLoader);
    let img = $D.createElement("img");
    setStylesImg(img);
    let paragraph = $D.createElement("p");
    setStylesParagraph(paragraph);
    containerLoader.appendChild(divLoader);
    divLoader.append(img, paragraph);

    // Lo agregamos al cuerpo del documento

    $D.body.appendChild(containerLoader);

    window.addEventListener("load", () => {

        // Desaparece lentamente y luego lo eliminamos del cuerpo

        let body = $D.getElementById('body');
        let preloader = $D.querySelector('.preloader');
        preloader.style.opacity = 0;
        preloader.style.visibility = 'hidden';
        body.removeChild(preloader);
    })
}