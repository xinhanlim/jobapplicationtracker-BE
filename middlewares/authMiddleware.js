const jwt = require('jsonwebtoken');
require('dotenv').config();

function verifyToken (req, res, next) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) return res.sendStatus(403);
        jwt.verify(token, process.env.JWT_SECRET_TOKEN, (err, decoded) => {
            if (err) return res.sendStatus(403);
            req.user = decoded
            next();
        });
    };

module.exports = verifyToken;