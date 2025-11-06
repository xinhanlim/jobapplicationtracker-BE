const { ObjectId } = require('mongodb');
const connect = require('../server/database');

async function createJobs({
    company_name = String,
    role = String,
    link = String,
    status = String,
    notes = String,
    tags = [],
    date_applied = new Date(),
}) {
    try {
        const db = await connect();
        const jobsDoc = {
            company_name,
            role,
            link,
            status,
            notes,
            tags,
            date_applied,
            created_by,
        }

        const result = await db.collection('jobs').insertOne(jobsDoc)
        return result
    } catch (e) {
        console.log(e)
    }
}

async function updateJobs({
    _id,
    company_name = String,
    role = String,
    link = String,
    status = String,
    notes = String,
    tags = [],
    updated_at = new Date(),
}) {
    try {
        const db = await connect();
        const updateJob = {
            company_name,
            role,
            link,
            status,
            notes,
            tags,
            updated_at,
        }
        const result = await db.collection('jobs').updateOne(
            { _id: new ObjectId(_id) }, { $set: updateJob }
        )
        return result;
    } catch (e) {
        console.log(e)
    }
}

async function deleteJobs({_id}){
    try{
        const db = await connect();
        const result = await db.collection('jobs').deleteOne({_id: new ObjectId(_id)});
        return result
    }catch(e){
        console.log(e)
    }
}

module.exports = { createJobs, updateJobs, deleteJobs }