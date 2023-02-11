import React from "react";
import { LAYOUT_API } from "../api/api";

const useLayout = () => {
    const [currentUser, setCurrentUser] = React.useState(null);

    React.useEffect(() => {
        LAYOUT_API.get_userInfo()
            .then(res => setCurrentUser(res))
    }, []);

    return {
        actions: {
            currentUser
        }
    }
}

export default useLayout;