import axios from "axios";
import frontend_url from "./frontendUrl";

const instance = axios.create({
  baseURL: frontend_url,
});

export default instance;
