const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductoSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String },
    precio: { type: Number, required: true },
    existencia: { type: Number, default: 0 }
});

module.exports = mongoose.model('Producto', ProductoSchema);
