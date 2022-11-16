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