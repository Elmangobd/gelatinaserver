const { default: mongoose } = require("mongoose")
const mongo = require("mongoose")

const userSchema =  mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    namep: {
        type: String,
        required: true
    },
    namem: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)
