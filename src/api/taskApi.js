import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const createTask = async (taskData) => {
  const response = await API.post("/tasks", taskData);

  return response.data;
};

export const getTasks = async () => {
  const response = await API.get("/tasks");

  return response.data;
};

export const assignTask = async (id) => {
  const response = await API.post(`/tasks/${id}/assign`);

  return response.data;
};