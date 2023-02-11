import React from "react";
import Card from "../../../components/Card/Card";
import Loader from "../../../components/Loader/Loader";
import { LAYOUT_API } from "../helpers/api/api";

import "./Main.scss";


function Main() {
    const [todos, setTodos] = React.useState(null);
    const [render, setRender] = React.useState("text");

    React.useEffect(() => {
        LAYOUT_API.get_todo()
            .then(res => setTodos(res))
    }, [render])

    return (
        <div className="container">
            <div className="main_parent">
                <div className="main_parent_title">
                    <h2>Todo lists!</h2>
                </div>

                <div className="main_parent_row">
                    {!todos && <div className="main_parent_row_loader">
                        <Loader/>
                    </div>}

                    {todos?.length === 0 && <p>Empty</p>}

                    {todos?.map(item => <Card 
                        setRender={setRender} 
                        base={item} 
                        key={item.id}
                    />)}
                </div>
            </div>
        </div>
    )
}

export default Main;