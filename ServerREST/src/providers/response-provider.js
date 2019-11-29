import { DatabaseError, TimeoutError, EmptyResultError, ConnectionError } from 'sequelize'
import ValidationProvider from './validation-provider'
import LoggerProvider from './logger-provider'
import { JsonWebTokenError } from 'jsonwebtoken'

export default class ResponseProvider extends Error {
  async response (e, response, ...data) {
    switch (e && e.constructor) {
      case DatabaseError:
      case TimeoutError:
      case ConnectionError: {
        await this.DBErrorResponse(e, response)
        break
      }
      case EmptyResultError:
        await this.notFoundResponse(e, response)
        break
      case ValidationProvider:
        await this.validationErrorResponse(e, response)
        break
      case Error:
      case TypeError: {
        await this.logger(e, response)
        break
      }
      case JsonWebTokenError: this.jwtError(e, response)
        break
      default:
        await this.successResponse(response, ...data)
    }
  }

  async validationErrorResponse (e, response) {
    response.status(e.statusCode).send({
      message: e.message || 'Validation Failed',
      errors: e.fields
    })
  }

  async successResponse (response, data) {
    response.status(200).send({
      message: 'Success',
      data
    })
  }

  async notFoundResponse (e, response) {
    response.status(404).send({
      message: 'Record not found',
      error: null
    })
  }

  async logger (e, response) {
    const logger = await LoggerProvider.errorLogger()
    logger.info('error', e)
    response.status(500).send({
      message: 'Server temporary unavailable',
      error: null
    })
  }

  async jwtError (e, response) {
    const logger = await LoggerProvider.errorLogger()
    logger.info('error', e)
    response.status(401).send({
      message: e.message,
      error: null
    })
  }

  async DBErrorResponse (e, response) {
    const logger = await LoggerProvider.errorLogger()
    logger.error(e)
    response.status(500).send({
      message: 'Server temporary unavailable',
    })
  }
}
