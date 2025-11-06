const express = require('express');
const router = express.Router();
const jobService = require('../services/jobService')
const { ObjectId } = require('mongodb')

router.post('/create/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const { company_name, role, link,
            status, notes, tags }
            = req.body
        const result = await jobService.createJobs({
            company_name, role, link,
            status, notes, tags
        }, created_by = new ObjectId(_id));
        res.json(
            { "message": "Job Created Successfully" }
        )
        return result;

    } catch (e) {
        console.log(e);
        res.status(500).json({
            "message": "Error Creating jobs"
        })
    }
})

router.put('/update/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const { company_name, role, link,
            status, notes, tags }
            = req.body
        const result = await jobService.updateJobs({
            _id,
            company_name, role, link,
            status, notes, tags
        }, updated_at = new Date());
        res.json(
            { "message": "Job Updated Successfully" }
        )
        return result;

    } catch (e) {
        console.log(e);
        res.status(500).json({
            "message": "Error Updating Jobs"
        })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteJobs = await jobService.deleteJobs({ _id })
        console.log(_id)
        res.json({
            "message": "Job Delete Successfully"
        })
        return deleteJobs
    } catch (e) {
        console.log(e);
        res.status(500).json({
            "message": "Error Deleting Jobs"
        })
    }
})

module.exports = router;