var express=require ('express');
const faker = require('faker');
const router = express.Router();

router.get('/', function (req, res){

    const products=[];
    const {size}=req.query;
    const limit=size || 5;
    for (let index=0; index<limit;index++){
        products.push({
            index,
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

router.post('/', function (req, res){
    let body=req.body;
    res.json({
        'ok' : true,
        'body' : body
    })
});

router.patch('/:id', function(req, res){
    const {id}= req.params;
    const {body}= req.body;
    res.json({
        ok: true,
        message:"PATCH",
        data: body,
        id
    })
});
router.delete('/:id', function(req,res){
    let {id}=req.params;
    res.json({
        'op' : "delete",
        'id' : id
    })
});
module.exports = router;