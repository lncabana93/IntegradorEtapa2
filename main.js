import './sass/main.scss'
import Handlebars from "handlebars";

const start = async () => {
   


    try {
        
        const respuesta = await fetch('templates/card.hbs')

        if( !respuesta.ok ) {
            throw new Error('No se pudo obtener la plantilla')
        }

        const plantilla = await respuesta.text() 

       

        const template = Handlebars.compile(plantilla)
      
       

       // const respuestaBack = await fetch('http://localhost:8080/productos/') 

       const respuestaBack = await fetch('https://66b282f07fba54a5b7e9d7fc.mockapi.io/productos')

        if ( !respuestaBack.ok ) {
            throw new Error('Algo paso con los productos', respuestaBack.status)
        }

        const dataProductos = await respuestaBack.json()
      

        const data = { productos: dataProductos }
        
        const html = template(data)


        const contenedorCards = document.querySelector('#contenedor-cards')

        contenedorCards.innerHTML = html

    } catch (error) {
        console.log('')
    }

}

window.addEventListener('DOMContentLoaded',  start)