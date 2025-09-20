const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');

const app = express();

// CORS setup for frontend on port 3000
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// Body parser
app.use(bodyParser.json());

// Routes
app.use('/api/user', userRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
