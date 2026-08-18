import { z } from "zod";
import { TASK_STATUSES } from "./types.js";

export const taskSchema = z.object({
  id: z.uuid(),
  title: z.string(),
  description: z.string().optional(),
  status: z.enum(TASK_STATUSES),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const taskListResponseSchema = z.array(taskSchema);

export const updateTaskSchema = taskSchema
  .pick({
    title: true,
    description: true,
    status: true,
  })
  .partial();

export const createTaskSchema = taskSchema.pick({
  title: true,
  description: true,
});

export const taskParamsSchema = z.object({
  id: z.uuid(),
});

export type Task = z.infer<typeof taskSchema>;
export type CreateTaskInput = z.infer<typeof createTaskSchema>;
export type UpdateTaskInput = z.infer<typeof updateTaskSchema>;
export type TaskParams = z.infer<typeof taskParamsSchema>;

export const taskMessageResponseSchema = z.object({
  message: z.string(),
});
