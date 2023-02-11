import React from "react"
import { useNavigate } from "react-router-dom";
import useAuth from "../../apps/Auth/helpers/hooks/useAuth";

import "./Header.scss";


const Header = () => {
    const { actions } = useAuth();
    const navigate = useNavigate();

    return (
        <header>
            <div className="container">
                <div className="navbar">
                    <h1 onClick={() => navigate("/")}>Todo App</h1>

                    <div className="navbar_row">
                        <button onClick={() => navigate("/create/todo")}>Create ToDo</button>
                        <button onClick={actions.handleLogOut}>Sign Out</button>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;