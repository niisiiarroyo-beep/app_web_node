/**
 * Controlador para los productos o servicios
 * Se importa el modelo de Producto y se definen los métodos del CRUD
 */

const Producto = require('../models/producto');
const productoCtrl = {};

// Obtener todos los productos
productoCtrl.getProductos = async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
};

// Crear producto
productoCtrl.createProducto = async (req, res) => {
    const producto = new Producto(req.body);
    await producto.save();
    res.json({
        status: 'Producto guardado'
    });
};

// Obtener un único producto
productoCtrl.getUnicoProducto = async (req, res) => {
    const productoUnico = await Producto.findById(req.params.id);
    res.json(productoUnico);
};

// Actualizar producto
productoCtrl.editarProducto = async (req, res) => {
    const { id } = req.params;
    const productoEdit = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        existencia: req.body.stock
    };
    await Producto.findByIdAndUpdate(id, { $set: productoEdit }, { new: true });
    res.json({ status: 'Producto actualizado' });
};

// Eliminar producto
productoCtrl.eliminarProducto = async (req, res) => {
    await Producto.findByIdAndDelete(req.params.id);
    res.json({ status: 'Producto eliminado' });
};

// Exportar módulo
module.exports = productoCtrl;
