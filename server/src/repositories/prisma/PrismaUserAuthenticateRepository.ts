import { User, UserToken } from '@prisma/client'
import { prisma } from '../../lib/prisma'
import { UserTokenRepository } from '../user-token-repository'

export class PrismaUserAuthenticateRepository implements UserTokenRepository {
  async saveToken(data: User): Promise<User> {
    const tokenId = await prisma.user.update({
      where: {
        id: data.id,
      },
      data,
    })

    return tokenId
  }

  async findByToken(token: string): Promise<UserToken | null> {
    const tokenIn = await prisma.userToken.findFirst({
      where: {
        token,
      },
    })

    return tokenIn
  }

  async generate(userId: string): Promise<UserToken> {
    const tokenIn = await prisma.userToken.create({
      data: {
        userId,
      },
    })

    return tokenIn
  }
}