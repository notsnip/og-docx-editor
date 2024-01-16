const asyncHandler= (fn)=>async (req,res,next)=>{
    try{
        return await fn(req,res,next)
    }catch{
        res.status(500)
    }
}

export default asyncHandler;

