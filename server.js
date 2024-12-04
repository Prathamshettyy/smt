const express = require('express');
const habitRoutes = require('./routes/habits');
const scheduler = require('./utils/scheduler');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/habits', habitRoutes);

// Start daily reminders
scheduler.startDailyReminder();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
