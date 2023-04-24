const productRouter = require ('../routes/products');

function apiRouter(app) {
    app.use('/products', productRouter)
}

module.exports=apiRouter;