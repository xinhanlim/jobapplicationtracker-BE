const express = require('express');
const router = express.Router();
const userService = require('../services/userService')


router.post('/register', async (req, res) => {
    try {
        const { email, password, display_name } = req.body;
        const newUser = await userService.createUser({ email, password, display_name });
        res.json(
            { "message": "User Created Successfully" }
        )
        return newUser;
    } catch (e) {
        console.log(e);
        res.status(500).json({
            "message": "Error Registering"
        })
    }
})

router.put('/update/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const { password, display_name } = req.body;
        const updatedUser = await userService.updateUser({_id ,password, display_name });
        res.json({
            "message": "User Update Successfully"
        })
        return updatedUser
    } catch (e) {
        console.log(e);
        res.status(500).json({
            "message": "Error Updating"
        })
    }
})

router.delete('/delete/:id', async (req,res)=>{
    try{
        const _id = req.params.id;
        const deleteUser = await userService.deleteUser({_id})
        res.json({
            "message": "User Delete Successfully"
        })
        
        return deleteUser
    }catch(e){
         console.log(e);
        res.status(500).json({
            "message": "Error Deleting"
        })
    }
})
module.exports = router;