const mongoose = require('mongoose');

const hardCoverSchema = new mongoose.Schema({
    valid: Boolean
}, { timestamps: true });

module.exports = mongoose.model('HardCover', hardCoverSchema)