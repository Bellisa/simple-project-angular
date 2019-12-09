import { Router } from 'express'
import Validator from '../../middelware/validator'
import AuthController from './controller'
import { RegistrationUserSchema,LoginUserSchema } from './schema'

const router = Router()
const controller = new AuthController()
const { validate } = new Validator()

router.post('/login', validate({ schema: LoginUserSchema }), controller.login)
router.post('/register', validate({ schema: RegistrationUserSchema }), controller.register)
router.get('/', (req,response)=>{
    response.status(200).send({
        message: 'Success'
      })
})

export default router