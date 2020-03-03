const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  
  username: String,
  password: String,
  name: String,
  surname: String,
  city: String,
  age: Number,
  role: ["Yayo", "Family", "Doctor", "Auxiliary"],
  especiality: String,
  phone: Number,
  affliction: [String],
  yayo: String,
  diet: String

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
