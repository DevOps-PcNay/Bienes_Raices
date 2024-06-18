import express from 'express'

const router = express.Router()

// Rounting son las rutas de la aplicacion.
// function(req,res) = Es un Callback 
// req, res = Siempre estaran en los EndPoint de la aplicacion con Express
// send = Es una respuesta que envia, puede ser texto o formato JSon
// render = Se utilizan para  desplegar vistas usando los Template Engine

router.get ('/',function(req,res){
	res.send('Hola mundo en Express')	
})

router.post('/',(req,res) => {
	res.json({msg: 'Informacion para grabar POST'})
})

// Agregando otra ruta, son los diferentes EndPoint de la aplicacion

router.get ('/Nosotros', (req,res) => {
	// res.send('Acerca de Nosotros')
	// En formato JSon
	res.json({msg:'Cadana en formato Json '})
})

export default router
