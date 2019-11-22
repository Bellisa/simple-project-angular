const joi = require('joi');
module.exports = answer = {
    id_answer: joi.number(),
    id_question: joi.number().required(),
    description_ru: joi.string(),
    description_eng: joi.string(),
    answer_ru: joi.string(),
    answer_eng: joi.string()
}