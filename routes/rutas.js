var express = require('express');
var router = express.Router();
const grados = require("../calculos");

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/', (req, res) =>{
  res.sendFile(process.cwd()+"/public/index.html")
});

router.get('/calculos/:valor', (req, res) => {
  const { valor } = req.params;
  let a = grados.kelvin(valor);
  let b = grados.fahrenheit(valor);
  console.log(valor, a, b);
  res.send({
  grado: valor,
  kelvin: a,
  fahrenheit: b
  });
 });

//API 1
router.get('/datos', (req, res) => {
  res.send(
  {
  "secretBase": "Super tower",
  "active": true,
  "members": [
  {
  "name": "Luis",
  "age": 29,
  "secretIdentity": "Dan Jukes",
  "powers": [
  "Radiation resistance",
  "Turning tiny",
  "Radiation blast"
  ]
  },
  {
  "name": "Madame Uppercut",
  "age": 39,
  "secretIdentity": "Jane Wilson",
  "powers": [
  "Million tonne punch",
  "Damage resistance",
  "Superhuman reflexes"
  ]
  },
  {
  "name": "Eternal Flame",
  "age": 1000000,
  "secretIdentity": "Unknown",
  "powers": [
  "Immortality",
  "Heat Immunity",
  "Inferno",
  "Teleportation",
  "Interdimensional travel"
  ]
  }
  ]
  });
  }); 


//API 2
router.post('/ayuda', (req, res) => {
    console.log('Cuerpo de la peticion: ', req.body);
    res.send({ message: 'Hola mundo en que te puedo ayudar, SOY UNA PETICION POST' });
    });


//API 3
router.post('/producto', (req, res) => {
  console.log('Cuerpo de la peticion: ', req.body);
  //La sintaxis de desestructuración es una funcionalidad que vino
  // junto con ES6. Es una expresión de JavaScript que permite
  //desempacar valores de arreglos o propiedades de objetos en distintas variables
  const { nombre, sueldo, categoria } = req.body;
  console.log(nombre);
  console.log(sueldo);
  console.log(categoria);
  res.send({ message: "El producto se ha recibido" });
  });

// API 4 que combina TODOS los parámetros
router.post('/producto/:id', (req, res) => {
  const { id } = req.params;
  const { motor } = req.query;
  const { precio } = req.body;


  console.log(id, motor, precio);


  res.json({
  stockmin: 10,
  stockmax: 15,
  existencia: 7
  });
  });
module.exports = router;
