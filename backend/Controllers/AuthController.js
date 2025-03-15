const bcrypt = require('bcrypt');
const UserModel = require('../Models/User');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {

    const {name,email, password, type, phone, joinedDate, role } = req.body;
    try {
        const user = await UserModel.findOne({email});
        if(user) return res.status(409).send('User already exists');

        const newUser = new UserModel({name,email,password,type, phone, joinedDate, role});
        newUser.password = await bcrypt.hash(password, 10);
      

        await newUser.save();
        res.status(201).json({
            message: 'User created successfully',
            success: true
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        });
    }
};

const login = async (req, res) => {

    const {email, password } = req.body;
    try {
        const user = await UserModel.findOne({email});
        const errorMessage = 'Authentication failed';
        if(!user){
            return res.status(403).json({
                message: errorMessage,
                success: false
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(403).json({
                message: errorMessage,
                success: false
            });
        }

        const jwtToken = jwt.sign({
            email: user.email,
            _id: user._id
        }, process.env.JWT_SECRET, {
            expiresIn: '24h'
        }); 
    
        res.status(200).json({
            message: 'Login successful',
            success: true,
            token: jwtToken,
            user: {
                name: user.name,
                email: user.email,
                type: user.type,
                phone: user.phone,
                joinedDate: user.joinedDate,
                role: user.role,
                _id: user._id
            }

        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        });
    }
};

const validateToken = async (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await UserModel.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        res.status(200).json({ user });
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = {
    signup,
    login,
    validateToken
};