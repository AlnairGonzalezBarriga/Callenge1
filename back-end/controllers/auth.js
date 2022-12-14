const { response } = require('express');
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const { generarJWT } = require('../helpers/jwt')

const Usuario = require('../models/Usuario')

const crearUsuario = async (req, res = response) => {

    const { email, password } = req.body

    try {
        let usuario = await Usuario.findOne({ email })

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Ese correo ya esta en uso'
            })
        }

        usuario = new Usuario(req.body)

        const salt = bcrypt.genSaltSync()
        usuario.password = bcrypt.hashSync(password, salt)

        await usuario.save()

        const token = await generarJWT( usuario.id, usuario.name, usuario.role )

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                ok: false,
                errors: errors.mapped()
            })
        }

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }

}

const loginUsuario = async (req, res = response) => {

    const { email, role, password } = req.body
    
    try {

        const usuario = await Usuario.findOne({ email })

        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Ese usuario o contrasenia no existe(email)'
            })
        }

        const validPassword = bcrypt.compareSync(password, usuario.password)

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Ese usuario o contrasenia no existe(contrasenia)'
            })
        }

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                ok: false,
                errors: errors.mapped()
            })
        }

        const token = await generarJWT( usuario.id, usuario.name, usuario.role )

        res.json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            role: usuario.role,
            token
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }
}

const revalidarToken = async(req, res = response) => {
    
    const {uid, name, role} = req
    const token = await generarJWT( uid, name, role )

    res.json({
        ok: true,
        uid,
        name,
        role,
        token
    })
}

const getUsers = async(req, res = response) => {

    const users = await Usuario.find();

    res.json({
        ok: true,
        users
    })
}

const updateUsers = async(req, res = response) => {

    const userId = req.params.id

    try {
        
        const usuario = await Usuario.findById( userId )

        if( !usuario ){
            return res.status(404).json({
                ok: false,
                msg: 'No existe ese usuario' 
            })
        }

        const { password } = req.body
        const salt = bcrypt.genSaltSync()
        req.body.password = bcrypt.hashSync(password, salt)

        const nuevoUsuario = {
            ...req.body
        }

        const usuarioActualizado = await Usuario.findByIdAndUpdate( userId, nuevoUsuario, {new: true } )

        res.json({
            ok: true,
            users: usuarioActualizado
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

}

const deleteUsers = async(req, res = response) => {

    const userId = req.params.id

    try {
        
        const usuario = await Usuario.findById( userId )

        if( !usuario ){
            return res.status(404).json({
                ok: false,
                msg: 'No existe ese usuario' 
            })
        }

        await Usuario.findByIdAndDelete( userId )

        res.json({
            ok: true
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
    getUsers,
    updateUsers,
    deleteUsers
}