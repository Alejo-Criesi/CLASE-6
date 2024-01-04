/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

let form = document.querySelector("#form");

let botonCalcular = document.querySelector(".calcular");

let botonAgregar = document.querySelector(".agregar");

let botonEliminar = document.querySelector(".eliminar");

let botonEnviar = document.querySelector(".enviar");

function calcularSalarioMayor(arrayDeInputs) {
  let numeroComparador = arrayDeInputs[0];
  for (let index = 0; index < arrayDeInputs.length; index++) {
    if (numeroComparador >= arrayDeInputs[index]) {
      numeroComparador = numeroComparador;
    } else {
      numeroComparador = arrayDeInputs[index];
    }
  }
  return numeroComparador;
}

function calcularSalarioMenor(arrayDeInputs) {
  let numeroComparador = arrayDeInputs[0];

  for (let index = 0; index < arrayDeInputs.length; index++) {
    if (numeroComparador <= arrayDeInputs[index]) {
      numeroComparador = numeroComparador;
    } else {
      numeroComparador = arrayDeInputs[index];
    }
  }
  return numeroComparador;
}

function calcularSalarioPromedio(arrayDeInputs) {
  let contador = 0;

  for (let index = 0; index < arrayDeInputs.length; index++) {
    contador = contador + arrayDeInputs[index];
  }

  let salarioPromedio = contador / arrayDeInputs.length;

  return salarioPromedio;
}

botonEnviar.onclick = function () {
  let cantidadDeFamiliares = Number(document.querySelector("#cantidad").value);

  for (let index = 0; index < cantidadDeFamiliares; index++) {
    let br = document.createElement("br");
    br.className = "br";
    form.appendChild(br);

    let label = document.createElement("label");
    label.textContent = "familiar " + (index + 1);
    label.className = "label-agregar";
    form.appendChild(label);

    let input = document.createElement("input");
    input.type = "number";
    input.className = "input-agregar";
    form.appendChild(input);
  }
};

botonCalcular.onclick = function () {
  let inputs = document.querySelectorAll(".input-agregar");
  let arrayDeInputs = [];
  let arrayDeInputsEnCero = [];
  let valorDelInput;

  for (let index = 0; index < inputs.length; index++) {
    valorDelInput = Number(inputs[index].value);
    if (valorDelInput === 0) {
      arrayDeInputsEnCero.push(valorDelInput);
    } else {
      arrayDeInputs.push(valorDelInput);
    }
  }

  let em = document.querySelector("em");
  em.textContent =
    "el miembro con el salario mas alto cobra " +
    calcularSalarioMayor(arrayDeInputs) +
    " pesos, el miembro con el salario mas bajo cobra " +
    calcularSalarioMenor(arrayDeInputs) +
    " pesos, y el salario promedio en el grupo familiar es de " +
    calcularSalarioPromedio(arrayDeInputs) +
    " pesos";
};

botonAgregar.onclick = function () {
  let br = document.createElement("br");
  br.className = "br";
  form.appendChild(br);

  let label = document.createElement("label");
  label.textContent = "familiar agregado ";
  label.className = "label-agregar";
  form.appendChild(label);

  let input = document.createElement("input");
  input.type = "number";
  input.className = "input-agregar";
  form.appendChild(input);
};

botonEliminar.onclick = function () {
  let br = document.querySelector(".br");
  let label = document.querySelector(".label-agregar");
  let input = document.querySelector(".input-agregar");
  let em = document.querySelector("em");
  em.textContent =
    "aca va a aparecer el salario mayor, menor y promedio del grupo familiar";
  br.remove();
  label.remove();
  input.remove();
};
