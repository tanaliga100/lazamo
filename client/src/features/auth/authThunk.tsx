import axios from "axios";

const API = process.env.SERVER_URL;

const REGISTER_USER = async (userData: any) => {
  try {
    const response = await axios.post(`${API}/auth/register/`, userData);
    console.log("RESPONSE TO REGISTERED", response.data);
  } catch (error) {
    console.log({ error });
  }
};
const LOGIN_USER = async (userData: any) => {
  try {
    const response = await axios.post(`${API}/auth/register`, userData);
    console.log("RESPONSE TO LOGIN", response.data);
  } catch (error) {
    console.log({ error });
  }
};
const LOGOUT_USER = async (userData: any) => {
  try {
    const response = await axios.get(`${API}/auth/register`, userData);
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
