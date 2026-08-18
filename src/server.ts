import Fastify from "fastify";
import { taskRoutes } from "./tasks/routes.js";
import { ZodError } from "zod";

const app = Fastify();

app.setErrorHandler((error, request, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: "Invalid request body",
    });
  }

  return reply.status(500).send({
    message: "Internal Server Error",
  });
});

app.register(taskRoutes);

export default app;
