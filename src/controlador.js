import { getPlanetas, getEspecies } from "../services/servicioStarwars.js";

let fila =document.querySelector("#fila")

getPlanetas().then((info)=>{
    info.results.forEach(result => {
        fila.innerHTML +=
        `
        <section class="Planetas">
        <h1>${result.name}</h1>
        <h1>${result.climate}</h1>
        </section>

        `
        
        
    });

});

getEspecies().then((info)=>{
    info.results.forEach(result => {
        fila.innerHTML += 
        `
        <section class="Especies">
        <h1>${result.language}</h1>
        <h1>${result.name}</h1>
        </section>
        `
    });

})
