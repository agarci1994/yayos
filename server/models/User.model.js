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
  yayo: String,
  diet: String,
  recipe: {
    day1: {
      breakfast: {
        name: String,
        ingredients: String
      },
      lunch: {
        name: String,
        ingredients: String
      },
      dinner: {
        name: String,
        ingredients: String
      }
    },
    day2: {
      breakfast: {
        name: String,
        ingredients: String
      },
      lunch: {
        name: String,
        ingredients: String
      },
      dinner: {
        name: String,
        ingredients: String
      }
    },
    day3: {
      breakfast: {
        name: String,
        ingredients: String
      },
      lunch: {
        name: String,
        ingredients: String
      },
      dinner: {
        name: String,
        ingredients: String
      }
    },
    day4: {
      breakfast: {
        name: String,
        ingredients: String
      },
      lunch: {
        name: String,
        ingredients: String
      },
      dinner: {
        name: String,
        ingredients: String
      }
    },
    day5: {
      breakfast: {
        name: String,
        ingredients: String
      },
      lunch: {
        name: String,
        ingredients: String
      },
      dinner: {
        name: String,
        ingredients: String
      }
    },
    day6: {
      breakfast: {
        name: String,
        ingredients: String
      },
      lunch: {
        name: String,
        ingredients: String
      },
      dinner: {
        name: String,
        ingredients: String
      }
    },
    day7: {
      breakfast: {
        name: String,
        ingredients: String
      },
      lunch: {
        name: String,
        ingredients: String
      },
      dinner: {
        name: String,
        ingredients: String
      }
    },
  },
memory: [Object]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;