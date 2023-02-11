import { API } from "./api";



export const createUser = data => API.register(data);

export const authUser = data => API.login(data);