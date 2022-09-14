const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name is required",
    },
    email: {
        type: String,
        required: "Email is required",
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    isTeacher: {
        type: Boolean,
        default: false
    },

    
    // date: {
    //     type: Date,
    //     default: Date.now
    // }
},{timeStamps: true})

module.exports = mongoose.model('User', userSchema)