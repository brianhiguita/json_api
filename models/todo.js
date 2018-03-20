var mongoose = require('mongoose');

var todoSchema = new mongoose.schema({
    name: {
        type: String,
        required: "name cannot be blank"
    },
    completed: {
        type: Boolean,
        default: false   
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

var Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo;

// name 
// completed
// created_date