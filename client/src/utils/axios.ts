import axios from "axios";

const customFetch = axios.create({
  baseURL: process.env.SERVER_URL,
  headers: {
    Accept: "application/json ",
  },
});

customFetch.interceptors.request.use((request: any) => {
  return request;
});

customFetch.interceptors.response.use((response: any) => {
  return response;
});
