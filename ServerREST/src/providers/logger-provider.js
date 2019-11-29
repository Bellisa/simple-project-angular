import expressWinston from 'express-winston'
import winston from 'winston'

export default class LoggerProvider {
  static httpLogger () {
    return expressWinston.logger({
      transports: [
        new winston.transports.Console()
      ],
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
      ),
      meta: true, // optional: control whether you want to log the meta data about the request (default to true)
      msg: 'HTTP {{req.method}} {{req.url}}',
      expressFormat: true,
      colorize: false
    })
  }

  static async errorLogger () {
    const format = winston.format
    const customFormat = format.printf(({ level, message, label, timestamp, stack }) => {
      return `${timestamp} [${label}] ${level}: ${message} , ${stack}`
    })
    return winston.createLogger({
      format: format.combine(
        format.label({ label: 'Error !' }),
        format.timestamp(),
        customFormat
      ),
      transports: [new winston.transports.Console()]
    })
  }
}
