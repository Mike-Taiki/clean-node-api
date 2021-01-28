import * as config from './jest.config'
const conf = {
  ...config,
  testMatch: ['**/*.spec.ts']
}

export default {
  ...conf
}
