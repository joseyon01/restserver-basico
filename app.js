const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const bodyParser = require('body-parser');
const rutas = require('./routes/index');

/*Middlewares*/
// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
//app.use(bodyParser.json());


// Middleware para parsear JSON
app.use(express.json());
// Middleware para parsear application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//Public Directory
app.use(express.static('./public'))

app.use(cors({
  origin: 'http://localhost:3000/'  // Permite solo solicitudes desde el frontend en este dominio
}));
/**Fin del Middleware**/


//Llamar las rutas
app.use(rutas);


//Conexion al Servidor Web
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})