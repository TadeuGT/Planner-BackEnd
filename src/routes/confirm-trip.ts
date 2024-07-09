import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from 'zod'

export async function confirmTrip(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().get('/trips/:tripID/confirm', {
        schema: {
            params: z.object({
                tripID: z.string().uuid(),
            })
        },
    }, async (request) => {

        return { tripId: request.params.tripID }
    })
}