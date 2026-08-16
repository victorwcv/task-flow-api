import type { CreateTaskInput, Task, UpdateTaskInput } from "./task.types.js";

class TaskStore {
  private tasks = new Map<string, Task>();

  createTask(input: CreateTaskInput): Task {
    const id = crypto.randomUUID();
    const newTask: Task = {
      ...input,
      id,
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
    const taskUpdated = { ...taskToUpdate, ...input, updatedAt: new Date() };
    this.tasks.set(id, taskUpdated);
    return taskUpdated;
  }

  deleteTask(id: string): boolean {
    return this.tasks.delete(id);
  }
}
