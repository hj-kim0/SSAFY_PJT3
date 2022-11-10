import axios from "axios";

// const BASE_URL = "http://k7c204.p.ssafy.io:8081";
const BASE_URL = "http://localhost:8082";

export const API = axios.create({
    baseURL: BASE_URL,
    headers: {
      // "Access-Control-Allow-Origin": "http://k7c204.p.ssafy.io:8081/",
      "Access-Control-Allow-Origin": "http://localhost:8082/",

    }
  });




export const ex = () => {};

