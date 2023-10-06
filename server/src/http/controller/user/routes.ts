import { FastifyInstance } from 'fastify'
import { register } from './registerController'


export async function usersRoutes(app: FastifyInstance) {

  app.post('/register', register)
}