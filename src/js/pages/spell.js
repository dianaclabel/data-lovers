import { filterSpells } from "./data.js";
const divHechizos = document.querySelector("#div-hechizos");
const inputBuscador = document.querySelector("#input-buscador");
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
