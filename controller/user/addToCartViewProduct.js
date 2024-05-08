const addToCartModel = require("../../models/cartproductModel")

const addToCartViewProduct = async(req,res)=>{
    try {
        const currentUser = req.userId 
        const allProduct = await addToCartModel.find({
            userId : userId
        })

        res.status(200).json({
            data : allProduct,
            success : true,
            error : false
        })

        
    } catch (err) {
        res.json({
            message : err?.message || err,
            error : true,
            success : false
        })
        
    }
}


module.exports = addToCartViewProduct