const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
host: 'localhost',
user: 'root',
password: '',
database: 'encuesta',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
 app.get('/api/get',(req,res) =>{
     const sqlQuery = "select * from encuestados";
     db.query(sqlQuery,(err,result)=>{
        console.log(result);
    });
 });

app.post('/api/insert/empresa', (req,rest)=>{

    const nombre = req.body.nombre;
    const empresa = req.body.empresa;
    const email = req.body.email;
    const telefono = req.body.telefono;
   const sqlInsert = "Insert into encuestados(nombre, empresa, email, telefono) values (?,?,?,?)";
    db.query(sqlInsert,[nombre,empresa,email, telefono],(err,result)=>{
        console.log(result);
    });
});
app.post('/api/insert/respuesta', (req,rest)=>{
    var inserts = [];
    const empresa = req.body.empresa;
    const pregunta = req.body.pregunta;
    const respuesta = req.body.respuesta;
    inserts.push([empresa,pregunta, respuesta]);
   const sqlInsert = "INSERT into seleccionados(encuestado,pregunta,respuesta) values ?";
    db.query(sqlInsert,[inserts],(err,result)=>{
        console.log(result);
    });
});


app.listen(3001,()=>{
    console.log("corriendo en puerto 3001");
});