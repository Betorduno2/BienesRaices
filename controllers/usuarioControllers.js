import Usuario from "../models/usuario.js";

const formularioLogin = (req, res) => {
  res.render('auth/login', {
    pagina : 'Iniciar Sesión'
  });
}

const formularioRegistro = (req, res) => {
  res.render('auth/registro', {
    pagina : 'Crear Cuenta'
  });
}

const registrar = async (req, res) => {
  console.log('Registrando.....', req.body);

  const usuario = await Usuario.create(req.body);
  res.json(usuario)
}

const formularioOlvidePassword = (req, res) => {
  res.render('auth/olvide-password', {
    pagina : 'Recuperar Acceso'
  });
}

export {
  formularioLogin,
  formularioRegistro,
  registrar,
  formularioOlvidePassword
}