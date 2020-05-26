const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId
    },
    todo: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    priority: {
        type: Number
    },
    completed: {
        type: Boolean
    },
    tags: [
        {
            name: {
                type: String
            }
        }
    ],
    list: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('Todo', TodoSchema);
