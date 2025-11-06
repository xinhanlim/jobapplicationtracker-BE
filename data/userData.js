const connect = require('../server/database');

async function createUser({
    email = String,
    password = String,
    display_name = String
}){
    try{
        const db = await connect();
        const userDoc = {
            email,
            password,
            display_name,
        }
        console.log(userDoc)
        const result = await db.collection('users').insertOne(userDoc);
        return result;
    }catch(e){
        console.log(e);
    }
}

module.exports = {createUser};


