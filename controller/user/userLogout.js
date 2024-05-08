async function userLogout(req,res) {
try {
    
 res.clearCookie("token")

 res.json({
    message:"Logout Successfully!",
    success:true,
    error:false,
    data:[]
 })

} catch (error) {
    res.status(400).json({
        message:err.message || err,
        error:true,
        success:false

    })
}

}

module.exports = userLogout;