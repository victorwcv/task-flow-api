import { beforeEach, describe, expect, it } from "vitest";
import { TaskStore } from "./store.js";

describe("TaskStore", () => {
  let taskStore: TaskStore;

  beforeEach(() => {
    taskStore = new TaskStore();
  });

  describe("createTask", () => {
    it("should create a task with the provided title", () => {
      const payload = { title: "My test task title" };
      const task = taskStore.createTask(payload);
      expect(task).toMatchObject({ title: payload.title });
      expect(taskStore.getTaskById(task.id)).toEqual(task);
    });
  });

  describe("getTaskById", () => {
    it("should get an exisitng task by id", () => {
      const payload = { title: "My test task title" };
      const task = taskStore.createTask(payload);
      expect(taskStore.getTaskById(task.id)).toEqual(task);
    });

    it("should return undefined when the task does not exist", () => {
      expect(taskStore.getTaskById("123")).toBeUndefined();
    });
  });

  describe("getAllTasks", () => {
    it("should return all tasks", () => {
      const task1 = taskStore.createTask({ title: "Task 1" });
      const task2 = taskStore.createTask({ title: "Task 2" });

      const tasks = taskStore.getAllTasks();

      expect(tasks).toHaveLength(2);
      expect(tasks).toEqual([task1, task2]);
    });
  });

  describe("updateTask", () => {
    it("should update an existing task", () => {
      const task = taskStore.createTask({
        title: "Old title",
      });

      const updatedTask = taskStore.updateTask(task.id, {
        title: "New title",
      });

      expect(updatedTask).toMatchObject({
        id: task.id,
        title: "New title",
      });
    });

    it("should update an existing task while preserving unspecified fields", () => {
      const task = taskStore.createTask({
        title: "Original title",
        description: "Original description",
      });

      const updatedTask = taskStore.updateTask(task.id, {
        title: "New title",
      });

      expect(updatedTask).toEqual({
        ...task,
        title: "New title",
      });
    });

    it("should return undefined when updating a non-existing task", () => {
      const updatedTask = taskStore.updateTask("123", {
        title: "New title",
      });
      expect(updatedTask).toBeUndefined();
    });
  });

  describe("deleteTask", () => {
    it("should delete an existing task", () => {
      const task = taskStore.createTask({
        title: "My testing task",
      });
      const deleted = taskStore.deleteTask(task.id);
      expect(deleted).toBe(true);
      expect(taskStore.getTaskById(task.id)).toBeUndefined();
    });

    it("should return false when deleting a non-existing task", () => {
      const deleted = taskStore.deleteTask("123456");
      expect(deleted).toBe(false);
    });
  });
});
