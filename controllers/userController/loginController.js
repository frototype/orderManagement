
const loginLoading=(req,res)=>{
    try {
        console.log("inside login loading")
        res.render("login")
        
    } catch (error) {
        console.log("error in login loading "+error.message)
        res.status(504).json({ error: error.message });
    }
}


module.exports={
    loginLoading,
}