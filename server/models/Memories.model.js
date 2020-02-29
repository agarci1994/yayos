const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = mongoose.model('./User.model.js')

const memorySchema = new Schema({
    description: String,
    day: Date,
    yayo: { type: Schema.ObjectId, ref: User }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Memory = mongoose.model('Memory', memorySchema);
module.exports = Memory;