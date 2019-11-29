import { Router } from 'express'
import Validator from '../../middelware/validator'
import AuthController from './controller'
import { RegistrationUserSchema,LoginUserSchema } from './schema'

const router = Router()
const controller = new AuthController()
const { validate } = new Validator()

router.post('/login', validate({ schema: LoginUserSchema }), controller.login)
router.post('/register', validate({ schema: RegistrationUserSchema }), controller.register)

export default router