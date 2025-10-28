/**
 * Módulo de rutas para Usuario
 * Se usa express y el controlador correspondiente
 */

const express = require('express');
const router = express.Router();

const usuarioCtrl = require('../controllers/usuario.controller');

// Obtener todos los usuarios
router.get('/', usuarioCtrl.getUsuarios);

// Crear un usuario
router.post('/', usuarioCtrl.createUsuario);

// Obtener un único usuario por ID
router.get('/:id', usuarioCtrl.getUnicoUsuario);

// Actualizar usuario
router.put('/:id', usuarioCtrl.editarUsuario);

// Eliminar usuario
router.delete('/:id', usuarioCtrl.eliminarUsuario);

module.exports = router;
