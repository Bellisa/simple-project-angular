import jwt from 'jsonwebtoken'
import { getToken } from '../resources/utils'
import ResponseProvider from '../providers/response-provider'

export default class JWTAuthMiddleware extends ResponseProvider {
  check = async (req, res, next) => {
    const token = getToken(req)
    try {
      jwt.verify(token, process.env.JWT_KEY)
      next()
    } catch (e) {
      this.response(e, res, null)
    }
  }
}
