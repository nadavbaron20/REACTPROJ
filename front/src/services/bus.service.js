import axios from "axios";
import { serverUrl } from "../utils/utils.js";
const token = localStorage.getItem("token");
const headers = {
  headers: {
    Authorization: token,
  },
};
const baseUrl = `${serverUrl}/bus`;
const editBus = async (busId, formValues) => {
  return await axios.put(`${baseUrl}/editBus/${busId}`, formValues, headers);
};
const createBus = async (formValues) => {
  return await axios.post(`${baseUrl}/createBus`, formValues, headers);
};
const deleteBus = async (busId) => {
  return await axios.delete(`${baseUrl}/deleteBus/${busId}`, headers);
};
const getBusList = async () => {
  return await axios.get(`${baseUrl}/`);
};

const busService = {
  deleteBus,
  createBus,
  getBusList,
  editBus,
};
export default busService;
