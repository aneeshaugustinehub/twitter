import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

export const getUsers = () => api.get("/users").then(r => r.data);
export const getTweets = () => api.get("/Tweets").then(r => r.data);

export default api;