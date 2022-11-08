import axios from "axios";

const BASE_URL = "http://k7c204.p.ssafy.io:8081";

export const API = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Access-Control-Allow-Origin": "http://k7c204.p.ssafy.io:8081/",
    }
  });

  


export const ex = () => {};

