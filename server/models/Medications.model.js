const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User.model')

const drugSchema = new Schema({

    name: String,
    quantity: Number,
    quantityDay: Number,
    day: [String],
    hours: [String],
    description: String,
    color: String,
    form: ["little-circle", "big-circle", "liquid", "pill"],
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

const Drug = mongoose.model('Drug', drugSchema);
module.exports = Drug;