// establecemos cuales son los elementos que van a ser protagonistas
let boton_new = document.getElementById("Add_task");
let pop_up = document.getElementById("Text");
let cancel = document.getElementById("cancelar");


boton_new.onclick = function(){
    pop_up.style.display = "block";
}

cancel.onclick = function(){
    pop_up.style.display = "none";
}