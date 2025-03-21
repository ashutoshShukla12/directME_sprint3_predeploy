const Joi = require('joi');

const volunteerValidation = (req,res,next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(),
        phone: Joi.string().min(10).max(10).required()
    });

    const { error } = schema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    next();
}

module.exports = volunteerValidation