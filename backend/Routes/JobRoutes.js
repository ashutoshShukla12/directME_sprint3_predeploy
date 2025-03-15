const express = require('express');
const JobsModel = require('../Models/Jobs');
const router = express.Router();

// Get all jobs
router.get('/jobs', async (req, res) => {
    try {
        const jobs = await JobsModel.find();
        res.json(jobs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new job
router.post('/jobs', async (req, res) => {
    const job = new JobsModel({
        Name: req.body.name,
        Description: req.body.description,
        Location: req.body.location,
        VolunteerCount: req.body.volunteerCount,
        ApplicationEndDate: req.body.applicationEndDate,
        JobRunTime: req.body.jobRunTime,
        VolunteerEmail: req.body.volunteerEmail
    });

    try {
        const newJob = await job.save();
        res.status(201).json(newJob);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get a single job by ID
router.get('/jobs/:id', async (req, res) => {
    try {
        const job = await JobsModel.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.json(job);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a job by ID
router.put('/jobs/:id', async (req, res) => {
    try {
        const job = await JobsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.json(job);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a job by ID
router.delete('/jobs/:id', async (req, res) => {
    try {
        const job = await JobsModel.findByIdAndDelete(req.params.id);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.json({ message: 'Job deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;