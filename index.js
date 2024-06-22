import express from 'express'
// const express = require('express')


// Se tiene que importar las funciones donde se definieron las rutas del proyecto
import usuarioRoutes from './Routes/usuarioRoutes.js'

// Crear la app 

// app = Es loa instancia de la Express
const app =express() 

// Habilitar Pug
app.set('view engine','pug')

// En esta carpeta "Views" se encuentran los archivos.
app.set('views','./Views')

// Carpeta Publica, utilizando "express"
app.use(express.static('Public'))



// Routing 
//app.use('/',usuarioRoutes) // Llama a la funcion definida de acuerdo a la ruta.
app.use('/Auth',usuarioRoutes) // Llama a la funcion definida de acuerdo a la ruta.


const port = 3034
// ` ` = Se llama template String


app.listen(port, () => {
	console.log(`Escuchando en el puerto ${port}`)

})



 
