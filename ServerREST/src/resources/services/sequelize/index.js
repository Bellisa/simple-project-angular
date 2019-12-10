import Sequelize from 'sequelize'
import { config } from 'dotenv'

config()

const {
    DB_NAME,
    DB_PORT: port,
    DB_HOST: host,
    DB_USER,
    DB_PASSWORD,
} = process.env;

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    dialect: 'mysql',
    host,
    port,
    pool: {
        max: 10, // clarify todo
        min: 0,
    }
    /*,
    define: {
        engine: 'InnoDB',
        paranoid: true,
        timestamps: true,
        underscored: true,
        freezeTableName: true,
    },*/
})

const models = {
    answers: require('../../answers/model'),
    categories: require('../../categories/model'),
    links: require('../../links/model'),
    questions: require('../../questions/model'),
    
    sub_categories: require('../../sub-categories/model'),
    users: require('../../users/model')
    /*user: require('../../resources/account/model'),
    owner: require('../../resources/owner/model'),
    league: require('../../resources/league/model'),
    leagueUser: require('../../resources/league-user/model'),
    division: require('../../resources/division/model'),
    nflTeam: require('../../resources/nfl-team/model'),
    team: require('../../resources/team/model'),
    player: require('../../resources/player/model'),
    address: require('../../resources/address/model'),*/
  }
  


// todo
// Object.keys(models).forEach(modelName => {
//   if ("associate" in models[modelName]) {
//     models[modelName].associate(models);
//   }
// });

models.sequelize = sequelize
models.Sequelize = Sequelize

export default models
