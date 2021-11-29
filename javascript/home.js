//Arrays importados
import {perros} from './animales.js'
import {gatos} from './animales.js'
import {mascotas} from './animales.js'

//Variables
let containerMascotas = document.getElementById("mascotas")

const btnPerros = document.getElementById("btnPerros")

const btnGatos = document.getElementById("btnGatos")

//Esta funcion muestra los perros al inicio de la pagina
document.addEventListener('DOMContentLoaded', () => {
    mostrarMascotas(perros)
    opacidad(btnPerros, btnGatos)
})
//Esta funcion escribe el html de la pagina
const mostrarMascotas = (mascotas) =>{
    containerMascotas.innerHTML= ''
    mascotas.forEach(mascota => {
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
}
//Categorias
btnGatos.addEventListener('click', (e) =>{
    e.preventDefault()
    mostrarMascotas(gatos)
    opacidad(btnGatos, btnPerros)
})
btnPerros.addEventListener('click', (e) =>{
    e.preventDefault()
    mostrarMascotas(perros)
    opacidad(btnPerros, btnGatos)
})
//Este le da opacidad al boton no seleccionado
const opacidad= (boton1, boton2) =>{
    boton1.setAttribute("class", "container-categorias")
    boton2.setAttribute("class", "container-categorias-opacity ")
}

//Este añade los animales elegidos al localstorage para acceder a la informacion desde la pagina detalle
containerMascotas.addEventListener('click', (e)=>{
    const id = e.target.id
    const btnDetail = e.target.classList.contains('black')
    if(btnDetail){
        const objeto = mascotas.find(animal => animal.id === Number(id))
        localStorage.setItem("Detalle", JSON.stringify(objeto))
    }
})