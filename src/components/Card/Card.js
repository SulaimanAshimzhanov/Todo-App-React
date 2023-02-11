import React from "react";
import { LAYOUT_API } from "../../apps/Layout/helpers/api/api";


const Card = ({base, setRender}) => {

    const deleteTodo = (id) => {
        const request = LAYOUT_API.delete_todo(id)

        request.then(res => setRender("refresh"))
    }
    
    return (
        <div className="card">
            <h2>{base.title}</h2>

            <p>
                {base.description}
            </p>

            <h5>{base.date}</h5>

            <div className="card_footer">
                <button onClick={() => deleteTodo(base.id)}>Delete</button>
            </div>
        </div>
    )
}

export default Card;