import { API } from "./index";

export const getTest = async () => {
    const response = await API.get("/estimate/cpu");
    console.log(response.data);
    return response.data;
};
