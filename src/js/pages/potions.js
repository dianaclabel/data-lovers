import { filterPotions } from "../data.js";
const inputBuscador1 = document.querySelector("#input-buscador1");

if (inputBuscador1 !== null) {
  inputBuscador1.addEventListener("keydown", (e) => {
    const contenedorResultado1 = document.querySelector("#resultado-busqueda1");
    const potionsEncontrados = filterPotions(inputBuscador1.value);

    contenedorResultado1.innerHTML = "<div class='potions-item__title'><h3>Nombre  de pocion</h3><h3>Descripción</h3></div>";
    potionsEncontrados.forEach((potions) => {
        contenedorResultado1.appendChild(mostrarPotions(potions));
    });
  });
}

const mostrarPotions = (potions) => {
  const contenedorPotions = document.createElement("div");
  contenedorPotions.classList.add("potions-item");

  const contenedorImgPotions = document.createElement("div");
  contenedorImgPotions.classList.add("contenedor-img-potions");

  const imagenPotions = document.createElement("img");
  imagenPotions.classList.add("potions-item__img");
  imagenPotions.setAttribute("src", "../../assets/frasco-potions.png");
  contenedorImgPotions.appendChild(imagenPotions);

  const contenedorCardInfoNombreDiv = document.createElement("div");
  contenedorCardInfoNombreDiv.classList.add("potions-item__info");
  contenedorCardInfoNombreDiv.innerHTML = potions.name;

  const contenedorCardInfoDescripcionDiv = document.createElement("div");
  contenedorCardInfoDescripcionDiv.classList.add("potions-item__info");
  contenedorCardInfoDescripcionDiv.innerHTML = potions.description;

  contenedorPotions.appendChild(contenedorImgPotions);
  contenedorPotions.appendChild(contenedorCardInfoNombreDiv);
  contenedorPotions.appendChild(contenedorCardInfoDescripcionDiv);
 

  
  return contenedorPotions;
}