const joi = require('joi');

module.exports = IUser = {
    id_user: joi.number().required(),
    login: joi.string(),
    email: String,
    last_name: String,
    first_name: String,
    token: String,
    password: String
}
