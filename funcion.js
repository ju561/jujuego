let click = 0;
let contador = 1;


const clickDisplay = document.getElementById("click");
const contDisplay = document.getElementById("contador");


function actualizar() {
    clickDisplay.textContent = click;
  contDisplay.textContent = contador;
  

  
}

function clickobjeto(){
    click += contador; 
    actualizar();
}


