import { API_BASE_URL } from "../constants";

export const fetchRecommendEstimate = async (data) => {
    const URL = `${API_BASE_URL}/estimate/default`

    const response = await fetch(URL, {
        method : "POST",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(data)
    })
    return response
}

export const fetchSearchByEstimate = async (url, data) => {

    const URL = `${API_BASE_URL}/find/` + url;

    const response = await fetch(URL, {
        method : "POST",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(data)
    })

    return response;
}

export const fetchSaveEstimate = async (data) => {

    const URL = `${API_BASE_URL}/put`;

    const response = await fetch(URL, {
        method : "PUT",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(data)
    })

    return response;
}