const JobsModel = require('../Models/Jobs');

// Create a new job and assign a volunteer by email
export const createJob = async (req, res) => {
    try {
        const { name, description, location, volunteerCount, applicationEndDate, jobRunTime, volunteerEmail } = req.body;

        const job = new JobsModel({
            Name: name,
            Description: description,
            Location: location,
            VolunteerCount: volunteerCount,
            ApplicationEndDate: applicationEndDate,
            JobRunTime: jobRunTime,
            VolunteerEmail: volunteerEmail
        });

        await job.save();
        res.status(201).json(job);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a job to assign a volunteer by email
export const updateJob = async (req, res) => {
    try {
        const { jobId, Volunteer} = req.body;

        const job = await JobsModel.findByIdAndUpdate(
            jobId,
            { Volunteer: Volunteer },
            { new: true }
        );

        res.status(200).json(job);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all jobs
export const getJobs = async (req, res) => {
    try {
        const jobs = await JobsModel.find();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};