const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    userName: {
        type: String, 
        // required: [true, "Please enter your name"]
        },
    userMessage: {
        type: String, 
        // required: [true, "What do you want share with the world?"]
        },
},
{
    timestamps: true
});

const newbook = mongoose.model("newbook", bookSchema)
module.exports = newbook;