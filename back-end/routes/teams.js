const { Router } = require('express');
const { check } = require('express-validator')

const { getTeams, createTeam, editTeam, deleteTeam, addTeamMember, deleteTeamMember } = require('../controllers/teams')
const { validarCampos } = require('../middleware/validar-campos')
const { validarJWT } = require('../middleware/validar-jwt');
const router = Router();
router.use(validarJWT)

/**
 * @swagger
 * components:
 *   schemas:
 *     Team:
 *       type: object
 *       properties:
 *         id:
 *           type: ObjectId
 *           description: The user ID.
 *           example: 0
 *         teamClient:
 *           type: string
 *           description: The clients name.
 *           example: Leanne Graham
 *         accountName:
 *           type: string
 *           description: The account name.
 *           example: Appoinment app 
 *         leaderName:
 *           type: string
 *           description: The team manager.
 *           example: John Doe
 *         teamMembers:
 *           type: array
 *           items:
 *              properties:
 *                  id:
 *                      type: ObjectId
 *                      description: The member id, takes reference from the User model
 *                      example: 0
 */

/**
 * @openapi
 * /api/teams:
 *   get:
 *     summary : Get a list of the Teams
 *     description: Get a list of the Teams it populates teamMembers name and email
 *     produces: 
 *         - application/json
 *     parameters:
 *          - in: header
 *            name: x-token
 *            description: Valid JWT
 *     responses:
 *       200:
 *         description: Returns a list of Teams
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: string
 *                   description: Retun status.
 *                   example: true
 *                 teams:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: ObjectId
 *                         description: Team id.
 *                         example: 0
 *                       teamClient:
 *                         type: string
 *                         example: John Doe
 *                       accountName:
 *                         type: string
 *                         example: Appoinment app
 *                       leaderName:
 *                         type: string
 *                         example: John Doe
 *                       teamMembers:
 *                         type: array
 *                         items:
 *                             type: object
 *                             properties:
 *                                 _id:
 *                                   type: ObjectId
 *                                   example: 0
 *                                 name:
 *                                   type: string
 *                                   example: John Doe
 *                                 email:
 *                                   type: string
 *                                   example: john@mail.com
 */

router.get('/', getTeams)

/**
 * @openapi
 * /api/teams:
 *   post:
 *     summary : Create a team
 *     description: Use this request to create a Team
 *     produces: 
 *         - application/json
 *     parameters:
 *          - in: header
 *            name: x-token
 *            description: Valid JWT
 *     requestBody:
 *         required: true 
 *         content:
 *             application/json:
 *                 schema:
 *                   type: object
 *                   properties: 
 *                     teamClient: 
 *                       type: string
 *                       description: The clients name
 *                       example: John Doe
 *                     accountName: 
 *                       type: string
 *                       description: The account name
 *                       example: Appoinment app
 *                     leaderName: 
 *                       type: string
 *                       description: The team manager
 *                       example: John Doe
 *     responses:
 *       200:
 *         description: Returns a list of Teams
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: string
 *                   description: Retun status.
 *                   example: true
 *                 team:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: ObjectId
 *                         description: Team id.
 *                         example: 0
 *                       teamClient:
 *                         type: string
 *                         example: John Doe
 *                       accountName:
 *                         type: string
 *                         example: Appoinment app
 *                       leaderName:
 *                         type: string
 *                         example: John Doe
 *                       teamMembers:
 *                         type: array
 *                         items:
 *                             type: object
 */

router.post(
    '/',
    [
        check('teamClient', 'El nombre del equipo es obligatorio').not().isEmpty(),
        check('accountName', 'El nombre cuenta es obligatorio').not().isEmpty(),
        validarCampos
    ],
    createTeam)

/**
 * @openapi
 * /api/teams/{teamId}:
 *   put:
 *     summary : Update a team
 *     description: Use this request to update a Team
 *     produces: 
 *         - application/json
 *     parameters:
 *          - in: header
 *            name: x-token
 *            description: Valid JWT
 *     requestBody:
 *         required: true 
 *         content:
 *             application/json:
 *                 schema:
 *                   type: object
 *                   properties: 
 *                     teamClient: 
 *                       type: string
 *                       description: The clients name
 *                       example: John Doe
 *                     accountName: 
 *                       type: string
 *                       description: The account name
 *                       example: Appoinment app
 *                     leaderName: 
 *                       type: string
 *                       description: The team manager
 *                       example: John Doe
 *     responses:
 *       200:
 *         description: Returns a list of Teams
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: string
 *                   description: Retun status.
 *                   example: true
 *                 team:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: ObjectId
 *                         description: Team id.
 *                         example: 0
 *                       teamClient:
 *                         type: string
 *                         example: John Doe
 *                       accountName:
 *                         type: string
 *                         example: Appoinment app
 *                       leaderName:
 *                         type: string
 *                         example: John Doe
 *                       teamMembers:
 *                         items:
 *                             type: object
 *                             properties:
 *                                 _id:
 *                                   type: ObjectId
 *                                   example: 0
 *                                 name:
 *                                   type: string
 *                                   example: John Doe
 *                                 email:
 *                                   type: string
 *                                   example: john@mail.com
 */

router.put('/:id',
    [
        check('teamClient', 'El nombre del equipo es obligatorio').not().isEmpty(),
        check('accountName', 'El nombre cuenta es obligatorio').not().isEmpty(),
        validarCampos
    ],
    editTeam)

/**
 * @openapi
 * /api/teams/{teamId}:
 *   delete:
 *     summary : Update a team
 *     description: Use this request to update a Team
 *     produces: 
 *         - application/json
 *     parameters:
 *          - in: header
 *            name: x-token
 *            description: Valid JWT
 *     responses:
 *       200:
 *         description: Returns a list of Teams
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: string
 *                   description: Retun status.
 *                   example: true
 */

router.delete('/:id', deleteTeam)

router.put('/addTeamMember/:id', addTeamMember)

router.put('/deleteTeamMember/:id', deleteTeamMember)

module.exports = router;