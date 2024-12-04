const express = require('express');
const {
  createHabit,
  markHabitComplete,
  fetchHabits,
  weeklyReport,
} = require('../controllers/habitController');

const router = express.Router();

// Route definitions
router.post('/', createHabit);
router.put('/:id', markHabitComplete);
router.get('/', fetchHabits);
router.get('/report', weeklyReport);

module.exports = router;
