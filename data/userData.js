const connect = require('../server/database');
const { ObjectId } = require('mongodb')

async function createUser({
    email = String,
    password = String,
    display_name = String
}) {
    try {
        const db = await connect();
        const userDoc = {
            email,
            password,
            display_name,
        }
        const result = await db.collection('users').insertOne(userDoc);
        return result;
    } catch (e) {
        console.log(e);
    }
}

async function updateUser({ _id,
    password = String,
    display_name = String }) {
    try {
        const db = await connect();
        const updateUser = {
            password,
            display_name
        }
        const result = await db.collection('users').updateOne(
            { _id: new ObjectId(_id) }, { $set: updateUser }
        )
        return result;
    } catch (e) {
        console.log(e);
    }
}

async function deleteUser({
    _id
}) {
    try {
        const db = await connect();
        const result = await db.collection('users').deleteOne({_id: new ObjectId(_id)})
        return result
    } catch (e) {
        console.log(e)
    }


}

async function getUser({_id}){
    try{
        const db = await connect()
        const result = await db.collection('users').find({_id : new ObjectId(_id)})
        return result
    }catch(e){
        console.log(e);
    }
}


module.exports = { createUser, updateUser, deleteUser, getUser };


