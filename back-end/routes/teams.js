const { Router } = require('express');
const { check } = require('express-validator')

const { getTeams, createTeam, editTeam, deleteTeam } = require('../controllers/teams')
const { validarJWT } = require('../middleware/validar-jwt');
const router = Router();
router.use( validarJWT )



router.get('/', getTeams )

router.post('/', createTeam )

router.put('/:id', editTeam )

router.delete('/:id', deleteTeam )

module.exports = router;