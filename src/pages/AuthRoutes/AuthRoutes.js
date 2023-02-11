import { Route, Routes, useNavigate } from "react-router-dom";
import * as AuthPages from "../../apps/Auth";
import useAuth from "../../apps/Auth/helpers/hooks/useAuth";
import NotFound from "../../components/NotFound/NotFound";


function AuthRoutes() {
    const navigate = useNavigate();
    const { actions } = useAuth();

    if(actions.token) return navigate("/");

    return (
        <div>
            <Routes>
                <Route path="/register" element={<AuthPages.Register />}/>;
                <Route path="/login" element={<AuthPages.Login />}/>;

                <Route path="*" element={<NotFound location={"auth"}/>}/>
            </Routes>
        </div>
    )
}

export default AuthRoutes;