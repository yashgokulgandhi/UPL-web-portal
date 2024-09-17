const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const path = require('path');

const app = express();
const port = 8006;

// Database configuration
const pool = new Pool({
    user: 'postgres',
    password: 'password',
    host: 'localhost',
    port: 5432,
    database: 'postgres'
});

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS) 
app.use(express.static(path.join(__dirname, 'public')));

// Route for the login page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const client = await pool.connect();
        const query = 'SELECT password FROM signin WHERE email = $1';
        const result = await client.query(query, [email]);
        client.release();

        if (result.rows.length > 0) {
            const storedPassword = result.rows[0].password;

            // Compare stored hashed password with user-provided password
            if (storedPassword === password) {
                // Redirect to the homepage
                res.redirect('/homepage');
            } else {
                res.status(401).send('Incorrect email or password. Please try again.');
            }
        } else {
            res.status(401).send('User not found. Please check your email.');
        }
    } catch (error) {
        console.error('Error connecting to the database:', error);
        res.status(500).send('An error occurred. Please try again later.');
    }
}); 

// Route for the homepage
app.get('/homepage', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'homepage.html'));
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});





