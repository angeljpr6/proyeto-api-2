var express=require ('express');
const router = express.Router();

router.get('', function (req,res){
    const {limit,offset}=req.query;
    if (limit && offset){
        res.json({
            limit,
            offset
        })
    }else{
        res.send("No has pasado los parametros adecuados")
    }
})

module.exports = router;