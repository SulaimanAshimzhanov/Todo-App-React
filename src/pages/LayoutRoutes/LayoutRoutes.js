import { Route, Routes } from "react-router-dom";
import useAuth from "../../apps/Auth/helpers/hooks/useAuth";
import * as LayoutPages from "../../apps/Layout"
import Header from "../../components/Header/Header";
import NotAuth from "../../components/NotAuth/NotAuth";
import NotFound from "../../components/NotFound/NotFound";


function LayoutRoutes() {
    const { actions } = useAuth();

    if(!actions.token) return <NotAuth/>;

    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<LayoutPages.Main />}/>;
                <Route path="/create/todo" element={<LayoutPages.CreateTodo/>}/>

                <Route path="*" element={<NotFound location={"layout"}/>}/>
            </Routes>
        </div>
    )
}

export default LayoutRoutes;