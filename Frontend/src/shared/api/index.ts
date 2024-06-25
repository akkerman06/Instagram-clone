import axios from "axios";
import { LOCAL_STORAGE_TOKEN } from "../consts/LocalStorage";

const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);

export const $api = axios.create({
  baseURL:
    "instagram-clone-server-8iyy822x8-akkerman06s-projects.vercel.app/api",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `${token || ""}`,
  },
});
