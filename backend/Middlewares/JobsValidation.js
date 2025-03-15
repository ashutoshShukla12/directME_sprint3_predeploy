const joi = require('joi');

const jobsValidation = (req,res,next) => {
    const schema = joi.object({
        name: joi.string().min(3).max(100).required(),
        description: joi.string().min(3).max(100).required(),
        location: joi.string().min(3).max(100).required(),
        volunteerCount: joi.number().required(),
        applicationEndDate: joi.date().required(),
        jobRunTime: joi.date().required(),
        volunteerEmail: joi.string().email().required()
    });

    const { error } = schema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    next();
}

module.exports = jobsValidation
