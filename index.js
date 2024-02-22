import express from 'express'
import routerUsuario  from './routes/usuarioRoutes.js'
import db from './config/db.js'
const app = express();
const port = 3000;
// Habilitar lectura de datos de  formularios
app.use(express.urlencoded({extended: true}));

 // Routing
app.use('/auth', routerUsuario);

//conexion de la base de datos
try {
  db.authenticate();
  db.sync();
  console.log('Conexion correcta a la base de datos');
} catch (error) {
  console.log(error);
}

//habilitar pug 
app.set('view engine', 'pug');
app.set('views', './views');

//Carpeta publica
app.use(express.static('public'));

app.listen(port, () => {
  console.log(` listening on port ${port}`);
})