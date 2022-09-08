const { response } = require('express')
const jwt = require('jsonwebtoken')

const validarJWT = (req, res = response, next) => {
    
    const token = req.header('x-token')
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No se encontro token'
        })
    }

    try {
        
        const {uid, name, role} = jwt.verify(
            token,
            process.env.SECRETE_JWT_SEED
        )

        req.uid = uid
        req.name = name
        req.role = role

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token invalido'
        })
    }

    next()
}

module.exports = {
    validarJWT
}