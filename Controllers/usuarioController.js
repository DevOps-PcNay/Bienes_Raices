const formularioLogin = (req,res) => {
	res.render('Auth/Login',{
		pagina:'Iniciar Sesion'
	})
} // const formularioLogin = (req,res) => {

	const formularioRegistro = (req,res) => {
		res.render('Auth/Registro',{
			pagina:'Crear Cuenta'	// Pasando informacion a la Vista
		})
	}
// const formularioRegistro = (req,res) => {

	const formularioOlvidePassword = (req,res) => {
		res.render('Auth/Olvide-password',{
			pagina:'Recuperar Password'	// Pasando informacion a la Vista
		})
	}
// const formularioRegistro = (req,res) => {



// Export nombrados porque se pueden agregar funciones 
// Se pueden renombrar como se requiera.
export { 
	formularioLogin,
	formularioRegistro,
	formularioOlvidePassword
}