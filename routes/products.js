var express=require ('express');
const productServices = require("../services/servicesProducts");
const router = express.Router();
const {errorHandler}=require("../middlewares/error.handler");
const { validatorHandler } = require('../middlewares/validator.handler');
const{ schemaProductCreate, schemaProductGet, schemaProductUpdate}= require('../schema/schemaProducts');

router.get('/', async function(req, res,next){  //añado una llamada al middleware con next
    try {
      const products= await productServices.getAllProducts(req,res); //el error debeo generarlo en sevices
      res.json(products);
  
    } catch (error) {
      next(error);
    }
});
router.post('/', validatorHandler(schemaProductCreate, 'body'),
 async function(req, res){
 const createProduct= await productServices.createNewProduct(req,res);
 return createProduct;
})

router.patch('/:id', async function(req, res){
  const updatedProduct= await productServices.updateProduct(req,res);
  res.json(updatedProduct);

})
router.delete('/:id', async function(req, res){
 const deletedProduct=await productServices.deleteProduct(req,res);
 return deletedProduct;
})

router.get('/:id', validatorHandler(schemaProductGet, 'params') , async function(req, res){
   const getOneProduct= await productServices.getOneProduct(req,res);
   return getOneProduct;
});

module.exports = router;


/*router.get('/', function (req, res){

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
});*/

/*router.get('/:id', function (req, res){
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
module.exports = router;*/