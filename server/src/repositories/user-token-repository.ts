import { User, UserToken } from '@prisma/client'

export interface UserTokenRepository {
  generate(userId: string): Promise<UserToken>
  findByToken(token: string): Promise<UserToken | null>
  saveToken(tokenId: User): Promise<User>
}