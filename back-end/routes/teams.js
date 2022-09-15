const { Router } = require('express');
const { check } = require('express-validator')

const { getTeams, createTeam, editTeam, deleteTeam, addTeamMember, deleteTeamMember } = require('../controllers/teams')
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

router.put('/:id',
    [
        check('teamName', 'El nombre del equipo es obligatorio').not().isEmpty(),
        check('accountName', 'El nombre cuenta es obligatorio').not().isEmpty(),
        validarCampos
    ],
    editTeam)

router.delete('/:id', deleteTeam)

router.put('/addTeamMember/:id',
    [
        check('teamName', 'El nombre del equipo es obligatorio').not().isEmpty(),
        check('accountName', 'El nombre cuenta es obligatorio').not().isEmpty(),
        validarCampos
    ],
    addTeamMember)

router.put('/deleteTeamMember/:id', deleteTeamMember)

module.exports = router;