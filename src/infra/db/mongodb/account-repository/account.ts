import type { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import type { AccountModel } from '../../../../domain/models/account'
import type { AddAccountModel } from '../../../../domain/usecases/add-account'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    try {
      const accountCollection = MongoHelper.getCollection('accounts')
      const result = await accountCollection.insertOne(accountData)
      const account = await accountCollection.findOne({ _id: result.insertedId })
      if (account?._id) {
        return MongoHelper.map(account)
      }
      throw new Error('Error when saving account')
    } catch (err) {
      throw new Error(err)
    }
  };
}
