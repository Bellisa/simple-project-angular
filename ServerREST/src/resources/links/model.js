import Sequelize from 'sequelize'
import { sequelize } from '../services/sequelize'

export default class LinksModel extends Sequelize.Model {}

LinksModel.init({
  id_link: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_res: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  id_type: {
    type: Sequelize.ENUM('answer', 'question', 'category', 'sub_category'), // clarify todo
    allowNull: false,
  },
  res_url: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  descroption: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  sort_index: {
    type: Sequelize.INTEGER,
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
  modelName: 'links',
  underscored: true,
  paranoid: true,
  timestamps: true,
})
