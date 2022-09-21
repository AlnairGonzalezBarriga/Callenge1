const { response } = require('express');
const Team = require('../models/teams')

const getTeams = async (req, res = response) => {

    const teams = await Team.find().populate('teamMembers', 'name email')

    res.json({
        ok: true,
        teams
    })
}

const createTeam = async (req, res = response) => {

    const team = new Team(req.body)

    try {        

        const newTeam = await team.save()

        res.json({
            ok: true,
            team: newTeam
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error, hable con el administrador'
        })
    }
}

const editTeam = async (req, res = response) => {

    const teamId = req.params.id

    try {

        const team = await Team.findById(teamId)

        if (!team) {
            res.status(404).json({
                ok: false,
                msg: 'Error, el equipo no existe'
            })
        }

        const nuevoTeam = {
            ...req.body
        }

        const teamActualizado = await Team.findByIdAndUpdate(teamId, nuevoTeam, { new: true })

        res.json({
            ok: true,
            team: teamActualizado
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error, hable con el administrador'
        })
    }

}

const deleteTeam = async (req, res = response) => {

    const teamId = req.params.id

    try {

        const team = await Team.findById(teamId)

        if (!team) {
            res.status(404).json({
                ok: false,
                msg: 'Error, el equipo no existe'
            })
        }

        await Team.findByIdAndDelete(teamId)

        res.json({
            ok: true
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error, hable con el administrador'
        })
    }
}

const addTeamMember = async (req, res = response) => {

    const teamId = req.params.id
    const addId = req.body.addId
    try {

        const team = await Team.findById(teamId)

        if (!team) {
            res.status(404).json({
                ok: false,
                msg: 'Error, el equipo no existe'
            })
        }

        let member = false
        team.teamMembers.map((function (element) {
            if (element.toString() === addId) {
                member = true  
            }
        }))
        
        if(member !== true){
            const teamActualizado = await Team.findByIdAndUpdate(teamId,
                {
                    $push: {
                        teamMembers: addId
                    }
                },
                { new: true }).populate('teamMembers', 'name email')
    
            res.json({
                ok: true,
                team: teamActualizado
            })
        }else{
            res.status(500).json({
                ok: false,
                msg: 'Error, ese usuario existe en el equipo'
            })
        }        

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error, hable con el administrador'
        })
    }
}

const deleteTeamMember = async (req, res = response) => {

    const teamId = req.params.id
    const deleteId = req.body.deleteId

    try {

        const team = await Team.findById(teamId)

        if (!team) {
            res.status(404).json({
                ok: false,
                msg: 'Error, el equipo no existe'
            })
        }

        const teamActualizado = await Team.findByIdAndUpdate(teamId,
            {
                $pull: {
                    teamMembers: deleteId
                }
            },
            { new: true }).populate('teamMembers', 'name email')
            
        res.json({
            ok: true,
            team: teamActualizado
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error, hable con el administrador'
        })
    }
}

module.exports = {
    getTeams,
    createTeam,
    editTeam,
    deleteTeam,
    addTeamMember,
    deleteTeamMember
}