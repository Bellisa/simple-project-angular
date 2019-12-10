import Sequelize from 'sequelize'
import { sequelize } from '../services/sequelize'
import QuestionModel from '../questions/model'

export default class AnswersModel extends Sequelize.Model {}

AnswersModel.init({
  id_answer: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_question: {
    type: Sequelize.INTEGER,
    references: {
      model: QuestionModel,
      key: 'id_question',
    },
    allowNull: false,
  },
  
  description_ru: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  description_eng: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  answer_ru: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  answer_eng: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  created_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  updated_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  deleted_at: {
    type: Sequelize.DATE,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'answers',
  underscored: true,
  paranoid: true,
  timestamps: true,
})
