import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
