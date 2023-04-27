import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

const API = process.env.SERVER_URL;

const REGISTER_USER = async (userData: any) => {
  const response = await axios.post(`${API}/auth/register/`, userData);
  console.log("SERVER RESPONSE", response.data);
  toast.success(response.data.msg);
  // return response;
};
const LOGIN_USER = async (userData: any) => {
  try {
    const response = await axios.post(`${API}/auth/login`, userData);
    // return response;
    console.log("RESPONSE TO LOGIN", response.data);
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log("RESPONSE TO LOGIN ERROR", axiosError.response?.data);
    throw axiosError.response?.data;
  }
};

const LOGOUT_USER = async (userData: any) => {
  try {
    const response = await axios.get(`${API}/auth/logout`, userData);
    console.log("RESPONSE TO LOGOUT", response.data);
  } catch (error) {
    console.log({ error });
  }
};

const authThunk = {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
};

export default authThunk;
