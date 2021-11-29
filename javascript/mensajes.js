let containerMessage = document.querySelector(".container-message")

const listaMensajes = [
    {
        id:1,
        hora:"2:30",
        imagen:"https://upload.wikimedia.org/wikipedia/commons/b/bf/Foto_Perfil_.jpg",
        nombre:"John Cano",
        parrafo:"¡Hola! claro, podemos acordar un lugar y hora para que conoscas...",
    },
    {
        id:2,
        hora:"4:36",
        imagen:"https://i.ibb.co/Z6PGzJH/foto-de-perfil.jpg",
        nombre:"Maria Dolores",
        parrafo:"¡Hola! claro, podemos acordar un lugar y hora para que conoscas..."
        
    },
    {
        id:3,
        hora:"12:00",
        imagen:"https://upload.wikimedia.org/wikipedia/commons/7/77/Eduardo_Leite_em_3_de_julho_de_2017.jpg",
        nombre:"Eduardo Morantes",
        parrafo:"¡Hola! claro, podemos acordar un lugar y hora para que conoscas..."

    }
]
const btnMensaje =(id)=>{
    let findOwner = listaMensajes.find(owner => owner.id === id)
    localStorage.setItem("Mensajes", JSON.stringify(findOwner))
}
document.addEventListener('DOMContentLoaded', () => {
    listaMensajes.forEach(mensaje  =>{
        const {id,parrafo, imagen, nombre, hora} = mensaje
        containerMessage.innerHTML+=`
        <a href="./mensagesInternos.html" class="link-mensaje" onclick="btnMensaje(${id})">
            <div class="message">
                <div class="circle-img">
                    <img src="${imagen}" alt="">
                </div>
                <div class="text-flecha">
                    <div class="text">
                        <h3>${nombre}<span>${hora}</span></h3>
                        <p>${parrafo}</p>
                    </div>
                    <img src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1638137624/Adopcion/Vector_iftg4f.png" alt="">
                </div>
            </div>
        </a>
        `

    })
})
