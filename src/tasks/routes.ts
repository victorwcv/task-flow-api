import {
  createTaskSchema,
  updateTaskSchema,
  taskParamsSchema,
  taskSchema,
  taskMessageResponseSchema,
  taskListResponseSchema,
} from "./schemas.js";
import { taskStore } from "./store.js";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";

export const taskRoutes: FastifyPluginAsyncZod = async (app) => {
  app.get(
    "/tasks",
    {
      schema: {
        response: {
          200: taskListResponseSchema,
        },
      },
    },
    (_req, _res) => {
      const tasks = taskStore.getAllTasks();
      return tasks;
    },
  );

  app.get(
    "/tasks/:id",
    {
      schema: {
        params: taskParamsSchema,
        response: { 200: taskSchema, 404: taskMessageResponseSchema },
      },
    },
    (req, res) => {
      const { id } = req.params;
      const task = taskStore.getTaskById(id);
      if (!task) {
        res.status(404);
        return { message: "Task not found" };
      }

      return task;
    },
  );

  app.post(
    "/tasks",
    {
      schema: {
        body: createTaskSchema,
        response: {
          201: taskSchema,
        },
      },
    },
    (req, res) => {
      const { body } = req;
      const task = taskStore.createTask(body);
      res.status(201);
      return task;
    },
  );

  app.patch(
    "/tasks/:id",
    {
      schema: {
        params: taskParamsSchema,
        body: updateTaskSchema,
        response: { 200: taskSchema, 404: taskMessageResponseSchema },
      },
    },
    (req, res) => {
      const { id } = req.params;
      const { body } = req;
      const taskUpdated = taskStore.updateTask(id, body);
      if (!taskUpdated) {
        res.status(404);
        return { message: "Task not found" };
      }
      return taskUpdated;
    },
  );

  app.delete(
    "/tasks/:id",
    {
      schema: {
        params: taskParamsSchema,
        response: {
          200: taskMessageResponseSchema,
          404: taskMessageResponseSchema,
        },
      },
    },
    (req, res) => {
      const { id } = req.params;
      const isDeleted = taskStore.deleteTask(id);
      if (!isDeleted) {
        res.status(404);
        return { message: "Task not found" };
      }
      return { message: "Deleted Successfully" };
    },
  );
};
