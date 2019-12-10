import express from 'express'
import cors from 'cors'
import models from './resources/services/sequelize'
import { privateRoutes, publicRoutes } from './routes'
import LoggerProvider from './providers/logger-provider'
import { config } from 'dotenv'

import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger'

config()
const { PORT } = process.env

export const app = express()


app.disable('x-powered-by')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(LoggerProvider.httpLogger())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/', publicRoutes)
//app.use('/api', new JWTAuthMiddleware().check, privateRoutes)


export const runServer = async () => {
  await models.sequelize.authenticate()

  app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`) // mv later todo
  })
}