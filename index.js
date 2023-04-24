var express=require ('express');
const faker = require('faker');
const { lorem } = require('faker/lib/locales/cz');
var app=express();


app.get('/', function (req, res){
    res.send('Hola Mundoo');
});

app.get('/products', function (req, res){

    const products=[];
    const {size}=req.query;
    const limit=size || 5;
    for (let index=0; index<10;index++){
        products.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(),10),
            image: faker.image.imageUrl()
        })
    }
    res.json(products);
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
        'price' : 22,
        'category' : 'todos los productos'
    })
});

app.listen(3000, function(){
    console.log('Aplicacion de ejemplo escuchando en el puerto 3000');
});
app.get('/abouttime', function (req, res){
    res.send("pruebas de api");
});

