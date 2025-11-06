const userDataLayer = require('../data/userData');

async function createUser({email,password, display_name}){

    const newUser = await userDataLayer.createUser({email, password, display_name})
    return newUser
}

async function updateUser({_id, password, display_name}){

    const updateUser = await userDataLayer.updateUser({_id,password, display_name })
    return updateUser
}

async function deleteUser({_id}){
    const deleteUser = await userDataLayer.deleteUser({_id})
    return deleteUser
}


module.exports = {createUser, updateUser, deleteUser};