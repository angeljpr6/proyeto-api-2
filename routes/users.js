var express=require ('express');
const faker = require('faker');
const router = express.Router();

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