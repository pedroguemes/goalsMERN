const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            //getTokenFromHeader
            token = req.headers.authorization.split(' ')[1]
            //verifyToken 
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            // getUserFromToken
            req.user = await User.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Unauthorized')
        }
    }
    if(!token){
        res.status(401)
        throw new Error('Unauthorized, no token.')
    }
})

module.exports = {protect}