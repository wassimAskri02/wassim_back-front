const express = require('express');
const axios = require('axios');
const Parser = require('rss-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const parser = new Parser();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get('/api/tech-news', async (req, res) => {
  try {
    // Example RSS Feed
    const feedUrl = 'http://feeds.arstechnica.com/arstechnica/technology-lab';
    const response = await axios.get(feedUrl);
    const rssText = response.data; // axios automatically handles the response as text
    const feed = await parser.parseString(rssText);

    res.json(feed.items); // Sending back the parsed items
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    res.status(500).json({ message: 'Error fetching RSS feed' });
  }
});
// Mock user (In real scenario, use database)
const user = {
  id: "1",
  username: "user1",
  password: "$2a$10$examplehashedpassword" // bcrypt hashed password
};
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

app.post('/api/sign-in', async (req, res) => {
  try {
    // User authentication
    const { username, password } = req.body;

    // Check if user exists (In real-world, query your database)
    if (user.username !== username) {
      return res.status(400).send('User not found');
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('Invalid password');
    }

    // Create token (JWT)
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send response
    res.json({ token });
  } catch (error) {
    res.status(500).send('Server error');
  }
});



app.listen(PORT, () => {
  console.log('Server running on port ${PORT}');
});
