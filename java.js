const $reset = document.getElementById('reset');


function CambiarColor(color) {
    document.querySelector('body').style.background = color;
}


document.addEventListener('click', e => {
    if (e.target === $reset) {
        document.body.style.background = "white";
    }
})
