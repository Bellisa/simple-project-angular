import Sequelize from 'sequelize'
import { sequelize } from '../services/sequelize'
import UsersModel from '../users/model'

export default class CategoriesModel extends Sequelize.Model {}

CategoriesModel.init({
  id_category: {
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
  title: {
    type: Sequelize.STRING(250),
    allowNull: false,
  },
  description: {
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
  modelName: 'categories',
  underscored: true,
  paranoid: true,
  timestamps: true,
})
