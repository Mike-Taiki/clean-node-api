import * as config from './jest.config'
const conf = {
  ...config,
  testMatch: ['**/*.test.ts']
}

export default {
  ...conf
}
