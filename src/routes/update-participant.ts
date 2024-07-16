import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from 'zod'
import { prisma } from "../lib/prisma";
import { ClientError } from "../errors/client-error";


export async function updateParticipant(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().put('/participants/:participantId', {
        schema: {
            params: z.object({
                participantId: z.string().uuid(),
            }),
            body: z.object({
                name: z.string().min(4),
                email: z.string().email(),
            }),
        },
    },
    async (request) => {
        const { participantId } = request.params
        const { name, email } = request.body

        const participant = await prisma.participant.findUnique({
            where: { id: participantId }
        })
        
        if (!participant) {
            throw new ClientError("Participant could not be found.")
        }

        await prisma.participant.update({
            where: {id: participantId},
            data: {
                name,
                email,
            },
        })

        return { participantId }
    })
}