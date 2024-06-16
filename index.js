import express from 'express'
// const express = require('express')

// Crear la app 

// app = Es loa instancia de la Express
const app =express() 

// Es la instanacia de la aplicacion. 
// Express soporta los verbos de http, Get, Put, Post, Delete
// Son los diferentes EndPoint que se utiliza en la aplicacion. 
// function (req,res) = Es un Callback  
// req , res = Siempre se utilizan  
// req = Lo que se envia a NodeJs  Res = Lo que retorno Nodejs 


const port = 3034
// ` ` = Se llama template String

// Rounting son las rutas de la aplicacion.
// function(req,res) = Es un Callback 
// req, res = Siempre estaran en los EndPoint de la aplicacion con Express
// send = Es una respuesta que envia, puede ser texto o formato JSon
// render = Se utilizan para  desplegar vistas usando los Template Engine

app.get ('/',function(req,res){
	res.send('Hola mundo en Express')
	
})

// Agregando otra ruta, son los diferentes EndPoint de la aplicacion

app.get ('/Nosotros', (req,res) => {
	// res.send('Acerca de Nosotros')
	// En formato JSon
	res.json({msg:'Cadana en formato Json '})
})

app.listen(port, () => {
	console.log(`Escuchando en el puerto ${port}`)

})



 
