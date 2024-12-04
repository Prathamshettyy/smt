const { v4: uuidv4 } = require('uuid');

// In-memory storage for habits
let habits = [];

// Habit model
class Habit {
  constructor(name, dailyGoal) {
    this.id = uuidv4();
    this.name = name;
    this.dailyGoal = dailyGoal;
    this.completedDays = [];
  }
}

// Utility functions for habit operations
const getHabits = () => habits;

const addHabit = (habit) => habits.push(habit);

const updateHabit = (id, date) => {
  const habit = habits.find((h) => h.id === id);
  if (habit) {
    habit.completedDays.push(date);
  }
};

const generateWeeklyReport = () => {
  return habits.map((habit) => ({
    name: habit.name,
    completedDays: habit.completedDays.slice(-7), // Last 7 days
  }));
};

module.exports = { Habit, getHabits, addHabit, updateHabit, generateWeeklyReport };
