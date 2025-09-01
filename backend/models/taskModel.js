const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  text: { type: String, required: true },
  dueDate: { type: String },
  category: { type: String },
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Task', taskSchema);
