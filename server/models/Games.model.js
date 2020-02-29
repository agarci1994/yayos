const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const gameSchema = new Schema({
    description: String,
    day: Date,

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;