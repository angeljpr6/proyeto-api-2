var express=require ('express');
var app=express();
const apiRouter = require('./server');


apiRouter(app);

app.get('/', function (req, res){
    res.send('Hola Mundo');
});

app.listen(3000, function(){
    console.log('Aplicacion de ejemplo escuchando en el puerto 3000');
});


