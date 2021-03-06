import Sequelize from 'sequelize'
import { sequelize } from '../services/sequelize'

export default class UsersModel extends Sequelize.Model {}

UsersModel.init({
  id_user: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  login: {
    type: Sequelize.STRING(45),
    allowNull: false,
  },
  first_name: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  last_name: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING(25),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(45),
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
  modelName: 'users',
  underscored: true,
  paranoid: true,
  timestamps: true,
})
