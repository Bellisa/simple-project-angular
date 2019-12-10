import Sequelize from 'sequelize'
import { sequelize } from '../services/sequelize'
import CategoriesModel from '../categories/model'

export default class SubCategoriesModel extends Sequelize.Model {}

SubCategoriesModel.init({
  id_sub_category: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_category: {
    type: Sequelize.INTEGER,
    references: {
      model: CategoriesModel,
      key: 'id_category',
    },
    allowNull: false,
  },
  sort_index: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING(250),
    allowNull: false,
  },
  description: {
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
  modelName: 'sub_categories',
  underscored: true,
  paranoid: true,
  timestamps: true,
})
