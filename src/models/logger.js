const mongoose = require('mongoose')

const logSchema = mongoose.Schema({
    time: {
        type: Date
    },
    user: {
        type: String
    },
    content: {
        type: String
    },
    token: {
        type: String
    }
})

logSchema.pre('save', async function (next) {
    next()
})

const save1 = async function(req) {
    // Generate an auth token for the user
    const log = this;
    log.time = new Date();
    log.content = req;
    log.token = req.headers.authorization;
    await log.save();
    next();
}

logSchema.statics.writeLog = async (req) => {
    // this.save1(req);
    const log = this;
    log.time = new Date();
    log.content = req;
    log.token = req.headers.authorization;
    await log.save();
}

const Log = mongoose.model('Log', logSchema)

module.exports = Log