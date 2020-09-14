import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/store-f2b11/us-central1/api",
});
export default instance;
