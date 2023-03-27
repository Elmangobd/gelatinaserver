const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    imagen: {
        type: String,
        required: true,
    },
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio:{
        type: String,
        required: true
    },
    stock:{
        type: String,
        required:true
    }
});

module.exports = mongoose.model('productos', userSchema);

