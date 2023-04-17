import { filterPotions, filterSpells } from "../data.js";
const divHechizos = document.querySelector("#div-hechizos");
const inputBuscador = document.querySelector("#input-buscador");
const inputBuscador1 = document.querySelector("#input-buscador1");
/*
if(divHechizos!==null){
    divHechizos.addEventListener("click",()=>{ 
        document.location = "spell.html";
    });
}*/

if (inputBuscador !== null) {
  inputBuscador.addEventListener("keydown", (e) => {
    const contenedorResultado = document.querySelector("#resultado-busqueda");
    const spellEncontrados = filterSpells(inputBuscador.value);

    contenedorResultado.innerHTML = "";
    spellEncontrados.forEach((spell) => {
      const contenedorSpell = document.createElement("div");
      contenedorSpell.classList.add("spell-item");
      contenedorSpell.innerHTML = `<h3>Nombre: ${spell.name}</h3><p>Descripcion: ${spell.description}</p><p>Tipo de hechizo: ${spell.spell_type}</p>`;
      contenedorResultado.appendChild(contenedorSpell);
    });
  });
}
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