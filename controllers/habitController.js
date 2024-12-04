const { Habit, getHabits, addHabit, updateHabit, generateWeeklyReport } = require('../models/habit');

// Add a new habit
const createHabit = (req, res) => {
  const { name, dailyGoal } = req.body;
  if (!name || !dailyGoal) {
    return res.status(400).json({ status: 'error', data: null, error: 'Invalid input' });
  }
  const habit = new Habit(name, dailyGoal);
  addHabit(habit);
  res.json({ status: 'success', data: habit, error: null });
};

// Mark habit as complete
const markHabitComplete = (req, res) => {
  const { id } = req.params;
  const { date } = req.body;
  updateHabit(id, date);
  res.json({ status: 'success', data: 'Habit marked as complete', error: null });
};

// Fetch all habits
const fetchHabits = (req, res) => {
  const habits = getHabits();
  res.json({ status: 'success', data: habits, error: null });
};

// Weekly report
const weeklyReport = (req, res) => {
  const report = generateWeeklyReport();
  res.json({ status: 'success', data: report, error: null });
};

module.exports = { createHabit, markHabitComplete, fetchHabits, weeklyReport };
