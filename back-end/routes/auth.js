const { Router } = require('express');
const { check } = require('express-validator')
const router = Router();

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth')
const { validarJWT } = require('../middleware/validar-jwt')

router.post(
    '/new', 
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('role', 'El rol es obligatorio').not().isEmpty(),
        check('password', 'El password debe tener un minimo de 6 caracteres').isLength({ min:6 })
    ],
    crearUsuario)

router.post(
    '/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe tener un minimo de 6 caracteres').isLength({ min:6 })
    ], 
    loginUsuario)

router.get('/renew', validarJWT, revalidarToken)

module.exports = router;