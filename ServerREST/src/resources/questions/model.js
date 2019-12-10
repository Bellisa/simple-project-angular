import Sequelize from 'sequelize'
import { sequelize } from '../services/sequelize'
import UsersModel from '../users/model'

export default class QuestionsModel extends Sequelize.Model {}

QuestionsModel.init({
  id_question: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_user: {
    type: Sequelize.INTEGER,
    references: {
      model: UsersModel,
      key: 'id_user',
    },
    allowNull: false,
  },
  sort_index: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  question_text_ru: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  question_text_eng: {
    type: Sequelize.TEXT,
    allowNull: false,
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
  modelName: 'questions',
  underscored: true,
  paranoid: true,
  timestamps: true,
})
