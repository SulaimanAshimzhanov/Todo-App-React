import React from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../api/api";


function useAuth() {
    const [user, setUser] = React.useState(null);
    const userID = localStorage.getItem("userID");
    const [token, setTokenData] = React.useState(null);
    const navigate = useNavigate();


    const getUser = React.useCallback(() => {
        API.getUserById(userID)
            .then(res => setUser(res))
    }, [userID])


    const loadData = React.useCallback(() => {
        const localToken = localStorage.getItem("accessToken")

        setTokenData(localToken)

    }, [setTokenData])


    React.useEffect(() => {
        loadData()
    }, [loadData])

    const handleLogOut = () => {
        localStorage.clear();
        navigate("/auth/login")
    }

    return{
        actions: {
            token,
            handleLogOut
        }
    }
} 

export default useAuth;