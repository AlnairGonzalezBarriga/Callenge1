const { Schema, model } = require('mongoose')

const TeamSchema = Schema({

    teamName:{
        type: String,
        require: true
    },
    accountName:{
        type: String,
        require: true
    },
    leaderName:{
        type: String,
        require: true
    },
    teamMembers : [{
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }]
})

module.exports = model( 'Team', TeamSchema )