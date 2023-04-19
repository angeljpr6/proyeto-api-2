//Arregla el abouttime que estaba mal
var express=require ('express');
var app=express();

app.get('/', function (req, res){
    res.send('Hola Mundo');
});

ap

app.get('/products', function (req, res){
    res.json({
        'name':'Teclado',
        'precio':22,
        'category':'tecnology'
    })
});
app.listen(3000, function(){
    console.log('Aplicacion de ejemplo escuchando en el puerto 3000');
});
app.get('/abouttime', function (req, res){
    res.send("pruebas de api");
});

