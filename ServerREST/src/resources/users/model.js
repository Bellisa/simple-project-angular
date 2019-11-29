import Sequelize from 'sequelize'
import { sequelize } from '../services/sequelize'

export default class UserModel extends Sequelize.Model {}

UserModel.init({
  id: {
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
}, {
  sequelize,
  modelName: 'users',
  underscored: true,
  paranoid: true,
  timestamps: true,
})
