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




// export const fetchRecommendEstimate = async ({ 
//     budget, purpose_program, cpu, gpu, mainboard,
//     memory, ssd, cooler, power, tower 
// }) => {
//     const URL = `${API_BASE_URL}/estimate/default/`

//     const params = {
//         "budget" : budget,
//         "purpose_program" : purpose_program,
//         "cpu" : cpu,
//         "gpu" : gpu,
//         "mainboard" : mainboard,
//         "memory": memory,
//         "ssd": ssd,
//         "cooler": cooler,
//         "power": power,
//         "tower": tower
//     }

//     let query = Object.keys(params)
//     .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
//     .join('&');

//     const url = URL + query;

//     const response = await fetch(url)
    
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