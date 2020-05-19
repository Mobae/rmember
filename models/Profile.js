const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    img: {
        // data: Buffer,
        // contentType: String
        type: String,
        trim: true
    }
})

module.exports = mongoose.model('Profile', ProfileSchema);
