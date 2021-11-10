const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  username: { type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3 },
  password: { type: String, required: true },
  subject: { type: String, required: true },
  name: { type: String, required: true },
  // date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;