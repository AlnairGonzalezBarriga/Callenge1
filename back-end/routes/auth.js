const { Router } = require('express');
const { check } = require('express-validator')
const router = Router();

const { crearUsuario, loginUsuario, revalidarToken, getUsers, updateUsers, deleteUsers } = require('../controllers/auth')
const { validarCampos } = require('../middleware/validar-campos')
const { validarJWT } = require('../middleware/validar-jwt')

router.post(
    '/new',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('role', 'El rol es obligatorio').not().isEmpty(),
        check('password', 'El password debe tener un minimo de 6 caracteres').isLength({ min: 6 }),
        validarJWT,
        validarCampos
    ],
    crearUsuario)

router.post(
    '/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe tener un minimo de 6 caracteres').isLength({ min: 6 })
    ],
    loginUsuario)

router.get('/renew', validarJWT, revalidarToken)

router.get('/users',
    [
        validarJWT
    ],
    getUsers)

router.put('/:id',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('role', 'El rol es obligatorio').not().isEmpty(),
        check('password', 'El password debe tener un minimo de 6 caracteres').isLength({ min: 6 }),
        validarJWT,
        validarCampos
    ],
    updateUsers)

router.delete('/:id',
    [
        validarJWT
    ],
    deleteUsers)

module.exports = router;