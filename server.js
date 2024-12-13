const express = require('express');
const cors = require('cors');  // Import CORS
const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());

app.use(express.static("public"));

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Routes with dynamic content
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Index',
    message: 'Welcome Back',
    message2: 'Home'
  });
});

// API route for dynamic content
app.get('/api/content', (req, res) => {
  const pages = {
    home: { message: 'Homepage', message2: 'Hello World!' },
    contact: { message: 'Get in Touch', message2: 'Contact Us' },
    about: { message: 'About Us', message2: 'Who We Are' }
  };

  const page = req.query.page || 'home';  // Default to home
  res.json(pages[page] || pages['home']);
});

app.get('/date/120924/users/currentuser/1795028364/contact', (req, res) => {
  res.render('contact', { title: 'Contact', message: 'Get in Touch' });
});

app.get('/date/121024/users/currentuser/1923807465/time', (req, res) => {
  const currentTime = new Date().toLocaleString();
  res.render('time', { title: 'Current Time', time: currentTime });
});

app.get('/date/121024/users/currentuser/1294857360/fortune', (req, res) => {
  const fortunes = [
    "You will have a great day!",
    "Adventure is on the horizon.",
    "Success is coming your way.",
    "Prepare for unexpected opportunities.",
    "Good news will brighten your day."
  ];

  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render('fortune', { title: 'Your Fortune', fortune: randomFortune });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
