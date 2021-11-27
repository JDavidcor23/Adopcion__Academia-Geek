import { getUsuario } from "./getUsuario.js";

const url = "http://localhost:3000/usuario/"

let containerNombre =document.getElementById("containerNombre")

const formulario = document.getElementById("formulario")


document.addEventListener('DOMContentLoaded', async () => {
    let usuario = await getUsuario(url)
    usuario.forEach(datos =>{
        const {id, nombre, apellido, correo}= datos
        containerNombre.innerHTML=`
        <p>${nombre} ${apellido}</p>
        <p>Editar Cuenta</p>
        `
        formulario.innerHTML=`
        <p>Nombre</p>
        <input type="text" name="" id="inputNombre" placeholder="${nombre}">
        <p>Apellido</p>
        <input type="text" name="" id="inputApellido" placeholder="${apellido}">
        <p>Correo</p>
        <input type="email" name="" id="inputCorreo" placeholder="${correo}">
        <button type="submit" id="guardar">Guardar</button>
        `
        const capturaDatos = () => {

            const nombre = document.getElementById('inputNombre').value;
            const apellido = document.getElementById('inputApellido').value;
            const correo = document.getElementById('inputCorreo').value;
        
              const user = {
                    nombre,
                    apellido,
                    correo,
                }
        
            return user;
        }
        const btnGuardar = document.getElementById("guardar")
        btnGuardar.addEventListener("click", async e =>{
            e.preventDefault()
            const capturaInfo = capturaDatos()
        
            await fetch(url + id, {
                method: 'PUT',
                body: JSON.stringify(capturaInfo),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                }
            })
        })
    })
 })



