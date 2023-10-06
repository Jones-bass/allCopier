export class UserDoesNotExists extends Error {
  constructor() {
    super('User does not exists.')
  }
}