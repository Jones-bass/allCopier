import { FastifyInstance } from 'fastify'
import { registerController } from './registerController'
import { authenticateController } from './authenticateController'


export async function usersRoutes(app: FastifyInstance) {

  app.post('/register', registerController)

  app.post('/sessions', authenticateController)

}