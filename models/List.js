const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId
    },
    name: {
        type: String
    }

})

module.exports = mongoose.model('List', ListSchema);
