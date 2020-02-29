const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = mongoose.model('./User.model.js')

const billSchema = new Schema({
    description: String,
    day: Date,
    price: Number,
    yayo: {
        type: Schema.ObjectId,
        ref: User
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Bill = mongoose.model('Bill', billSchema);
module.exports = Bill