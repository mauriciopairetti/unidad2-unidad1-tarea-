const $reset = document.getElementById('reset');


function CambiarColor(color) {
    document.querySelector('body').style.background = color;
}



// function cambiarcolor1() {
// let body =document.getElementsByTagName('body')[0];




//             body.style.backgroundColor= '#f00';

//     }
document.addEventListener('click', e => {
    if (e.target === $reset) {
        document.body.style.background = "white";
    }
})
