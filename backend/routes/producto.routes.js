/**
 * Módulo de rutas para Producto
 * Se usa express y el controlador correspondiente
 */

const express = require('express');
const router = express.Router();

const productoCtrl = require('../controllers/producto.controller');

// Obtener todos los productos
router.get('/', productoCtrl.getProductos);

// Crear un producto
router.post('/', productoCtrl.createProducto);

// Obtener un único producto por ID
router.get('/:id', productoCtrl.getUnicoProducto);

// Actualizar producto
router.put('/:id', productoCtrl.editarProducto);

// Eliminar producto
router.delete('/:id', productoCtrl.eliminarProducto);

module.exports = router;
