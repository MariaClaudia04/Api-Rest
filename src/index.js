const express = require("express");
const mongoose= require('mongoose')
require("dotenv").config();

 

const app = express();

app.set('port', process.env.PORT || 3001)
app.listen(app.get('port'), () => {
    console.log(`Servidor arrancó en puerto: ${app.get('port')}`)
})

//middlewares

app.use(express.json())
 const test =require('./route/test')
 const generos= require('./route/genero');
 const director= require('./route/director');
const productora=require('./route/productora');
const tipo =require('./route/tipo')
const media =require('./route/media')


app.use('/api/v1/tests', test)
app.use('/api/v1/generos', generos)
app.use('/api/v1/director', director)
app.use('/api/v1/productora',productora)
app.use('/api/v1/tipo',tipo)
app.use('/api/v1/media',media)


//mongoose connetion

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("conectado ha mongo"))
    .catch((error) => console.error("error"));
    
    
    app.get("/", (req, res) => { res.send("bienvenido ha mi api") });



module.exports = app;
