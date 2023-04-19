import { filterPotions } from "../data";
const inputBuscador1 = document.querySelector("#input-buscador1");

if (inputBuscador1 !== null) {
    inputBuscador1.addEventListener("keydown", (e) => {
      const contenedorResultado1 = document.querySelector("#resultado-busqueda1");
      const potionsEncontrados = filterPotions(inputBuscador1.value);
  
      contenedorResultado1.innerHTML = "";
      potionsEncontrados.forEach((potions) => {
        const contenedorPotions = document.createElement("div");
        contenedorPotions.classList.add("potions-item");
        contenedorPotions.innerHTML = `<h3>Nombre: ${potions.name}</h3><p>Descripcion: ${potions.description}</p>`;
        contenedorResultado1.appendChild(contenedorPotions);
      });
    });
    }