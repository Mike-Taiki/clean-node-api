import type { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'

export class SignupController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      badRequest(new MissingParamError('name'))
    }

    if (!httpRequest.body.email) {
      badRequest(new MissingParamError('email'))
    }

    return {
      statusCode: 400,
      body: new Error()
    }
  }
}
