import express from 'express'
// const express = require('express')

// Se tiene que importar las funciones donde se definieron las rutas del proyecto
import usuarioRoutes from './Routes/usuarioRoutes.js'

// Crear la app 

// app = Es loa instancia de la Express
const app =express() 

// Es la instanacia de la aplicacion. 

// Routing 
//app.get('/',usuarioRoutes) // Llama a la funcion definida de acuerdo a la ruta.
app.use('/',usuarioRoutes) // Llama a la funcion definida de acuerdo a la ruta.
const port = 3034
// ` ` = Se llama template String


app.listen(port, () => {
	console.log(`Escuchando en el puerto ${port}`)

})



 
