function desplegar(id, id_2, id_3, id_4) {
    id.addEventListener("click", (e) => {
        id_2.classList.toggle("ocultar")
        id_3.classList.toggle("ocultar")
        id_4.classList.toggle("ocultar")
    })
}

// DESPLEGABLE "ESTUDIOS"
const abrir = document.getElementById("abrir")
const cerrar = document.getElementById("cerrar")
const titulo = document.getElementById("titulo")
const estudios = document.getElementById("estudios")

desplegar(abrir, estudios, abrir, cerrar)
desplegar(titulo, estudios, abrir, cerrar)
desplegar(cerrar, estudios, abrir, cerrar)


// DESPLEGABLE "EXPERIENCIA LABORAL"
const abrir2 = document.getElementById("abrir2")
const cerrar2 = document.getElementById("cerrar2")
const titulo2 = document.getElementById("titulo2")
const experiencia = document.getElementById("experiencia")

desplegar(abrir2, experiencia, abrir2, cerrar2)
desplegar(titulo2, experiencia, abrir2, cerrar2)
desplegar(cerrar2, experiencia, abrir2, cerrar2)