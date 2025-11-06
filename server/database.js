require('dotenv').config;
const { MongoClient } = require('mongodb');
const MONGODB_URL = process.env.MONGODB_URL;
const MONGODB_NAME = process.env.MONGODB_NAME;

async function connect() {
    try {
        let client = await MongoClient.connect(MONGODB_URL);
        let db = client.db(MONGODB_NAME)
        return db;
    }
    catch (e) {
        console.log("Error Connecting To DataBase",e)
        throw new Error("Error Connecting To DataBase");
    }
}

module.exports = connect;
