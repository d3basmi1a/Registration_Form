const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const bcrypt = require("bcryptjs");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
});

// Define a schema for the user data
const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    phno: String,
    gender: String,
    password: String,
});

// Create a model based on the schema
const User = mongoose.model('User', UserSchema);

// Route to handle form submission
app.post('/register', async (req, res) => {
    const { name, age, email, phno, gender, password } = req.body;

    try {
        // Generate a salt
        const salt = await bcrypt.genSalt(10);
        // Hash the password along with the salt
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            age,
            email,
            phno,
            gender,
            password: hashedPassword, //Store hashed password
        });

        // Save the user to the database
        const user = await newUser.save();
        res.sendFile(__dirname + "/public/signup_successful.html");
    } catch (err) {
        console.error('Error saving user:', err);
        res.status(500).send('Error registering user');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
