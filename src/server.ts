import fastify from "fastify";
import { prisma } from './lib/prisma';

const app = fastify()

app.get('/cadastrar', async () => {
    await prisma.trip.create({
        data: {
            destination: 'Rio de Janeiro',
            starts_at: new Date(),
            ends_at: new Date(),
        }
    })

    return "Registro cadastrado!"
})

app.get('/listar', async () => {
    const trips = await prisma.trip.findMany()
    
    return trips
})

app.get('/teste', () => {
    return "Hello World"
})

app.listen({ port: 3333 }).then(() => {
    console.log("server running...")
})