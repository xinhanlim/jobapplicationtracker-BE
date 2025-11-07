const express = require('express');
const router = express.Router();
const userService = require('../services/userService')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const verifyToken = require('../middlewares/authMiddleware')



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

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const getUser = await userService.getUser({ email })
        const isPassword = await bcrypt.compare(password, getUser.password)
        if (!isPassword) {
            return res.status(401).json({
                "message": "Invalid Email or Password"
            })
        }
        const token = jwt.sign({
            'email': getUser._id,
            'display_name': getUser.display_name
        }, process.env.JWT_SECRET_TOKEN,
            {
                'expiresIn': "30mins"
            })
 
        res.json({
            "message": "Login Successfully",
            token
        })
        return getUser
    } catch (e) {
        console.log(e);
        res.status(500).json({
            "message": "Error Getting User Info"
        })
    }
})


router.put('/update/:id',verifyToken, async (req, res) => {
    try {
        const _id = req.params.id;
        const { password, display_name } = req.body;
        const updatedUser = await userService.updateUser({ _id, password, display_name });
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

router.delete('/delete/:id', verifyToken, async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteUser = await userService.deleteUser({ _id })
        res.json({
            "message": "User Delete Successfully"
        })
        return deleteUser
    } catch (e) {
        console.log(e);
        res.status(500).json({
            "message": "Error Deleting"
        })
    }
})


module.exports = router;