
import ResponseProvider from '../../providers/response-provider'
import AuthService from './service'

export default class AuthController extends ResponseProvider {

  /**
   * Login account and return account information with JWT token
   * @param req
   * @param res
   * @returns {Promise<void>}
   */
  login = async (req, res) => {
    const { email, password } = req.body
    try {
      const user = await AuthService.login(email, password)
      const token = await AuthService.generateToken(user.id, user.email)
      await this.response(null, res, {
        token,
        user
      })
    } catch (e) {
      await this.response(e, res, null)
    }
  }

  register = async (req, res) => {
    try {
      await AuthService.register({
        ...req.body
      })
      await this.response(null, res, null)
    } catch (e) {
      await this.response(e, res, null)
    }
  }
}