/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const form = document.querySelector("#form");

let botonCalcular = document.querySelector(".calcular");

let botonEliminar = document.querySelector(".eliminar");

let botonEnviar = document.querySelector(".enviar");

function calcularEdadMayor(arrayDeInputs) {
  let numeroComparador = arrayDeInputs[0];

  for (let index = 0; index < arrayDeInputs.length; index++) {
    if (numeroComparador <= arrayDeInputs[index]) {
      numeroComparador = arrayDeInputs[index];
    } else {
      numeroComparador = numeroComparador;
    }
  }
  return numeroComparador;
}

function calcularEdadMenor(arrayDeInputs) {
  let numeroComparador = arrayDeInputs[0];

  for (let index = 0; index < arrayDeInputs.length; index++) {
    if (numeroComparador >= arrayDeInputs[index]) {
      numeroComparador = arrayDeInputs[index];
    } else {
      numeroComparador = numeroComparador;
    }
  }
  return numeroComparador;
}

function calcularEdadPromedio(inputs) {
  let contador = 0;

  for (let index = 0; index < arrayDeInputs.length; index++) {
    contador = contador + arrayDeInputs[index];
  }

  let edadPromedio = contador / arrayDeInputs.length;

  return edadPromedio;
}

botonEnviar.onclick = function () {
  let cantidadDeFamiliares = Number(document.querySelector("#cantidad").value);

  for (let index = 0; index < cantidadDeFamiliares; index++) {
    let label = document.createElement("label");
    label.textContent = "familiar " + (index + 1);
    label.className = "label-familiar";
    let input = document.createElement("input");
    input.type = "number";
    input.className = "input-familiar";
    let br = document.createElement("br");
    br.className = "br";
    form.appendChild(br);
    form.appendChild(label);
    form.appendChild(input);
  }
};

botonCalcular.onclick = function () {
  let inputs = document.querySelectorAll(".input-familiar");
  let arrayDeInputs = [];
  let valorDelInput;

  for (let index = 0; index < inputs.length; index++) {
    valorDelInput = Number(inputs[index].value);
    arrayDeInputs.push(valorDelInput);
  }

  console.log(arrayDeInputs);
  let em = document.querySelector("em");
  em.textContent =
    "el miembro con mas edad tiene " +
    calcularEdadMayor(arrayDeInputs) +
    " años, el miembro menor tiene " +
    calcularEdadMenor(arrayDeInputs) +
    " años y la edad promedio en el grupo familiar es de " +
    calcularEdadPromedio(arrayDeInputs) +
    " años";
};

botonEliminar.onclick = function () {
  let em = document.querySelector("em");
  let label = document.querySelectorAll(".label-familiar");
  let inputs = document.querySelectorAll(".input-familiar");
  let br = document.querySelectorAll(".br");

  em.textContent =
    "aca va a aparecer la edad mayor, menor y la promedio del grupo familiar";

  for (let index = 0; index < inputs.length; index++) {
    label[index].remove();
    inputs[index].remove();
    br[index].remove();
  }
};
