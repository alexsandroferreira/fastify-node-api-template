/* eslint-disable @typescript-eslint/no-unused-vars */
import { FastifyReply, FastifyRequest } from 'fastify'
export function verifyUserRole() {
  return async (req: FastifyRequest, reply: FastifyReply) => {
    console.log('modified jwt')
  }
}
