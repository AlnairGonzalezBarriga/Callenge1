const { Schema, model } = require('mongoose')

const TeamSchema = Schema({

    teamClient: {
        type: String,
        required: true
    },
    accountName: {
        type: String,
        required: true
    },
    leaderName: {
        type: String,
        required: true
    },
    teamMembers: [{
        memberId: {
            type: Schema.Types.ObjectId,
            ref: 'Usuario',
            required: true
        }
    }]
})

module.exports = model('Team', TeamSchema)