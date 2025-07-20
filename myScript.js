// establecemos cuales son los elementos que van a ser protagonistas
let boton_new = document.getElementById("Add_task");
let pop_up = document.getElementById("Text");
let cancel = document.getElementById("cancelar");
let accept = document.getElementById("accept");


boton_new.onclick = function(){
    pop_up.style.display = "block";
}

cancel.onclick = function(){
    pop_up.style.display = "none";
    
}


accept.onclick = function(){
    
    let input = document.getElementById("nueva_task");
    let text = input.value.trim();

    if (text !== "") {
        // Crear checkbox
        let new_task = document.createElement("input");
        new_task.type = "checkbox";
        new_task.style.marginRight = "10px";
        new_task.style.marginLeft = "10px";

        // Crear etiqueta con el texto
        let label = document.createElement("label");
        label.textContent = text;

        // Crear contenedor para tarea
        let container = document.createElement("div");
        container.style.marginBottom = "10px";
        container.style.backgroundColor = "#f0f0f0";
        container.style.borderRadius = "5px";

        // Marcar como completada al hacer check
        new_task.addEventListener("change", function () {
            if (this.checked) {
                label.style.textDecoration = "line-through";
                label.style.color = "gray";
            } else {
                label.style.textDecoration = "none";
                label.style.color = "black";
            }
        });

        // Añadir checkbox y texto al contenedor
        container.appendChild(new_task);
        container.appendChild(label);

        // Añadir a la lista
        let list = document.getElementById("lista");
        list.appendChild(container);

        // Limpiar input y cerrar popup
        input.value = "";
        pop_up.style.display = "none";
    } else {
        alert("Please enter a task.");
    }
}

