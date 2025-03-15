const { signup, login, validateToken } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

router.post('/signup', signupValidation, signup); 
router.post('/login', loginValidation, login); 
router.post('/validateToken', validateToken);

module.exports = router;