const {createLogger , format , transports, error} = require('winston');
const {timestamp , combine , label , printf } = format;

const customFormat = printf(({timestamp , message , label}) => {
    return `${timestamp} : ${message} : ${label}`
});

const logger = createLogger({
    format : combine(
        timestamp({format : 'YYYY-mm--dd  HH-MM-SS'}),
        label({label : "root"}),
        customFormat
    ),
    transports : [
        new transports.Console(),
        new transports.File({filename : 'combined.log'})
    ]
});

module.exports = logger;