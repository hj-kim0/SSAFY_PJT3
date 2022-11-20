import { API_BASE_URL } from "../constants";

//추천 리스트 받아옴
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

//검색 리스트 받아옴
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

//견적 저장함
export const fetchSaveEstimate = async (data) => {

    const URL = `${API_BASE_URL}/userestimate/put`;

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

//견적 리스트 받아옴
export const fetchEstimateList = async (data) => {

    const URL = `${API_BASE_URL}/userestimate/find`;

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

