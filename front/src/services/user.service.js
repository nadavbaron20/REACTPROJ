import axios from "axios";
import { serverUrl } from "../utils/utils.js";
const token = localStorage.getItem("token");
const headers = {
  headers: {
    Authorization: token,
  },
};
const baseUrl = `${serverUrl}/user`;

const register = async (formValues) => {
  return await axios.post(`${baseUrl}/register`, formValues);
};
const login = async (formValues) => {
  return await axios.post(`${baseUrl}/login`, formValues);
};
const getSelfUser = async () => {
  return await axios.get(`${baseUrl}/getSelfUser`, headers);
};
const userService = {
  login,
  register,
  getSelfUser,
};
export default userService;
