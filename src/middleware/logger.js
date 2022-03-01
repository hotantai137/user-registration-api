const Log = require('../models/logger')

const myLogger = function (req, res, next) {
    Log.writeLog(req);
    next()
  }

  module.exports = myLogger;