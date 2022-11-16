import { API_BASE_URL } from "../constants";

export const fetchRecommendEstimate = async ({ 
    budget, program, cpu, gpu, mainboard,
    memory, ssd, hdd, power 
}) => {
    const URL = `${API_BASE_URL}/api/estimate/default`

    const response = await fetch(URL, {
        method : "GET",
        headers : {
            "Context-type" : "application/json",
        },
        body : JSON.stringify({
            budget : budget,
            purpose_program : program,
            cpu : cpu,
            gpu : gpu,
            mainboard : mainboard,
            memory: memory,
            SSD: ssd,
            HDD: hdd,
            power: power,
        })
    })
    return response
}