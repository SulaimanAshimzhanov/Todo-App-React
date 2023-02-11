import { baseURL } from "../../../../configs/config"


function fetchFunction(data, endPoint) {
    return fetch(`${baseURL}/${endPoint}/`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(res => res.json())
}


export const API = {
    
    register: (data) => fetchFunction(data, "users"),

    login: (data) => fetchFunction(data, "token"),

    getUserById: (id) => 
        fetch(`${baseURL}/user/${id}`).then(res => res.json())


}