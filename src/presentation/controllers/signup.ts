import type { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'

export class SignupController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = [
      'name',
      'email',
      'password'
    ]

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    return {
      statusCode: 400,
      body: new Error()
    }
  }
}
