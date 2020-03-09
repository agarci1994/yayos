const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User.model')

const appointmentSchema = new Schema({
    description: String,
    day: String,
    time: String,
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

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment