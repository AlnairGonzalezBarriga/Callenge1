const { response } = require('express');

const getTeams = async(req, res = response) => {
    res.json({
        ok: true,
        msg: 'obtener'
    })
}

const createTeam = async(req, res = response) => {

    console.log(req.body)

    res.json({
        ok: true,
        msg: 'crear'
    })
}

const editTeam = async(req, res = response) => {
    res.json({
        ok: true,
        msg: 'editar'
    })
}

const deleteTeam = async(req, res = response) => {
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