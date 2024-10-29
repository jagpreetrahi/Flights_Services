const { validateCreateRequest } = require('./airplane-validate');


module.exports = {
    ValidateRequest : require('./airplane-validate'),
    ValidateCity: require('./city-middleware'),
    CityMiddleware: require('./city-middleware')
}