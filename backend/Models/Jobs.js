const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobsSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    VolunteerCount: {
        type: Number,
        required: true
    },
    ApplicationEndDate: {
        type: Date,
        required: true
    },
    JobRunTime: {
        type: Number,
        required: true
    },
    VolunteerEmail: {
        type: String,
        required: true
    }
});

const JobsModel = mongoose.model('jobs', JobsSchema);
module.exports = JobsModel;