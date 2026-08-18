import Fastify from "fastify";
import { taskRoutes } from "./tasks/routes.js";
import {
  type ZodTypeProvider,
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";

const app = Fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);

app.setSerializerCompiler(serializerCompiler);

app.setErrorHandler((error, _request, reply) => {
  if (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === "FST_ERR_VALIDATION"
  ) {
    return reply.status(400).send({
      message: "Invalid request",
    });
  }

  return reply.status(500).send({
    message: "Internal Server Error",
  });
});

app.register(taskRoutes);

export default app;
