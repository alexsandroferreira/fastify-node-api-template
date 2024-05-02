import { FastifyInstance } from 'fastify'
import { z } from 'zod'

import { home } from './controllers/home-controller'

export async function appRoutes(app: FastifyInstance) {
  app.get(
    '/',
    {
      schema: {
        tags: ['home'],
        summary: 'Get home page',
        response: {
          200: z.object({
            message: z.string().nullable(),
          }),
        },
      },
    },
    home,
  )
}
