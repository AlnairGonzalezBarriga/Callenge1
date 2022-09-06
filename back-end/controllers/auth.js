const { response } = require('express');
const { validationResult } = require('express-validator')

const crearUsuario = (req, res = response) =>{

    const {name, email, role, password} = req.body

    const errors = validationResult( req )
    if( !errors.isEmpty() ){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    res.status(201).json({
        ok: true,
        msg: 'register',
        name,
        email,
        role,
        password
    })
}

const loginUsuario = (req, res = response) =>{

    const {email, role, password} = req.body

    const errors = validationResult( req )
    if( !errors.isEmpty() ){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    res.json({
        ok: true,
        msg: 'login',
        email,
        role,
        password
    })
}

const revalidarToken = (req, res = response) =>{
    res.json({
        ok: true,
        msg: 'renew'
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}