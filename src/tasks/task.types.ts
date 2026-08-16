export type TaskStatus = "todo" | "in_progress" | "done";

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateTaskInput = {
  title: string;
  description?: string;
};

export type UpdateTaskInput = Partial<
  Pick<Task, "title" | "description" | "status">
>;
