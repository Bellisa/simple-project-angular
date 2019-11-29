import { Validator } from 'jsonschema'
import { formatErrors } from '../resources/utils'
import ResponseProvider from '../providers/response-provider'
import ValidationProvider from '../providers/validation-provider'

const validator = new Validator()

export default class ValidationMiddleware extends ResponseProvider {
  validateSchema = schema => (req, res, next) => {
    const val = validator.validate(req.body, schema)
    const { errors } = val
    if (errors.length) {
      const err = formatErrors(errors)
      return this.response(
        typeof err === 'string'
          ? new ValidationProvider(422, null, err)
          : new ValidationProvider(422, err, 'Validation Failed'),
        res,
        null
      )
    }
    next()
  }

  validateRouterParams = paramId => (req, res, next) => {
    const id = req.params[paramId]
    return Math.abs(id).toString() === id
      ? (req[paramId] = id, next())
      : this.response(new ValidationProvider(400, null, 'Route param is not valid'), res, null)
  }

  validate = ({ schema, paramId }) => {
    const targets = []
    paramId && targets.push(this.validateRouterParams(paramId))
    schema && targets.push(this.validateSchema(schema))
    return targets
  }
}
