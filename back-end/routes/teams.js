const { Router } = require('express');
const { check } = require('express-validator')

const { getTeams, createTeam, editTeam, deleteTeam } = require('../controllers/teams')
const { validarCampos } = require('../middleware/validar-campos')
const { validarJWT } = require('../middleware/validar-jwt');
const router = Router();
router.use(validarJWT)



router.get('/', getTeams)

router.post(
    '/',
    [
        check('teamName', 'El nombre del equipo es obligatorio').not().isEmpty(),
        check('accountName', 'El nombre cuenta es obligatorio').not().isEmpty(),
        validarCampos
    ],
    createTeam)

router.put('/:id', editTeam)

router.delete('/:id', deleteTeam)

module.exports = router;