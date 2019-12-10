import jwt from 'jsonwebtoken'
import { EmptyResultError } from 'sequelize'
import { sequelize } from '../services/sequelize'
import UsersModel from '../users/model'

const { JWT_KEY } = process.env

export default class AuthService {
    static async generateToken(userId, userEmail) {
        return jwt.sign({
            id: userId,
            email: userEmail
        }, JWT_KEY)
    }

    /**
     * @param {string} email – user email
     * @param {string} password – user password
     * @returns {Promise<object>}
     */
    static async login(email, password) {
        let [user] = await sequelize.query(`
        SELECT
          *
        FROM user us
        WHERE us.email = '${email}' and us.password = '${password}'
      `)
        if (!user.length) { // check returned data structure todo
            throw new EmptyResultError()
        }
        return user;

    }

    /**
     * @param {object} user – req.body with user data
     * @returns {Promise<object>}
     */
    static async register(user) {
        let transaction
        try {
            // start transaction
            transaction = await sequelize.transaction({ autocommit: true })
            // create account
            const result = await UsersModel.create(user, { transaction })
            const res2 = await transaction.commit()
            return result;
        } catch (e) {
            if (transaction) {
                await transaction.rollback()
            }
        }
    }
}
