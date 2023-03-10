import { Link } from "react-router-dom";
import "./index.scss";


function AuthNavigate({location}) {
    console.log(location);

    return (
        <div className="auth_navigate">
            <Link to={location === "registerPage" ? "/auth/login" : "/auth/register"}>
                {
                    location === "registerPage"
                        ? "Alredy have an account"
                        : "You don't have an account"
                }
            </Link>
        </div>
    )
}

export default AuthNavigate;