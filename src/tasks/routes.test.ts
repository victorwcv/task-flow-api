import { describe, expect, it } from "vitest";
import app from "../server.js";

describe("Task API", () => {
  describe("GET /tasks", () => {
    it("should return an empty task list when there are no tasks", async () => {
      const response = await app.inject({
        method: "GET",
        url: "/tasks",
      });
      expect(response.statusCode).toBe(200);
      expect(response.json()).toEqual([]);
    });
  });

  describe("POST /tasks", () => {
    it("should create a task", async () => {
      const response = await app.inject({
        method: "POST",
        url: "/tasks",
        payload: {
          title: "My API task",
        },
      });
      expect(response.statusCode).toBe(201);
      expect(response.json()).toMatchObject({
        title: "My API task",
        status: "todo",
      });
    });
  });

  describe("GET /tasks/:id", () => {
    it("should return an existing task", async () => {
      const createTaskResponse = await app.inject({
        method: "POST",
        url: "/tasks",
        payload: {
          title: "My API task",
        },
      });
      const data = createTaskResponse.json();
      const response = await app.inject({
        method: "GET",
        url: `/tasks/${data.id}`,
      });

      expect(response.statusCode).toBe(200);
      expect(response.json()).toEqual(data);
    });

    it("should return 404 when the task does not exist", async () => {
      const nonExistingId = "00000000-0000-0000-0000-000000000000";
      const response = await app.inject({
        method: "GET",
        url: `/tasks/${nonExistingId}`,
      });
      expect(response.statusCode).toBe(404);
      expect(response.json()).toEqual({ message: "Task not found" });
    });
  });

  describe("PATCH /tasks/:id", () => {
    it("should update an existing task", async () => {
      const createTaskResponse = await app.inject({
        method: "POST",
        url: "/tasks",
        payload: {
          title: "My API task",
        },
      });
      const data = createTaskResponse.json();
      const response = await app.inject({
        method: "PATCH",
        url: `/tasks/${data.id}`,
        payload: {
          title: "Updated title",
        },
      });

      expect(response.statusCode).toBe(200);
      expect(response.json()).toMatchObject({ title: "Updated title" });
    });

    it("should return 404 when updating a non-existing task", async () => {
      const nonExistingId = "00000000-0000-0000-0000-000000000000";
      const response = await app.inject({
        method: "PATCH",
        url: `/tasks/${nonExistingId}`,
        payload: {
          title: "Updated title",
        },
      });
      expect(response.statusCode).toBe(404);
      expect(response.json()).toEqual({ message: "Task not found" });
    });
  });

  describe("DELETE /tasks/:id", () => {
    it("should delete an existing task", async () => {
      const createTaskResponse = await app.inject({
        method: "POST",
        url: "/tasks",
        payload: {
          title: "My API task",
        },
      });
      const data = createTaskResponse.json();
      const response = await app.inject({
        method: "DELETE",
        url: `/tasks/${data.id}`,
      });

      expect(response.statusCode).toBe(200);
      expect(response.json()).toEqual({ message: "Deleted Successfully" });
    });

    it("should return 404 when deleting a non-existing task", async () => {
      const nonExistingId = "00000000-0000-0000-0000-000000000000";
      const response = await app.inject({
        method: "DELETE",
        url: `/tasks/${nonExistingId}`,
      });
      expect(response.statusCode).toBe(404);
      expect(response.json()).toEqual({ message: "Task not found" });
    });
  });
});
