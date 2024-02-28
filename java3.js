const $reset = document.getElementById('reset');
// document.addEventListener('click', e => {
//     if (e.target === $reset) {
//         // document.body.style.background = "white";

//     }
// })

const texto = document.getElementById('palabrasdelacajita');
const contarchr = document.getElementById('totalpalabras');
const contador = document.getElementById('contador');
const resetcaja = document.getElementById('area');


document.addEventListener('input', function (e) {



    const target = e.target;

    const longitudMax = target.getAttribute('maxlength');
    const longitudAct = target.value.length;



    
    contarchr.innerHTML = `${longitudAct} caracteres ingresados`;
                         
    contador.innerHTML = `${longitudAct}/${longitudMax}`;
    
    

    // document.addEventListener('click', e => {
    //     if (e.target === resetcaja) {
            

    //     }
    // })
   
});
function borrartexto() {
    document.getElementById("palabrasdelacajita").value = "";

}

