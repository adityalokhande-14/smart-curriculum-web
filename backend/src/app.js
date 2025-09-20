const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/user');
const attendanceRoutes = require('./routes/attendance');

app.use('/api/user', userRoutes);
app.use('/api/attendance', attendanceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));