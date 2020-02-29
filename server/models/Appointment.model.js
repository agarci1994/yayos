const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = mongoose.model('./User.model.js')

const appointmentSchema = new Schema({
    doctor: {
        type: Schema.ObjectId,
        ref: Yayo
    },
    description: String,
    day: Date,
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

const Appointment = mongoose.model('Bill', appointmentSchema);
module.exports = Appointment