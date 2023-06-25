import type { Controller, HttpRequest } from '../../presentation/protocols'
import type { Request, RequestHandler, Response } from 'express'

export const adaptRoute = (controller: Controller): RequestHandler =>
  async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
