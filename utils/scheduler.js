const cron = require('node-cron');
const { getHabits } = require('../models/habit');

// Start daily reminders
const startDailyReminder = () => {
  cron.schedule('0 9 * * *', () => { // Runs every day at 9:00 AM
    const habits = getHabits();
    habits.forEach((habit) => {
      console.log(`Reminder: Don't forget to complete "${habit.name}" today!`);
    });
  });
};

module.exports = { startDailyReminder };
