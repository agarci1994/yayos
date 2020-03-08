const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  user: String,
  diet: String,
  recipe: Array,
  memory: [Object]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;