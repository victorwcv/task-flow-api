import app from "./server.js";

try {
  await app.listen({ port: 3000 });
  console.log("Server running on http://localhost:3000");
} catch (error) {
  app.log.error(error);
  process.exit(1);
}
