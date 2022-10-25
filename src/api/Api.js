import axios from "axios";
import { baseUrl } from "../constanta";

const http = axios.create({
  baseURL: baseUrl,
});

const Api = {
  getProjec: () => http.get(),
  deleteProjec: (id) => http.delete("/" + id)
};

export default Api;
