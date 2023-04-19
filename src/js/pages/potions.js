import { filterPotions } from "../data.js";
const inputBuscador1 = document.querySelector("#input-buscador1");

if (inputBuscador1 !== null) {
  inputBuscador1.addEventListener("keydown", (e) => {
    const contenedorResultado1 = document.querySelector("#resultado-busqueda1");
    const potionsEncontrados = filterPotions(inputBuscador1.value);

    contenedorResultado1.innerHTML = "";
    potionsEncontrados.forEach((potions) => {
        contenedorResultado1.appendChild(mostrarPotions(potions));
    });
  });
}

const mostrarPotions = (potions) => {
  const contenedorPotions = document.createElement("div");
  contenedorPotions.classList.add("potions-item");


  const contenedorCardInfoNombreDiv = document.createElement("div");
  contenedorCardInfoNombreDiv.classList.add("potions-item__info");
  contenedorCardInfoNombreDiv.innerHTML = `<b>Nombre: </b>${potions.name}`;

  const contenedorCardInfoDescripcionDiv = document.createElement("div");
  contenedorCardInfoDescripcionDiv.classList.add("potions-item__info");
  contenedorCardInfoDescripcionDiv.innerHTML = `<b>Caracteristicas: </b>${potions.description}`;

  
  contenedorPotions.appendChild(contenedorCardInfoNombreDiv);
  contenedorPotions.appendChild(contenedorCardInfoDescripcionDiv);
 

  
  return contenedorPotions;
}