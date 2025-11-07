const jobDataLayer = require('../data/jobData');

async function createJobs(input){

    const newJob = await jobDataLayer.createJobs(input)
    return newJob
}

async function updateJobs(input){

    const updateJob = await jobDataLayer.updateJobs(input)
    return updateJob
}

async function deleteJobs(input){
    const deleteJob = await jobDataLayer.deleteJobs(input)
    return deleteJob
}

async function getJobs({_id}){
    const getJobs = await jobDataLayer.getJobs({_id});
    return getJobs;
}

module.exports = { createJobs, updateJobs, deleteJobs, getJobs };