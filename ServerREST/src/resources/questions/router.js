import { Router } from 'express'
/*import Validator from '../../middleware/validator'
import UserController from './controller'
import { UpdateAccountSchema } from './schema'
*/

const router = Router()
/*const controller = new UserController()
const { validate } = new Validator()

router.route('/account')
  .get(controller.getUser)
  .put(validate({ schema: UpdateAccountSchema }), controller.editUser)
*/
export default router