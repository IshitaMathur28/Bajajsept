const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Parse incoming JSON requests
app.use(bodyParser.json({ limit: '10mb' }));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../bfhl-frontend/build')));

// POST /bfhl (API endpoint)
app.post('/bfhl', (req, res) => {
  // Your POST logic here
});

// GET /bfhl (API endpoint)
app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

// All other routes return the React app (index.html)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../bfhl-frontend/build', 'index.html'));
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
