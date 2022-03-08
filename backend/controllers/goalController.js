const asyncHandler = require('express-async-handler')
//(desc) Get goals
//(route) GET/api/goals
//((access)) private
const getGoals= asyncHandler(async (req,res)=>{
    res.status(200).json({message: 'getGoals'})
})

//(desc) set goals
//(route) POST /api/goals
//((access)) private
const setGoal= asyncHandler(async (req,res)=>{
   if(!req.body.text){
        res.status(400)
        throw new Error("text field can't be empty")
   }
    res.status(200).json({message: 'setNewGoal'})
})

//(desc) update goals
//(route) PUT /api/goals/:id
//((access)) private
const updateGoal= asyncHandler(async (req,res)=>{
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

//(desc) delete goals
//(route) DELETE /api/goals/:id
//((access)) private
const deleteGoal= asyncHandler(async (req,res)=>{
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}