const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')
const User = require('../models/userModel')

//(desc) Get goals
//(route) GET/api/goals
//((access)) private
const getGoals= asyncHandler(async (req,res)=>{
    const goals = await Goal.find({user:req.user.id})

    res.status(200).json(goals)
})

//(desc) set goals
//(route) POST /api/goals
//((access)) private
const setGoal= asyncHandler(async (req,res)=>{
   if(!req.body.text){
        res.status(400)
        throw new Error("text field can't be empty")
   }
   const goal = await Goal.create({
       text: req.body.text,
       user: req.user.id,
   })
    res.status(200).json(goal)
})

//(desc) update goals
//(route) PUT /api/goals/:id
//((access)) private
const updateGoal= asyncHandler(async (req,res)=>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    const user = await User.findById(req.user.id)
    
    //checkForUser
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }
    
    //Check if the logged user matches the goal's user
    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }


    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json(updatedGoal)
})

//(desc) delete goals
//(route) DELETE /api/goals/:id
//((access)) private
const deleteGoal= asyncHandler(async (req,res)=>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    const user = await User.findById(req.user.id)
    
    //checkForUser
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }
    
    //Check if the logged user matches the goal's user
    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }


    await goal.remove()
    
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}