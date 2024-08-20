const $D = document;

// BOTON QUE NOS DIRIGE HACIA ARRIBA

const setStylesButtonUp = (button) => {
    button.style.cssText = `
    display: none;
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    border: 2px solid fuchsia;
    background: radial-gradient(circle, rgba(255,0,255,0.3510539215686274) 90%, rgba(255,0,255,0.5099614845938375) 99%);
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 50%;
`;

    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "black";
    });

    button.addEventListener("mouseout", () => {
        button.style.background = "radial-gradient(circle, rgba(255,0,255,0.3510539215686274) 90%, rgba(255,0,255,0.5099614845938375) 99%)";
    });
};

const setStylesArrowUp = (arrow) => {
    arrow.className = "bi bi-arrow-up";
    arrow.style.cssText = `color: cyan; `;
}

let buttonUp = $D.createElement("button");
setStylesButtonUp(buttonUp);
let arrowUp = $D.createElement("i");
setStylesArrowUp(arrowUp);
buttonUp.appendChild(arrowUp);
$D.body.appendChild(buttonUp);

export const scrollFunction = () => {
    if ($D.body.scrollTop > ($D.body.scrollHeight / 2) || $D.documentElement.scrollTop > ($D.documentElement.scrollHeight / 2)) {
        buttonUp.style.display = "block";
    } else {
        buttonUp.style.display = "none";
    }
}

buttonUp.addEventListener("click", () => {
    $D.body.scrollTop = 0;
    $D.documentElement.scrollTop = 0;
});