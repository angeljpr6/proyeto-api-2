var express=require ('express');
const faker = require('faker');
const router = express.Router();

router.get('', function (req, res){

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

router.get('/:id', function (req, res){
    let (id)=req.params;
    res.json({
        'id' : id,
        'name' : 'Teclado',
        'price' : 22,
        'category' : 'todos los productos'
    })
});

module.exports = router;