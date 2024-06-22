const formularioLogin = (req,res) => {
	res.render('Auth/Login',{
		autenticado:false
	})
} // const formularioLogin = (req,res) => {

	const formularioRegistro = (req,res) => {
		res.render('Auth/Registro',{
			autenticado:true
		})
	}
// const formularioRegistro = (req,res) => {

// Export nombrados porque se pueden agregar funciones 
// Se pueden renombrar como se requiera.
export { 
	formularioLogin,
	formularioRegistro
}