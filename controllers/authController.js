import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jwt-simple';

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (!users) return res.status(404).json("Users not found");
        res.json(users);
    } catch (error) {
        res.status(500).json({message: error.message});   
    }    
};
const register = async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            return res.status(400).json({
                message: 'Email and password are required'
            });            
        };
        const newPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = newPassword;
        const newUser = await User.create(req.body);
        return res.json({
            message: 'User created successfully',
            user: newUser
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
const updateUser = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({username: req.params.username}, req.body, {new: true});
        res.json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};
const deleteUser = async (req, res) => {
    try {
        const user = await User.findOneAndDelete({username: req.params.username});
        res.json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};
const login = async (req, res) => {
    // Pedir password y correo
    if (!req.body.password || !req.body.email) {
        return res.status(400).json({
            message: 'Email and password are required'
        });
    };
    try {  
        const user = await User.findOne({
            email: req.body.email
        });
        if (!user) {
            return res.status(401).json({
                message: 'User not found'
            });
        };
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if (isPasswordCorrect) {
            const payload = {
                email: user.email,
                role: user.role
            };
            const token = jwt.encode(payload, process.env.SECRET);
            return res.json({
                message: 'Login successful', 
                token: token
            });
        }
        else {
            return res.status(401).json({
                message: 'Incorrect password',
                error: error.message
            })};
    } catch (error) {
        res.status(500).json({message: error.message});     
    }
}

export {getUsers, register, updateUser, deleteUser, login}