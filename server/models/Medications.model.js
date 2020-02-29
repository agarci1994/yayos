const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = mongoose.model('./User.model.js')

const drugSchema = new Schema({
    drugs: [{
        name: String,
        quantity: Number,
        day: [String],
        hours: [String],
        description: String,
        color: String,
        form: ["little-circle", "big-circle", "liquid", "pill"],
        price: Number,
        yayo: { type: Schema.ObjectId, ref: User }

    }]
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Drug = mongoose.model('Drug', drugSchema);
module.exports = Drug;