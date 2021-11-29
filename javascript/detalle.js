//Variables
let imagenDetalle = document.querySelector(".contaner-img-detalle")

let containerDetalle = document.querySelector(".container-detalle")

let mascotasFavoritas = []
//Este pregunta si hay animales favoritos y lo agrega al array mascotasFavoritas
if (localStorage.getItem('Favoritos')) {
    mascotasFavoritas = JSON.parse(localStorage.getItem('Favoritos'));
}
//me trae la mascota elegida
const obtenerLocalStorage = () =>{
    return JSON.parse(localStorage.getItem("Detalle"))
 }
//Este muestra toda laimformacion de la mascota elegida
document.addEventListener('DOMContentLoaded', () => {
    const datosMascota = obtenerLocalStorage()
    const {img, name, race, type, 
           history, personality, 
           city, ubication, age, 
           sex, personalityImg} = datosMascota
    let imgSex = ''
    if(sex === "male"){
        imgSex = 'https://res.cloudinary.com/dbtk64lp4/image/upload/v1638104243/Adopcion/male_albxr3.png'
    }
    else{
        imgSex = 'https://res.cloudinary.com/dbtk64lp4/image/upload/v1638139285/Adopcion/female_ysyxtp.png'
    }
    // muestra la imagen
     imagenDetalle.innerHTML=`
     <a href="./home.html">
        <img src="https://i.ibb.co/HrwJ0DL/flecha-back.png" alt="" class="row-black">
    </a>
    <img src="${img}" alt="${type}" class="mascota">
    `
    // todo el detalle de la mascota
    containerDetalle.innerHTML=`
    <div class="detalle_body">
        <div class="container-description">
            <div class="detalle-name_sex">
                <div class="name-sex">
                    <h2>${name}</h2><span><img src="${imgSex}" alt=""></span>
                </div>
                <div class="circle_corazon">
                    <img src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1638104244/Adopcion/Union_augfrh.png" alt="" id="corazon">
                </div>
            </div>
            <div class="edad_raza">
                <div class="raza">
                    <span><img src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1638104244/Adopcion/edad_xwqaz8.png" alt=""></span>
                    <p>${race}</p>
                </div>
                <div class="edad">
                    <span><img src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1638104244/Adopcion/raza_xw7ucd.png" alt=""></span>
                    <p>${age}</p>
                </div>
            </div>
            <div class="direccion">
                <span><img src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1638104244/Adopcion/Component_1_1_wmqqfn.png" alt=""></span>
                <div class="direccion_p">
                    <p>${city}</p>
                    <p>${ubication}</p>
                </div>
            </div>
        </div>
        <div class="container-personalidad">
            <h2>Personalidad</h2>
            <div class="personalidad">
                <div class="border_img">
                    <img src="${personalityImg[0]}" alt="">
                    <p>${personality[0]}</p>
                </div>
                <div class="border_img">
                    <img src="${personalityImg[1]}" alt="">
                    <p>${personality[1]}</p>
                </div>
                <div class="border_img">
                    <img src="${personalityImg[2]}" alt="">
                    <p>${personality[2]}</p>
                </div>
            </div>
        </div>
        <div class="container-historia">
            <h2>Historia de ${name}</h2>
            <p>${history}</p>
        </div>
        <div class="container-perfil__vendedor">
            <img src="https://i.ibb.co/Z6PGzJH/foto-de-perfil.jpg" alt="">
            <div class="contenedor__contactame">
                <p>Publicado por</p>
                <p>Maria Dolores</p>
            </div>
            <a href="./mensagesInternos.html">
                <button>Conectar</button>
            </a>
        </div>
    </div>
    `
    let btnFavoritos = document.querySelector(".circle_corazon")
    let btnFavoritosImg = document.querySelector("#corazon")
    //Este pregunta si ya la mascota esta añadida a favorita para no agregar otra vez a misma mascota
    let hayMascota = mascotasFavoritas.some(favorito => favorito.id === datosMascota.id)

    if(hayMascota === true){
        //Automaticamente le pone la imagen como favorito
        btnFavoritosImg.src = "https://res.cloudinary.com/dbtk64lp4/image/upload/v1638104244/Adopcion/Union_1_r3hzir.png"
        //Esta funcion te permite quitar la mascota de favoritos
        btnFavoritos.addEventListener('click', ()=>{
            btnFavoritosImg.src = "https://res.cloudinary.com/dbtk64lp4/image/upload/v1638104244/Adopcion/Union_augfrh.png"
            let borarElemento = mascotasFavoritas.findIndex(favorito =>favorito.name === name)
            mascotasFavoritas.splice(borarElemento, 1)
            localStorage.setItem("Favoritos", JSON.stringify(mascotasFavoritas))
            //fuerza a recargar la pagina
            location.reload();
        })
        
    }else{
        //Añade la mascota a favoritos
        btnFavoritos.addEventListener('click', ()=>{
            btnFavoritosImg.src = "https://res.cloudinary.com/dbtk64lp4/image/upload/v1638104244/Adopcion/Union_1_r3hzir.png"
            mascotasFavoritas.push(datosMascota)
            localStorage.setItem("Favoritos", JSON.stringify(mascotasFavoritas))
            //fuerza a recargar la pagina
            location.reload();
    })
    }
})


