import { baseURL } from "../../../../configs/config";

const accessToken = localStorage.getItem("accessToken");

function fetchFunction(data, endPoint) {
    return fetch(`${baseURL}/${endPoint}/`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json());
}

const routes = {
    todo: "todo",
    users: "users"
}

export const LAYOUT_API = {
    createTodo: (data) => fetchFunction(data, routes.todo),

    get_userInfo: () => fetch(`${baseURL}/${routes.users}/get_userinfo`, {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    })
    .then(res => res.json()),

    get_todo: () => fetch(`${baseURL}/${routes.todo}/`, {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    })
    .then(res => res.json()),

    delete_todo: (id) => fetch(`${baseURL}/${routes.todo}/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    })
    .then(res => res.json())
}