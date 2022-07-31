import axios from "axios";

const token = sessionStorage.getItem("token") ?? "";

axios.defaults.headers.common = {
  Authorization: `Bearer ${token}`,
};

export default axios.create({
  baseURL: "https://localhost:7202/api",
});
