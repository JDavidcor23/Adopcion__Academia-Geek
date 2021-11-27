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
document.addEventListener('DOMContentLoaded', () => {
    listaMensajes.forEach(mensaje  =>{
        const {id,parrafo, imagen, nombre, hora} = mensaje
        containerMessage.innerHTML+=`
        <a href="#" class="link-mensaje">
                <div class="message">
                    <div class="circle-img">
                        <img src="${imagen}" alt="">
                    </div>
                    <div class="text-flecha">
    
                        <div class="text">
                            <h3>${nombre}<span>${hora}</span></h3>
                            <p>${parrafo}}</p>
                        </div>
                        <img src="https://i.ibb.co/xgWdjkV/flecha.png" alt="" style="height: 30px;">
                    </div>
                </div>
            </a>
        `
        btnMensajes = document.querySelector(".link-mensaje")
        btnMensajes.addEventListener('click', (e)=>{
            e.preventDefault()
            console.log("SIIUuu")
            // const btnDetail = e.target.classList.contains('black')
            // if(btnDetail){
            //     const objeto = mascotas.find(animal => animal.id === Number(id))
            //     localStorage.setItem("Detalle", JSON.stringify(objeto))
            // }
        })
    })
})