import {mascotas} from './animales.js'


let containerMascotas = document.getElementById("mascotasFavoritas")


document.addEventListener('DOMContentLoaded', () => {
    const datosMascota = obtenerLocalStorage()
    datosMascota.forEach(mascota => {
        const {id, img, name, race, type} =mascota
        containerMascotas.innerHTML+=`
        <a href="./detalleMascota.html" class="link-mascota">
                <div class="container-mascotas">
                    <div class="mascota">
                        <img src="${img}" alt="${type}">
                        <div class="black" id="${id}">
                            <p>${name}</p>
                            <p>${race}</p>
                        </div>
                    </div>
                </div>
            </a>
            `
    });
})

const obtenerLocalStorage = () =>{
    return JSON.parse(localStorage.getItem("Favoritos"))
 }
 containerMascotas.addEventListener('click', (e)=>{
    const id = e.target.id
    const btnDetail = e.target.classList.contains('black')
    if(btnDetail){
        const objeto = mascotas.find(animal => animal.id === Number(id))
        localStorage.setItem("Detalle", JSON.stringify(objeto))
    }
})