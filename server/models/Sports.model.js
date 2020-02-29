const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sportSchema = new Schema({
    description: String,
    day: Date,

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Sport= mongoose.model('Sport', sportSchema);
module.exports = Sport;