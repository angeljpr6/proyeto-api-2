const faker= require('faker');

const getAllProducts =async function(req, res){

    //const price=allPrice(); //llamamos a una función que no existe
    try {
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
        return products;
        
    } catch (error) {
        console.log(error);
    }
    
}

const getOneProduct = function(req, res){
    let body=req.body;
    res.json({
        'id' : id,
        'name' : 'Teclado',
        'price' : 22,
        'category' : 'todos los productos'
    })
}

module.exports={getAllProducts , getOneProduct}