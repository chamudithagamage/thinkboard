import ratelimit from "../config/upstash.js";

const rateLimiter = async (req,res,next) => {
    try{
        const {success} = await ratelimit.limit("my-limit-key");
        if(!success) return res.status(429).json({message:"Too many requests.Try again later"})
        next();
    } catch(error){
        console.error(error.message);
        res.status(500).json({message:"Internl Server Error"})
    }

}

export default rateLimiter;