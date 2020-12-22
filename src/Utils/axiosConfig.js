import axios from "axios";
import { baseURL } from "./Constants";

const axiosConfig = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosConfig;
