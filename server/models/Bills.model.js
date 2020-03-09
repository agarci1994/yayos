const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('./User.model')

const billsSchema = new Schema({
    type: String,
    dayPay: Date,
    user: {
        type: Schema.ObjectId,
        ref: User
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Bills = mongoose.model('Bills', billsSchema);
module.exports = Bills