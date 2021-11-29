let header = document.getElementById("header")

document.addEventListener('DOMContentLoaded', ()=>{
    let owner = JSON.parse(localStorage.getItem("Mensajes"))
    header.innerHTML=`
    <a href="./mensajes.html" class="arrow-black">
        <img src="https://i.ibb.co/HrwJ0DL/flecha-back.png" alt="">
    </a>
    <div class="container-perfil-vendedor">
        <img src="${owner.imagen}" alt="">
        <h2>${owner.nombre}</h2>
    </div>
    `
})