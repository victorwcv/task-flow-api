import type { FastifyInstance } from "fastify";
import { createTaskSchema, updateTaskSchema } from "./schemas.js";
import { taskStore } from "./store.js";

export function taskRoutes(app: FastifyInstance) {
  app.post("/tasks", async (req, res) => {
    const input = createTaskSchema.parse(req.body);
    const task = taskStore.createTask(input);
    return res.status(201).send(task);
  });

  app.get("/tasks", async (_req, res) => {
    const tasks = taskStore.getAllTasks();
    return res.status(200).send(tasks);
  });

  app.get<{ Params: { id: string } }>("/tasks/:id", (req, res) => {
    const id = req.params.id;
    const task = taskStore.getTaskById(id);
    if (!task) {
      return res.status(404).send({ message: "Task not found" });
    }
    return res.status(200).send(task);
  });

  app.patch<{ Params: { id: string } }>("/tasks/:id", (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const data = updateTaskSchema.parse(body);
    const taskUpdated = taskStore.updateTask(id, data);
    if (!taskUpdated) {
      return res.status(404).send({ message: "Task not found" });
    }
    return res.status(200).send(taskUpdated);
  });

  app.delete<{ Params: { id: string } }>("/tasks/:id", (req, res) => {
    const { id } = req.params;
    const isDeleted = taskStore.deleteTask(id);
    if (!isDeleted) {
      return res.status(404).send({ message: "Task not found" });
    }
    return res.status(200).send({
      message: "Task deleted successfully",
    });
  });
}
