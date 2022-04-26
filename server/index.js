const express = require('express');
const app = express();

const mysql = require('mysql');

const db = mysql.createPool({
host: 'localhost',
user: 'root',
password: '',
database: 'encuesta'
})

app.get('/',(req,res) =>{})


app.listen(3001,()=>{
    console.log("corriendo en puerto 3001");
})