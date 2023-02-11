import { Link } from "react-router-dom";
import "./index.scss";

function NotFound({location}) {

    return (
        <div className="notFound_container">
            <div className="notFound_container_card">
                <h1>404</h1>

                <p>
                    Oops! This page is not found!
                </p>

                <Link to={location === "layout" ? "/" : "/auth/login"}>
                    {location === "layout" ? "Go main" : "Go login"}
                </Link>
            </div>
        </div>
    )
}

export default NotFound;