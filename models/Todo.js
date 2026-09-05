const mongoose = require('mongoose')

// 1. Define the blueprint (Schema)
const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

// 2. Compile the schema into a Model
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo
