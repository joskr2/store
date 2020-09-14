import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-store-f2b11.cloudfunctions.net/api",
});
export default instance;
