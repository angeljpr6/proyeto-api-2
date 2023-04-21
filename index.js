//Arregla el abouttime que estaba mal
var express=require ('express');
var app=express();


app.get('/', function (req, res){
    res.send('Hola Mundoo');
});


app.get('/products', function (req, res){
    res.json({
        'name':'Teclado',
        'precio':22,
        'category':'tecnology'
    })
});
app.get('/users', function (req,res){
    const [limit,offset]=req.query;
    if (limit && offset){
        res.json({
            limit,
            offset
        })
    }else{
        res.send("No has pasado los parametros adecuados")
    }
})
app.get('/products/:id', function (req, res){
    let (id)=req.params;
    res.json({
        'id' : id,
        'name' : 'Teclado',
        'precio' : 22,
        'category' : 'todos los productos'
    })
});

app.listen(3000, function(){
    console.log('Aplicacion de ejemplo escuchando en el puerto 3000');
});
app.get('/abouttime', function (req, res){
    res.send("pruebas de api");
});

