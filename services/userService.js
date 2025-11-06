const userDataLayer = require('../data/userData');

async function createUser({email,password, display_name}){

    const newUser = await userDataLayer.createUser({email, password, display_name})
    return newUser
}

module.exports = {createUser};