var express=require ('express');
const apiRouter = require('./server');
var app=express();

apiRouter(app);

app.get('/', function (req, res){
    res.send('Hola Mundoo');
});



app.listen(3000, function(){
    console.log('Aplicacion de ejemplo escuchando en el puerto 3000');
});
app.get('/abouttime', function (req, res){
    res.send("pruebas de api");
});

