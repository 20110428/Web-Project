const User = require('../models/User');

const UserController = {
    register: async (req, res) => {
        try {
            const { username, password, email } = req.body;
            const newUser = new User({ username, password, email });
            await newUser.save();
            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Error registering user', details: error.message });
        }
    },
    login: async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({ username, password });
            if (!user) {
                return res.status(401).json({ error: 'Invalid username or password' });
            }
            res.status(200).json({ message: 'Login successful', user });
        } catch (error) {
            res.status(500).json({ error: 'Error during login', details: error.message });
        }
    },
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching users', details: error.message });
        }
    },
};

module.exports = UserController;