import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiver-wfuh.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;
