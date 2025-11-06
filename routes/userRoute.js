const express = require('express');
const router = express.Router();
const userService = require('../services/userService')


router.post('/register', async (req, res) => {
    try {
        const { email, password, display_name } = req.body;
        const newUser = await userService.createUser({email, password, display_name});
        res.json(
            {"message": "User Created Successfully"}
        )
        return newUser;
    } catch (e) {
        console.log(e);
        res.status(500).json({
            "message": "Error Registering"
        })
    }
})

module.exports = router;