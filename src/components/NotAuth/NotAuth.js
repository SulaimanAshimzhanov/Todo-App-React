import { Link } from "react-router-dom";

import "./index.scss";


function NotAuth() {

    return (
        <div className="notAuth_container">
            <div className="notAuth_container_card">
                <img src="https://i.pinimg.com/originals/47/70/85/4770855e7ce91f8a27265fa4b63900d5.gif" alt=""/>

                <p>
                    Oops! Your are not autorized!
                </p>
                <Link to={"/auth/login"}>
                    Go login
                </Link>
            </div>
        </div>
    )
}

export default NotAuth;