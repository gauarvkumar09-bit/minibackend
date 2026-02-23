const bcrypt = require('bcrypt');
const Usermodel = require('../Models/User');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const signup = async (req, res) => {
    try {
        // Stability check for Serverless
        if (mongoose.connection.readyState !== 1) {
            await mongoose.connect(process.env.MONGO_URI);
        }

        const { name, email, password } = req.body;
        const user = await Usermodel.findOne({ email });
        
        if (user) {
            return res.status(409).json({ 
                message: 'User is already there, you can login', 
                success: false 
            });
        }

        const userModel = new Usermodel({ name, email, password });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();

        res.status(201).json({
            message: "Signup successful",
            success: true
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal server error",
            error: err.message, // Isse error logs mein dikhega
            success: false
        });
    }
}

const login = async (req, res) => {
    try {
        // Stability check for Serverless
        if (mongoose.connection.readyState !== 1) {
            await mongoose.connect(process.env.MONGO_URI);
        }

        const { email, password } = req.body;
        const user = await Usermodel.findOne({ email });
        const errmsg = 'Authentication failed: email or password is wrong';

        if (!user) {
            return res.status(403).json({ message: errmsg, success: false });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(403).json({ message: errmsg, success: false });
        }

        // JWT Secret spelling fixed and using user._id
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET, 
            { expiresIn: '24h' }
        );

        res.status(200).json({
            message: "Login successful",
            success: true,
            jwtToken,
            email,
            name: user.name
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal server error",
            error: err.message,
            success: false
        });
    }
}

module.exports = {
    signup,
    login
}
