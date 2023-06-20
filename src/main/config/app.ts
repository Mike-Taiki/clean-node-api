import express from 'express'
import setupMiddlewares from './middlewares'
import setpeRoutes from './routes'

const app = express()
setupMiddlewares(app)
setpeRoutes(app)
export default app
