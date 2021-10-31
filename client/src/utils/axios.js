import axios from "axios";

const instance = axios.create({
  baseURL: "https://ecommerce-app-mhs.herokuapp.com"
  // baseURL:
  //   process.env.NODE_ENV === "production"
  //     ? "https://ecommerce-app-mhs.herokuapp.com"
  //     : "http://localhost:5000",
});

export default instance;
