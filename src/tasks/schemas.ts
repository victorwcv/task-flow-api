import { z } from "zod";
import { TASK_STATUSES } from "./types.js";

export const createTaskSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
});

export type CreateTaskInput = z.infer<typeof createTaskSchema>;

export const updateTaskSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  status: z.enum(TASK_STATUSES).optional(),
});

export type UpdateTaskInput = z.infer<typeof updateTaskSchema>;
