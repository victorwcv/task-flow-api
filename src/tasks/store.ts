import type { CreateTaskInput, Task, UpdateTaskInput } from "./schemas.js";

class TaskStore {
  private tasks = new Map<string, Task>();

  createTask(input: CreateTaskInput): Task {
    const id = crypto.randomUUID();
    const newTask: Task = {
      id,
      title: input.title,
      ...(input.description !== undefined && {
        description: input.description,
      }),
      createdAt: new Date(),
      updatedAt: new Date(),
      status: "todo",
    };
    this.tasks.set(id, newTask);
    return newTask;
  }

  getTaskById(id: string): Task | undefined {
    return this.tasks.get(id);
  }

  getAllTasks(): Task[] {
    return Array.from(this.tasks.values());
  }

  updateTask(id: string, input: UpdateTaskInput): Task | undefined {
    const taskToUpdate = this.tasks.get(id);
    if (!taskToUpdate) return undefined;
    const taskUpdated = {
      ...taskToUpdate,
      ...(input.description !== undefined && {
        description: input.description,
      }),
      ...(input.status !== undefined && {
        status: input.status,
      }),
      ...(input.title !== undefined && {
        title: input.title,
      }),
      updatedAt: new Date(),
    };
    this.tasks.set(id, taskUpdated);
    return taskUpdated;
  }

  deleteTask(id: string): boolean {
    return this.tasks.delete(id);
  }
}

export const taskStore = new TaskStore();
