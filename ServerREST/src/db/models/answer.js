const joi = require('joi');
module.exports = IAnswer = {
    id_answer: joi.number().required(),
    id_question: joi.number().required(),
    description_ru: joi.string().min(10).required(),
    description_eng: joi.string(),
    answer_ru: joi.string().min(10).required(),
    answer_eng: joi.string()
}
module.exports = class Answer {
    constructor() {
    }
    validateAnswer(value) {
        return new Promise((resolve, reject) => {
            resolve(joi.validate(value, IAnswer));
        })
    }
    

}