const userDataLayer = require('../data/userData');
const bcrypt = require('bcrypt');

async function createUser({ email, password, display_name }) {

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userDataLayer.createUser({ email, password: hashedPassword, display_name })
    return newUser
}

async function updateUser({ _id, password, display_name }) {

    const hashedPassword = await bcrypt.hash(password, 10);
    const updateUser = await userDataLayer.updateUser({ _id, password:hashedPassword, display_name })
    return updateUser
}

async function deleteUser({ _id }) {
    const deleteUser = await userDataLayer.deleteUser({ _id })
    return deleteUser
}

async function getUser({ email }) {
    const getUser = await userDataLayer.getUser({ email })
    return getUser
}


module.exports = { createUser, updateUser, deleteUser, getUser };