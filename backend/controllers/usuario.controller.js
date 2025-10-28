/**
 * Controlador para los usuarios
 * Se importa el modelo de Usuario y se definen los métodos del CRUD
 */

const Usuario = require('../models/usuario');
const usuarioCtrl = {};

// Obtener todos los usuarios
usuarioCtrl.getUsuarios = async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
};

// Crear usuario
usuarioCtrl.createUsuario = async (req, res) => {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.json({
        status: 'Usuario guardado'
    });
};

// Obtener un único usuario por ID
usuarioCtrl.getUnicoUsuario = async (req, res) => {
    const usuarioUnico = await Usuario.findById(req.params.id);
    res.json(usuarioUnico);
};

// Actualizar usuario
usuarioCtrl.editarUsuario = async (req, res) => {
    const { id } = req.params;
    const usuarioEdit = {
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password
    };
    await Usuario.findByIdAndUpdate(id, { $set: usuarioEdit }, { new: true });
    res.json({ status: 'Usuario actualizado' });
};

// Eliminar usuario
usuarioCtrl.eliminarUsuario = async (req, res) => {
    await Usuario.findByIdAndDelete(req.params.id);
    res.json({ status: 'Usuario eliminado' });
};

// Exportar módulo
module.exports = usuarioCtrl;
