const { response } = require('express');
const Team = require('../models/teams')

const getTeams = async (req, res = response) => {

    const teams = await Team.find().populate('teamMembers.memberId', 'name email')

    res.json({
        ok: true,
        teams
    })
}

const createTeam = async (req, res = response) => {

    const team = new Team(req.body)

    try {

        team.teamMembers= [{memberId: req.uid}]

        const newTeam = await team.save()

        res.json({
            ok: true,
            team: newTeam
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error, hable con el admonistrador'
        })
    }
}

const editTeam = async (req, res = response) => {
    res.json({
        ok: true,
        msg: 'editar'
    })
}

const deleteTeam = async (req, res = response) => {
    res.json({
        ok: true,
        msg: 'eliminar'
    })
}

module.exports = {
    getTeams,
    createTeam,
    editTeam,
    deleteTeam,
}